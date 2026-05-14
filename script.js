// ========================
// 🎮 CENTRAL GAME STATE
// ========================
const Game = {
  count: 0,

  autoClickers: 0,
  multipliers: 0,
  criticalClicks: 0,
  clickPowers: 0,
  superAutos: 0,
  megaBoosts: 0,
  luckyCharms: 0,
  quantumSurges: 0,
  hyperdrives: 0,
  timeWarps: 0,
  ethereals: 0,
  ultraClaims: 0,

  prestigePoints: 0,
  rebirthCount: 0,
  rebirthCost: 1000000,

  clickMultiplier: 1,
  clickPower: 1,
  megaBoost: 1,
  criticalChance: 0,
  luckyBonus: 0,
  quantumStrength: 1,
  prestigeMultiplier: 1,
  hyperdriveLevel: 0,
  autoClicksPerSecond: 0,
  etherealMultiplier: 1,
  ultraClaimBonus: 1,
};

// ========================
// 🛡️ ANTI-CHEAT GUARD
// ========================
function sanitize() {
  for (const k in Game) {
    if (typeof Game[k] !== "number" || Number.isNaN(Game[k])) {
      Game[k] = 0;
    }
    if (Game[k] < 0) Game[k] = 0;
  }

  Game.clickMultiplier = Math.max(1, Game.clickMultiplier);
  Game.clickPower = Math.max(1, Game.clickPower);
  Game.megaBoost = Math.max(1, Game.megaBoost);
  Game.quantumStrength = Math.max(1, Game.quantumStrength);
  Game.prestigeMultiplier = Math.max(1, Game.prestigeMultiplier);
}

// ========================
// 🧠 DOM ELEMENTS
// ========================
const el = (id) => document.getElementById(id);

const countEl = el("count");
const clickButton = el("clickButton");
const resetButton = el("resetButton");
const effectsContainer = el("effectsContainer");

const rebirthButton = el("rebirthButton");
const prestigePointsEl = el("prestigePoints");
const prestigeMultiplierEl = el("prestigeMultiplier");
const rebirthCountEl = el("rebirthCount");
const prestigeStatusEl = el("prestigeStatus");

// ========================
// 📊 UI UPDATE
// ========================
function updateUI() {
  sanitize();

  countEl.textContent = Math.floor(Game.count);

  rebirthCountEl.textContent = Game.rebirthCount;
  prestigePointsEl.textContent = Game.prestigePoints;
  prestigeMultiplierEl.textContent = Game.prestigeMultiplier.toFixed(1);

  rebirthButton.textContent = `Rebirth (Cost: ${Game.rebirthCost.toLocaleString()})`;

  prestigeStatusEl.textContent =
    Game.rebirthCount === 0
      ? "Prestige upgrades unlock after your first rebirth."
      : "Prestige unlocked! Rebirth bonuses are active.";
}

// ========================
// 💥 CLICK SYSTEM
// ========================
clickButton.addEventListener("click", () => {
  let value =
    Game.clickPower *
    Game.clickMultiplier *
    Game.megaBoost *
    Game.quantumStrength *
    Game.etherealMultiplier *
    Game.ultraClaimBonus *
    Game.prestigeMultiplier;

  const crit = Math.random() < Game.criticalChance / 100;

  if (crit) value *= 2;

  if (Math.random() < Game.luckyBonus / 100) {
    value *= 1.25;
  }

  Game.count += value;

  updateUI();
});

// ========================
// 🔄 RESET
// ========================
resetButton.addEventListener("click", () => {
  if (!confirm("Reset all progress?")) return;

  for (const k in Game) {
    if (typeof Game[k] === "number") {
      Game[k] = 0;
    }
  }

  Game.clickMultiplier = 1;
  Game.clickPower = 1;
  Game.megaBoost = 1;
  Game.quantumStrength = 1;
  Game.prestigeMultiplier = 1;
  Game.etherealMultiplier = 1;
  Game.ultraClaimBonus = 1;

  updateUI();
});

// ========================
// 🔁 REBIRTH
// ========================
rebirthButton.addEventListener("click", () => {
  if (Game.count < Game.rebirthCost) {
    alert("Not enough clicks!");
    return;
  }

  const gain = Math.floor(Game.count / Game.rebirthCost);
  Game.prestigePoints += gain;
  Game.rebirthCount += 1;

  Game.prestigeMultiplier += 0.1;
  Game.rebirthCost = Math.floor(Game.rebirthCost * 1.7);

  // reset progress (keep prestige)
  Game.count = 0;

  Game.autoClickers = 0;
  Game.multipliers = 0;
  Game.criticalClicks = 0;
  Game.clickPowers = 0;
  Game.superAutos = 0;
  Game.megaBoosts = 0;
  Game.luckyCharms = 0;
  Game.quantumSurges = 0;
  Game.hyperdrives = 0;
  Game.timeWarps = 0;
  Game.ethereals = 0;
  Game.ultraClaims = 0;

  Game.clickMultiplier = 1;
  Game.clickPower = 1;
  Game.megaBoost = 1;
  Game.criticalChance = 0;
  Game.luckyBonus = 0;
  Game.quantumStrength = 1;
  Game.autoClicksPerSecond = 0;

  updateUI();
});

// ========================
// 🤖 AUTO CLICKER
// ========================
setInterval(() => {
  if (Game.autoClicksPerSecond > 0) {
    Game.count += Game.autoClicksPerSecond;
  }

  sanitize();
  updateUI();
}, 1000);

// ========================
// 🛡️ ANTI-CHEAT LOOP
// ========================
setInterval(() => {
  sanitize();
  updateUI();
}, 500);

// ========================
// 🚀 INIT
// ========================
updateUI();
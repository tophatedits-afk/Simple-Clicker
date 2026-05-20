// ========================
// SAVE SETUP
// ========================
const SAVE_KEY = "simpleClickerSave_v3";

// ========================
// GAME STATE
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
// SAVE / LOAD
// ========================
function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(Game));
}

function loadGame() {
  const data = JSON.parse(localStorage.getItem(SAVE_KEY));
  if (!data) return;
  Object.assign(Game, data);
}

// ========================
// SAFE DOM GET
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
const autoClicksPerSecondEl = el("autoClicksPerSecond");
const clickMultiplierEl = el("clickMultiplier");
const criticalChanceEl = el("criticalChance");
const clickPowerEl = el("clickPower");
const megaBoostEl = el("megaBoost");
const luckyBonusEl = el("luckyBonus");
const quantumStrengthEl = el("quantumStrength");
const hyperdriveLevelEl = el("hyperdriveLevel");
;

//================
// UPGRADES
//===============
const upgrades = [
  {
    button: el("autoClickerButton"),
maxButton: el("autoClickerMaxButton"),
countEl: el("autoClickerCount"),
cost: () => 10 + Game.autoClickers * 20,
buy: () => {
  console.log("AutoClicker bought!");

  const cost = upgrades[0].cost();
  if (Game.count < cost) return;

  Game.count -= cost;
  Game.autoClickers++;
  Game.autoClicksPerSecond += 1;
},
  },
  {
    button: el("multiplierButton"),
    maxButton: el("multiplierMaxButton"),
    countEl: el("multiplierCount"),
    cost: () => 50 + Game.multipliers * 50,
    buy: () => {
      const cost = upgrades[1].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.multipliers++;
      Game.clickMultiplier += 1;
    },
  },
  {
    button: el("criticalClickButton"),
    maxButton: el("criticalClickMaxButton"),
    countEl: el("criticalClickCount"),
    cost: () => 100 + Game.criticalClicks * 150,
    buy: () => {
      const cost = upgrades[2].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.criticalClicks++;
      Game.criticalChance += 5;
    },
  },
  {
    button: el("clickPowerButton"),
    maxButton: el("clickPowerMaxButton"),
    countEl: el("clickPowerCount"),
    cost: () => 200 + Game.clickPowers * 150,
    buy: () => {
      const cost = upgrades[3].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.clickPowers++;
      Game.clickPower += 1;
    },
  },
  {
    button: el("superAutoButton"),
    maxButton: el("superAutoMaxButton"),
    countEl: el("superAutoCount"),
    cost: () => 500 + Game.superAutos * 300,
    buy: () => {
      const cost = upgrades[4].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.superAutos++;
      Game.autoClicksPerSecond += 5;
    },
  },
  {
    button: el("megaBoostButton"),
    maxButton: el("megaBoostMaxButton"),
    countEl: el("megaBoostCount"),
    cost: () => 1200 + Game.megaBoosts * 1000,
    buy: () => {
      const cost = upgrades[5].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.megaBoosts++;
      Game.megaBoost += 1;
    },
  },
  {
    button: el("luckyCharmButton"),
    maxButton: el("luckyCharmMaxButton"),
    countEl: el("luckyCharmCount"),
    cost: () => 2000 + Game.luckyCharms * 1000,
    buy: () => {
      const cost = upgrades[6].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.luckyCharms++;
      Game.luckyBonus += 5;
      Game.criticalChance += 5;
    },
  },
  {
    button: el("quantumSurgeButton"),
    maxButton: el("quantumSurgeMaxButton"),
    countEl: el("quantumSurgeCount"),
    cost: () => 4500 + Game.quantumSurges * 2500,
    buy: () => {
      const cost = upgrades[7].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.quantumSurges++;
      Game.quantumStrength += 0.5;
      Game.clickMultiplier += 1;
      Game.autoClicksPerSecond += 5;
    },
  },
  {
    button: el("hyperdriveButton"),
    maxButton: el("hyperdriveMaxButton"),
    countEl: el("hyperdriveCount"),
    cost: () => 10000 + Game.hyperdrives * 5000,
    buy: () => {
      const cost = upgrades[8].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.hyperdrives++;
      Game.hyperdriveLevel++;
      Game.autoClicksPerSecond += 20;
      Game.criticalChance += 5;
      Game.megaBoost += 1;
    },
  },
  {
    button: el("timeWarpButton"),
    maxButton: el("timeWarpMaxButton"),
    countEl: el("timeWarpCount"),
    cost: () => 25000 + Game.timeWarps * 7500,
    buy: () => {
      const cost = upgrades[9].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.timeWarps++;
      Game.autoClicksPerSecond += 2;
    },
  },
  {
    button: el("etherealButton"),
    maxButton: el("etherealMaxButton"),
    countEl: el("etherealCount"),
    cost: () => 50000 + Game.ethereals * 15000,
    buy: () => {
      const cost = upgrades[10].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.ethereals++;
      Game.etherealMultiplier += 0.1;
    },
  },
  {
    button: el("ultraClaimButton"),
    maxButton: el("ultraClaimMaxButton"),
    countEl: el("ultraClaimCount"),
    cost: () => 100000 + Game.ultraClaims * 25000,
    buy: () => {
      const cost = upgrades[11].cost();
      if (Game.count < cost) return;
      Game.count -= cost;
      Game.ultraClaims++;
      Game.ultraClaimBonus *= 1.1;
    },
  },
];
const upgradeNames = [
  "Auto-Clicker",
  "Multiplier",
  "Critical Click",
  "Click Power",
  "Super Auto-Clicker",
  "Mega Boost",
  "Lucky Charm",
  "Quantum Surge",
  "Hyperdrive",
  "Time Warp",
  "Ethereal Force",
  "Ultra Claim"
];

function updateUpgradeButtons() {
  upgrades.forEach((u, i) => {
    if (!u.button) return;

    const cost = Math.floor(u.cost()).toLocaleString();
    
  });
}
    function formatCost(u) {
  return Math.floor(u.cost()).toLocaleString();
}

// ========================
// UPDATE UI
// ========================
function update() {
  if (!countEl) return;

  countEl.textContent = Math.floor(Game.count);

  upgrades.forEach((u, i) => {
  if (!u.countEl) return;

  const keys = [
    "autoClickers",
    "multipliers",
    "criticalClicks",
    "clickPowers",
    "superAutos",
    "megaBoosts",
    "luckyCharms",
    "quantumSurges",
    "hyperdrives",
    "timeWarps",
    "ethereals",
    "ultraClaims"
  ];

  u.countEl.textContent = Game[keys[i]] ?? 0;
});

  prestigePointsEl.textContent = Game.prestigePoints;
  prestigeMultiplierEl.textContent = Game.prestigeMultiplier.toFixed(1);
  rebirthCountEl.textContent = Game.rebirthCount;

  rebirthButton.textContent = `Rebirth (Cost: ${Game.rebirthCost.toLocaleString()})`;

  upgrades.forEach((u, i) => {
  if (!u.countEl || !u.button) return;

  const keys = [
    "autoClickers",
    "multipliers",
    "criticalClicks",
    "clickPowers",
    "superAutos",
    "megaBoosts",
    "luckyCharms",
    "quantumSurges",
    "hyperdrives",
    "timeWarps",
    "ethereals",
    "ultraClaims"
  ];

  u.countEl.textContent = Game[keys[i]] ?? 0;

  const baseName = u.button.id.replace("Button", "");

  u.button.textContent =
    `${baseName} (Cost: ${formatCost(u)})`;
});
}

// ========================
// CLICK
// ========================
clickButton?.addEventListener("click", () => {
  let value =
    Game.clickPower *
    Game.clickMultiplier *
    Game.megaBoost *
    Game.quantumStrength *
    Game.etherealMultiplier *
    Game.ultraClaimBonus *
    Game.prestigeMultiplier;

  if (Math.random() < Game.criticalChance / 100) value *= 2;
  if (Math.random() < Game.luckyBonus / 100) value *= 1.25;

  Game.count += value;
  autoClicksPerSecondEl.textContent = Game.autoClicksPerSecond;

clickMultiplierEl.textContent = Game.clickMultiplier.toFixed(1);

criticalChanceEl.textContent = Game.criticalChance;

clickPowerEl.textContent = Game.clickPower;

megaBoostEl.textContent = Game.megaBoost.toFixed(1);

luckyBonusEl.textContent = Game.luckyBonus;

quantumStrengthEl.textContent = Game.quantumStrength.toFixed(1);

hyperdriveLevelEl.textContent = Game.hyperdriveLevel;

  saveGame();
  update();
});

// ========================
// MAX BUY (FIXED)
// ========================
function buyMax(u) {
  let bought = 0;
  const MAX = 100000;

  while (bought < MAX) {
    const cost = u.cost();
    if (Game.count < cost) break;
    u.buy();
    bought++;
  }

  update();
}

// ========================
// HOOK BUTTONS
// ========================
upgrades.forEach(u => {
  u.button?.addEventListener("click", () => {
    u.buy();
    update();
    saveGame();
  });

  u.maxButton?.addEventListener("click", () => buyMax(u));
});

// ========================
// RESET
// ========================
resetButton?.addEventListener("click", () => {
  if (!confirm("Reset everything?")) return;
  localStorage.removeItem(SAVE_KEY);
  location.reload();
});

// ========================
// REBIRTH
// ========================
rebirthButton?.addEventListener("click", () => {
  if (Game.count < Game.rebirthCost) return;

  Game.prestigePoints += Math.floor(Game.count / Game.rebirthCost);
  Game.rebirthCount++;
  Game.prestigeMultiplier *= 1.25;
  Game.rebirthCost = Math.floor(Game.rebirthCost * 1.7);

  Game.count = 0;
  Game,clickMultiplier = 1;
  Game.clickPower = 1;
  Game.etherealMultiplier = 1;
  Game.ultraClaimBonus = 1;
  Game.quantumStrength = 1;
  Game.megaBoost = 1;
  //Upgrades:
  Game.autoClicksPerSecond = 0;
  Game.autoClickers = 0;
  Game.multipliers = 0;
  Game.criticalClicks = 0;
  Game.clickPowers = 0;
  Game.superAutos = 0;
  Game.megaBoosts = 0;
  Game.luckyCharms = 0;
  Game.quantumSurges = 0;
  Game.hyperdrives = 0;
  Game.ethereals = 0;
  Game.timeWarps = 0;
  Game.ultraClaims = 0;
  update();
  saveGame();
});

// ========================
// AUTO CLICK
// ========================
setInterval(() => {
  Game.count += Game.autoClicksPerSecond;
  update();
}, 1000);

// ========================
// SAVE LOOP
// ========================
setInterval(saveGame, 3000);

// ========================
// INIT
// ========================
loadGame();
update();
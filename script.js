const countEl = document.getElementById('count');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const effectsContainer = document.getElementById('effectsContainer');

const autoClickerButton = document.getElementById('autoClickerButton');
const multiplierButton = document.getElementById('multiplierButton');
const criticalClickButton = document.getElementById('criticalClickButton');
const clickPowerButton = document.getElementById('clickPowerButton');
const superAutoButton = document.getElementById('superAutoButton');
const megaBoostButton = document.getElementById('megaBoostButton');
const luckyCharmButton = document.getElementById('luckyCharmButton');
const quantumSurgeButton = document.getElementById('quantumSurgeButton');
const hyperdriveButton = document.getElementById('hyperdriveButton');
const timeWarpButton = document.getElementById('timeWarpButton');
const etherealButton = document.getElementById('etherealButton');
const ultraClaimButton = document.getElementById('ultraClaimButton');

const autoClickerMaxButton = document.getElementById('autoClickerMaxButton');
const multiplierMaxButton = document.getElementById('multiplierMaxButton');
const criticalClickMaxButton = document.getElementById('criticalClickMaxButton');
const clickPowerMaxButton = document.getElementById('clickPowerMaxButton');
const superAutoMaxButton = document.getElementById('superAutoMaxButton');
const megaBoostMaxButton = document.getElementById('megaBoostMaxButton');
const luckyCharmMaxButton = document.getElementById('luckyCharmMaxButton');
const quantumSurgeMaxButton = document.getElementById('quantumSurgeMaxButton');
const hyperdriveMaxButton = document.getElementById('hyperdriveMaxButton');
const timeWarpMaxButton = document.getElementById('timeWarpMaxButton');
const etherealMaxButton = document.getElementById('etherealMaxButton');
const ultraClaimMaxButton = document.getElementById('ultraClaimMaxButton');

const autoClickerCountEl = document.getElementById('autoClickerCount');
const multiplierCountEl = document.getElementById('multiplierCount');
const criticalClickCountEl = document.getElementById('criticalClickCount');
const clickPowerCountEl = document.getElementById('clickPowerCount');
const superAutoCountEl = document.getElementById('superAutoCount');
const megaBoostCountEl = document.getElementById('megaBoostCount');
const luckyCharmCountEl = document.getElementById('luckyCharmCount');
const quantumSurgeCountEl = document.getElementById('quantumSurgeCount');
const hyperdriveCountEl = document.getElementById('hyperdriveCount');
const timeWarpCountEl = document.getElementById('timeWarpCount');
const etherealCountEl = document.getElementById('etherealCount');
const ultraClaimCountEl = document.getElementById('ultraClaimCount');

const autoClicksPerSecondEl = document.getElementById('autoClicksPerSecond');
const clickMultiplierEl = document.getElementById('clickMultiplier');
const criticalChanceEl = document.getElementById('criticalChance');
const clickPowerEl = document.getElementById('clickPower');
const megaBoostEl = document.getElementById('megaBoost');
const luckyBonusEl = document.getElementById('luckyBonus');
const quantumStrengthEl = document.getElementById('quantumStrength');
const hyperdriveLevelEl = document.getElementById('hyperdriveLevel');

const rebirthButton = document.getElementById('rebirthButton');
const prestigePointsEl = document.getElementById('prestigePoints');
const prestigeMultiplierEl = document.getElementById('prestigeMultiplier');
const rebirthCountEl = document.getElementById('rebirthCount');
const prestigeStatusEl = document.getElementById('prestigeStatus');

const SAVE_KEY = "simpleClickerSave";

// ========================
// GAME VARIABLES
// ========================

let count = 0;
let autoClickers = 0;
let multipliers = 0;
let criticalClicks = 0;
let clickPowers = 0;
let superAutos = 0;
let megaBoosts = 0;
let luckyCharms = 0;
let quantumSurges = 0;
let hyperdrives = 0;
let timeWarps = 0;
let ethereals = 0;
let ultraClaims = 0;

let prestigePoints = 0;
let rebirthCount = 0;
let rebirthCost = 1000000;

let clickMultiplier = 1;
let clickPower = 1;
let megaBoost = 1;
let criticalChance = 0;
let luckyBonus = 0;
let quantumStrength = 1;
let prestigeMultiplier = 1;
let hyperdriveLevel = 0;
let autoClicksPerSecond = 0;
let etherealMultiplier = 1;
let ultraClaimBonus = 1;

// ========================
// SAVE / LOAD
// ========================

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({
    count,
    autoClickers,
    multipliers,
    criticalClicks,
    clickPowers,
    superAutos,
    megaBoosts,
    luckyCharms,
    quantumSurges,
    hyperdrives,
    timeWarps,
    ethereals,
    ultraClaims,
    prestigePoints,
    rebirthCount,
    rebirthCost,
    clickMultiplier,
    clickPower,
    megaBoost,
    criticalChance,
    luckyBonus,
    quantumStrength,
    prestigeMultiplier,
    hyperdriveLevel,
    autoClicksPerSecond,
    etherealMultiplier,
    ultraClaimBonus
  }));
}

function loadGame() {
  const save = JSON.parse(localStorage.getItem(SAVE_KEY));

  if (!save) return;

  count = save.count || 0;
  autoClickers = save.autoClickers || 0;
  multipliers = save.multipliers || 0;
  criticalClicks = save.criticalClicks || 0;
  clickPowers = save.clickPowers || 0;
  superAutos = save.superAutos || 0;
  megaBoosts = save.megaBoosts || 0;
  luckyCharms = save.luckyCharms || 0;
  quantumSurges = save.quantumSurges || 0;
  hyperdrives = save.hyperdrives || 0;
  timeWarps = save.timeWarps || 0;
  ethereals = save.ethereals || 0;
  ultraClaims = save.ultraClaims || 0;

  prestigePoints = save.prestigePoints || 0;
  rebirthCount = save.rebirthCount || 0;
  rebirthCost = save.rebirthCost || 1000000;

  clickMultiplier = save.clickMultiplier || 1;
  clickPower = save.clickPower || 1;
  megaBoost = save.megaBoost || 1;
  criticalChance = save.criticalChance || 0;
  luckyBonus = save.luckyBonus || 0;
  quantumStrength = save.quantumStrength || 1;
  prestigeMultiplier = save.prestigeMultiplier || 1;
  hyperdriveLevel = save.hyperdriveLevel || 0;
  autoClicksPerSecond = save.autoClicksPerSecond || 0;
  etherealMultiplier = save.etherealMultiplier || 1;
  ultraClaimBonus = save.ultraClaimBonus || 1;
}

// ========================
// UPGRADE SYSTEM
// ========================

const upgrades = [
  {
    button: autoClickerButton,
    maxButton: autoClickerMaxButton,
    countEl: autoClickerCountEl,
    getCount: () => autoClickers,
    cost: () => 10 + autoClickers * 5,
    buy: () => {
      const cost = upgrades[0].cost();
      if (count < cost) return;

      count -= cost;
      autoClickers++;
      autoClicksPerSecond++;
    }
  },

  {
    button: multiplierButton,
    maxButton: multiplierMaxButton,
    countEl: multiplierCountEl,
    getCount: () => multipliers,
    cost: () => 50 + multipliers * 25,
    buy: () => {
      const cost = upgrades[1].cost();
      if (count < cost) return;

      count -= cost;
      multipliers++;
      clickMultiplier++;
    }
  },

  {
    button: criticalClickButton,
    maxButton: criticalClickMaxButton,
    countEl: criticalClickCountEl,
    getCount: () => criticalClicks,
    cost: () => 100 + criticalClicks * 50,
    buy: () => {
      const cost = upgrades[2].cost();
      if (count < cost) return;

      count -= cost;
      criticalClicks++;
      criticalChance += 5;
    }
  },

  {
    button: clickPowerButton,
    maxButton: clickPowerMaxButton,
    countEl: clickPowerCountEl,
    getCount: () => clickPowers,
    cost: () => 200 + clickPowers * 100,
    buy: () => {
      const cost = upgrades[3].cost();
      if (count < cost) return;

      count -= cost;
      clickPowers++;
      clickPower++;
    }
  }
];

// ========================
// DISPLAY
// ========================

function updateDisplay() {
  countEl.textContent = Math.floor(count);

  upgrades.forEach((upgrade) => {
    upgrade.countEl.textContent = upgrade.getCount();
  });

  autoClicksPerSecondEl.textContent = autoClicksPerSecond;
  clickMultiplierEl.textContent = clickMultiplier;
  criticalChanceEl.textContent = criticalChance;
  clickPowerEl.textContent = clickPower;
  megaBoostEl.textContent = megaBoost;
  luckyBonusEl.textContent = luckyBonus;
  quantumStrengthEl.textContent = quantumStrength.toFixed(1);
  hyperdriveLevelEl.textContent = hyperdriveLevel;

  prestigePointsEl.textContent = prestigePoints;
  prestigeMultiplierEl.textContent = prestigeMultiplier.toFixed(1);
  rebirthCountEl.textContent = rebirthCount;

  rebirthButton.textContent =
    `Rebirth (Cost: ${rebirthCost.toLocaleString()})`;

  prestigeStatusEl.textContent =
    rebirthCount === 0
      ? 'Prestige upgrades unlock after your first rebirth.'
      : 'Prestige unlocked!';
}

function updateButtonCosts() {
  upgrades.forEach((upgrade) => {
    const cost = upgrade.cost();

    const label =
      upgrade.button.textContent.split(' (Cost:')[0];

    upgrade.button.textContent =
      `${label} (Cost: ${cost})`;

    upgrade.button.disabled = count < cost;
    upgrade.maxButton.disabled = count < cost;
  });
}

// ========================
// BUY MAX
// ========================

function buyMaxFor(upgrade) {
  while (count >= upgrade.cost()) {
    upgrade.buy();
  }

  updateDisplay();
  updateButtonCosts();
  saveGame();
}

// ========================
// CLICK BUTTON
// ========================

clickButton.addEventListener('click', () => {
  let clickValue =
    clickPower *
    clickMultiplier *
    megaBoost *
    quantumStrength *
    etherealMultiplier *
    ultraClaimBonus *
    prestigeMultiplier;

  const isCritical =
    Math.random() < criticalChance / 100;

  if (isCritical) {
    clickValue *= 2;
  }

  if (Math.random() < luckyBonus / 100) {
    clickValue *= 1.25;
  }

  count += clickValue;

  updateDisplay();
  updateButtonCosts();
  saveGame();
});

// ========================
// UPGRADE BUTTONS
// ========================

upgrades.forEach((upgrade) => {
  upgrade.button.addEventListener('click', () => {
    upgrade.buy();

    updateDisplay();
    updateButtonCosts();
    saveGame();
  });

  upgrade.maxButton.addEventListener('click', () => {
    buyMaxFor(upgrade);
  });
});

// ========================
// RESET
// ========================

resetButton.addEventListener('click', () => {
  localStorage.removeItem(SAVE_KEY);
  location.reload();
});

// ========================
// REBIRTH
// ========================

rebirthButton.addEventListener('click', () => {
  if (count < rebirthCost) return;

  prestigePoints += Math.floor(count / rebirthCost);

  rebirthCount++;
  prestigeMultiplier += 0.1;

  rebirthCost = Math.floor(rebirthCost * 1.7);

  count = 0;

  autoClickers = 0;
  multipliers = 0;
  criticalClicks = 0;
  clickPowers = 0;

  autoClicksPerSecond = 0;
  clickMultiplier = 1;
  clickPower = 1;
  criticalChance = 0;

  updateDisplay();
  updateButtonCosts();
  saveGame();
});

// ========================
// AUTO CLICK LOOP
// ========================

setInterval(() => {
  if (autoClicksPerSecond > 0) {
    count += autoClicksPerSecond;

    updateDisplay();
    updateButtonCosts();
    saveGame();
  }
}, 1000);

// ========================
// INIT
// ========================

loadGame();
updateDisplay();
updateButtonCosts();
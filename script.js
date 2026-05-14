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
const autoClickerMaxButton = document.getElementById('autoClickerMaxButton');
const multiplierMaxButton = document.getElementById('multiplierMaxButton');
const criticalClickMaxButton = document.getElementById('criticalClickMaxButton');
const clickPowerMaxButton = document.getElementById('clickPowerMaxButton');
const superAutoMaxButton = document.getElementById('superAutoMaxButton');
const megaBoostMaxButton = document.getElementById('megaBoostMaxButton');
const luckyCharmMaxButton = document.getElementById('luckyCharmMaxButton');
const quantumSurgeMaxButton = document.getElementById('quantumSurgeMaxButton');
const hyperdriveMaxButton = document.getElementById('hyperdriveMaxButton');
const autoClickerCountEl = document.getElementById('autoClickerCount');
const multiplierCountEl = document.getElementById('multiplierCount');
const criticalClickCountEl = document.getElementById('criticalClickCount');
const clickPowerCountEl = document.getElementById('clickPowerCount');
const superAutoCountEl = document.getElementById('superAutoCount');
const megaBoostCountEl = document.getElementById('megaBoostCount');
const luckyCharmCountEl = document.getElementById('luckyCharmCount');
const quantumSurgeCountEl = document.getElementById('quantumSurgeCount');
const hyperdriveCountEl = document.getElementById('hyperdriveCount');
const timeWarpButton = document.getElementById('timeWarpButton');
const timeWarpMaxButton = document.getElementById('timeWarpMaxButton');
const timeWarpCountEl = document.getElementById('timeWarpCount');
const etherealButton = document.getElementById('etherealButton');
const etherealMaxButton = document.getElementById('etherealMaxButton');
const etherealCountEl = document.getElementById('etherealCount');
const ultraClaimButton = document.getElementById('ultraClaimButton');
const ultraClaimMaxButton = document.getElementById('ultraClaimMaxButton');
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
const prestigeMultiplierButton = document.getElementById('prestigeMultiplierButton');
const prestigeMultiplierMaxButton = document.getElementById('prestigeMultiplierMaxButton');
const prestigeMultiplierCountEl = document.getElementById('prestigeMultiplierCount');
const prestigeAutoButton = document.getElementById('prestigeAutoButton');
const prestigeAutoMaxButton = document.getElementById('prestigeAutoMaxButton');
const prestigeAutoCountEl = document.getElementById('prestigeAutoCount');
const prestigeCritButton = document.getElementById('prestigeCritButton');
const prestigeCritMaxButton = document.getElementById('prestigeCritMaxButton');
const prestigeCritCountEl = document.getElementById('prestigeCritCount');
const prestigeLuckButton = document.getElementById('prestigeLuckButton');
const prestigeLuckMaxButton = document.getElementById('prestigeLuckMaxButton');
const prestigeLuckCountEl = document.getElementById('prestigeLuckCount');
const prestigeQuantumButton = document.getElementById('prestigeQuantumButton');
const prestigeQuantumMaxButton = document.getElementById('prestigeQuantumMaxButton');
const prestigeQuantumCountEl = document.getElementById('prestigeQuantumCount');

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
const tophatContainer = document.querySelector('.background-decorations');
const backgroundTophats = Array.from(document.querySelectorAll('.tophat'));
let lastMergedPair = null;

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
      autoClickers += 1;
      autoClicksPerSecond += 1;
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
      multipliers += 1;
      clickMultiplier += 1;
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
      criticalClicks += 1;
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
      clickPowers += 1;
      clickPower += 1;
    }
  },
  {
    button: superAutoButton,
    maxButton: superAutoMaxButton,
    countEl: superAutoCountEl,
    getCount: () => superAutos,
    cost: () => 500 + superAutos * 250,
    buy: () => {
      const cost = upgrades[4].cost();
      if (count < cost) return;
      count -= cost;
      superAutos += 1;
      autoClicksPerSecond += 5;
    }
  },
  {
    button: megaBoostButton,
    maxButton: megaBoostMaxButton,
    countEl: megaBoostCountEl,
    getCount: () => megaBoosts,
    cost: () => 1200 + megaBoosts * 400,
    buy: () => {
      const cost = upgrades[5].cost();
      if (count < cost) return;
      count -= cost;
      megaBoosts += 1;
      megaBoost += 1;
    }
  },
  {
    button: luckyCharmButton,
    maxButton: luckyCharmMaxButton,
    countEl: luckyCharmCountEl,
    getCount: () => luckyCharms,
    cost: () => 2000 + luckyCharms * 500,
    buy: () => {
      const cost = upgrades[6].cost();
      if (count < cost) return;
      count -= cost;
      luckyCharms += 1;
      luckyBonus += 5;
      criticalChance += 5;
    }
  },
  {
    button: quantumSurgeButton,
    maxButton: quantumSurgeMaxButton,
    countEl: quantumSurgeCountEl,
    getCount: () => quantumSurges,
    cost: () => 4500 + quantumSurges * 1200,
    buy: () => {
      const cost = upgrades[7].cost();
      if (count < cost) return;
      count -= cost;
      quantumSurges += 1;
      quantumStrength += 0.5;
      clickMultiplier += 1;
      autoClicksPerSecond += 5;
    }
  },
  {
    button: hyperdriveButton,
    maxButton: hyperdriveMaxButton,
    countEl: hyperdriveCountEl,
    getCount: () => hyperdrives,
    cost: () => 10000 + hyperdrives * 2500,
    buy: () => {
      const cost = upgrades[8].cost();
      if (count < cost) return;
      count -= cost;
      hyperdrives += 1;
      hyperdriveLevel += 1;
      autoClicksPerSecond += 20;
      criticalChance += 5;
      megaBoost += 1;
    }
  },
  {
    button: timeWarpButton,
    maxButton: timeWarpMaxButton,
    countEl: timeWarpCountEl,
    getCount: () => timeWarps,
    cost: () => 25000 + timeWarps * 3000,
    buy: () => {
      const cost = upgrades[9].cost();
      if (count < cost) return;
      count -= cost;
      timeWarps += 1;
      autoClicksPerSecond += 2;
    }
  },
  {
    button: etherealButton,
    maxButton: etherealMaxButton,
    countEl: etherealCountEl,
    getCount: () => ethereals,
    cost: () => 50000 + ethereals * 5000,
    buy: () => {
      const cost = upgrades[10].cost();
      if (count < cost) return;
      count -= cost;
      ethereals += 1;
      etherealMultiplier += 0.1;
    }
  },
  {
    button: ultraClaimButton,
    maxButton: ultraClaimMaxButton,
    countEl: ultraClaimCountEl,
    getCount: () => ultraClaims,
    cost: () => 100000 + ultraClaims * 8000,
    buy: () => {
      const cost = upgrades[11].cost();
      if (count < cost) return;
      count -= cost;
      ultraClaims += 1;
      ultraClaimBonus *= 1.1;
    }
  }
];

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
  rebirthButton.textContent = `Rebirth (Cost: ${rebirthCost.toLocaleString()})`;
  prestigeStatusEl.textContent = rebirthCount === 0
    ? 'Prestige upgrades unlock after your first rebirth.'
    : 'Prestige unlocked! Rebirth bonuses are active.';
}

function areRectsTouching(rectA, rectB) {
  return rectA.left < rectB.right && rectA.right > rectB.left && rectA.top < rectB.bottom && rectA.bottom > rectB.top;
}

function createMergedTophat(rectA, rectB) {
  const merged = document.createElement('div');
  merged.className = 'tophat merged-spot';
  merged.style.left = `calc(${((rectA.left + rectA.right + rectB.left + rectB.right) / 4) - tophatContainer.getBoundingClientRect().left}px)`;
  merged.style.top = `calc(${((rectA.top + rectA.bottom + rectB.top + rectB.bottom) / 4) - tophatContainer.getBoundingClientRect().top}px)`;
  merged.style.transform = 'translate(-50%, -50%)';
  merged.dataset.merged = 'true';
  tophatContainer.appendChild(merged);

  setTimeout(() => {
    merged.remove();
  }, 4000);
}

function checkTophatCollisions() {
  if (backgroundTophats.length < 2 || Math.random() > 0.12) return;

  for (let i = 0; i < backgroundTophats.length - 1; i += 1) {
    const hatA = backgroundTophats[i];
    if (hatA.classList.contains('touched')) continue;
    const rectA = hatA.getBoundingClientRect();

    for (let j = i + 1; j < backgroundTophats.length; j += 1) {
      const hatB = backgroundTophats[j];
      if (hatB.classList.contains('touched')) continue;
      const rectB = hatB.getBoundingClientRect();

      if (areRectsTouching(rectA, rectB)) {
        hatA.classList.add('touched');
        hatB.classList.add('touched');
        createMergedTophat(rectA, rectB);

        setTimeout(() => {
          hatA.classList.remove('touched');
          hatB.classList.remove('touched');
        }, 4000);

        return;
      }
    }
  }
}

setInterval(checkTophatCollisions, 2500);

function updateButtonCosts() {
  upgrades.forEach((upgrade) => {
    const cost = upgrade.cost();
    const label = upgrade.button.textContent.split(' (Cost:')[0];
    upgrade.button.textContent = `${label} (Cost: ${cost})`;
    upgrade.button.disabled = count < cost;
    upgrade.maxButton.disabled = count < cost;
  });
}

function showFloatingText(value, type = 'normal') {
  const text = document.createElement('div');
  text.className = `floating-text ${type}`;
  text.textContent = `+${Math.floor(value)}`;
  
  const x = Math.random() * 60 - 30;
  const y = Math.random() * 20 - 10;
  text.style.left = `calc(50% + ${x}px)`;
  text.style.top = `calc(20% + ${y}px)`;
  
  effectsContainer.appendChild(text);
  setTimeout(() => text.remove(), 1500);
}

function buyMaxFor(upgrade) {
  let bought = 0;
  const maxPerIteration = 1000; // Prevent browser freeze from massive loops
  while (bought < maxPerIteration && count >= upgrade.cost()) {
    upgrade.buy();
    bought++;
  }
  if (bought > 0) {
    updateDisplay();
    updateButtonCosts();
  }
}

clickButton.addEventListener('click', () => {
  let clickValue = clickPower * clickMultiplier * megaBoost * quantumStrength * etherealMultiplier * ultraClaimBonus * prestigeMultiplier;
  const isCritical = Math.random() < criticalChance / 100;
  
  if (isCritical) {
    clickValue *= 2;
    clickButton.classList.add('critical');
    showFloatingText(clickValue, 'critical');
    setTimeout(() => clickButton.classList.remove('critical'), 200);
  } else {
    showFloatingText(clickValue, 'normal');
  }
  
  if (Math.random() < luckyBonus / 100) {
    clickValue = Math.ceil(clickValue * 1.25);
  }

  count += clickValue;
  clickButton.classList.add('click-pulse');
  setTimeout(() => clickButton.classList.remove('click-pulse'), 600);
  
  updateDisplay();
  updateButtonCosts();
});

upgrades.forEach((upgrade) => {
  upgrade.button.addEventListener('click', () => {
    upgrade.buy();
    updateDisplay();
    updateButtonCosts();
  });
  upgrade.maxButton.addEventListener('click', () => buyMaxFor(upgrade));
});

resetButton.addEventListener('click', () => {
  const confirmed = confirm('Reset all progress and upgrades?');
  if (!confirmed) return;

  count = 0;
  autoClickers = 0;
  multipliers = 0;
  criticalClicks = 0;
  clickPowers = 0;
  superAutos = 0;
  megaBoosts = 0;
  luckyCharms = 0;
  quantumSurges = 0;
  hyperdrives = 0;
  timeWarps = 0;
  ethereals = 0;
  ultraClaims = 0;
  clickMultiplier = 1;
  clickPower = 1;
  megaBoost = 1;
  criticalChance = 0;
  luckyBonus = 0;
  quantumStrength = 1;
  hyperdriveLevel = 0;
  autoClicksPerSecond = 0;
  etherealMultiplier = 1;
  ultraClaimBonus = 1;
  updateDisplay();
  updateButtonCosts();
});

rebirthButton.addEventListener('click', () => {
  if (count < rebirthCost) {
    alert(`You need at least ${rebirthCost.toLocaleString()} clicks to rebirth!`);
    return;
  }
  const confirmed = confirm('Rebirth will reset all progress but give you prestige points and unlock new upgrades!');
  if (!confirmed) return;

  // Calculate prestige points based on total clicks and current rebirth cost
  const newPrestigePoints = Math.floor(count / rebirthCost);
  prestigePoints += newPrestigePoints;
  rebirthCount += 1;
  prestigeMultiplier += 0.1;
  rebirthCost = Math.floor(rebirthCost * 1.7);

  // Reset everything except prestige
  count = 0;
  autoClickers = 0;
  multipliers = 0;
  criticalClicks = 0;
  clickPowers = 0;
  superAutos = 0;
  megaBoosts = 0;
  luckyCharms = 0;
  quantumSurges = 0;
  hyperdrives = 0;
  timeWarps = 0;
  ethereals = 0;
  ultraClaims = 0;
  clickMultiplier = 1;
  clickPower = 1;
  megaBoost = 1;
  criticalChance = 0;
  luckyBonus = 0;
  quantumStrength = 1;
  hyperdriveLevel = 0;
  autoClicksPerSecond = 0;
  etherealMultiplier = 1;
  ultraClaimBonus = 1;

  updateDisplay();
  updateButtonCosts();
});

setInterval(() => {
  if (autoClicksPerSecond > 0) {
    count += autoClicksPerSecond;
    showFloatingText(autoClicksPerSecond, 'auto');
  }
  updateDisplay();
  updateButtonCosts();
}, 1000);

updateDisplay();
updateButtonCosts();
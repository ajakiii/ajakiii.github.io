let coins = 0;
let profitPerTap = 1;
let profitPerHour = 0;
let level = 1;
let coinsForUpgrade = 10000;

document.getElementById('tap-button').addEventListener('click', () => {
    coins += profitPerTap;
    document.getElementById('coins').innerText = coins.toLocaleString();
});

function updateStats() {
    document.getElementById('profit-per-tap').innerText = `+${profitPerTap}`;
    document.getElementById('profit-per-hour').innerText = `+${(profitPerHour / 1000).toFixed(2)}K`;
    document.getElementById('coins-for-upgrade').innerText = `${(coinsForUpgrade / 1000000).toFixed(1)}M`;
}

updateStats();
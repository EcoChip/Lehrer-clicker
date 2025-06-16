// script.js

let babaras = 0;
let bps = 0; // babaras por segundo
let upgrades = [
  { nombre: "Babara Panadera", precio: 10, bps: 0.1, cantidad: 0 },
  { nombre: "Adela Repostera", precio: 100, bps: 1, cantidad: 0 },
  { nombre: "Factoría Wolkenhaua", precio: 1000, bps: 10, cantidad: 0 },
  { nombre: "Ciudad Mendigurke", precio: 10000, bps: 50, cantidad: 0 }
];

function update() {
  document.getElementById("babaraCount").innerText = babaras.toFixed(1);
  document.getElementById("bpsDisplay").innerText = bps.toFixed(1);
  document.getElementById("levelDisplay").innerText = Math.min(Math.floor(bps), 800);
}

function clickBabara() {
  babaras++;
  update();
}

function buyUpgrade(i) {
  const up = upgrades[i];
  if (babaras >= up.precio) {
    babaras -= up.precio;
    up.cantidad++;
    bps += up.bps;
    up.precio = Math.floor(up.precio * 1.15);
    renderUpgrades();
    update();
  }
}

function renderUpgrades() {
  const container = document.getElementById("upgrades");
  container.innerHTML = "";
  upgrades.forEach((up, i) => {
    const div = document.createElement("div");
    div.className = "upgrade";
    div.innerHTML = `
      <strong>${up.nombre}</strong><br>
      Nivel: ${up.cantidad}<br>
      +${up.bps} BPS<br>
      Precio: ${up.precio} 🍞<br>
      <button onclick="buyUpgrade(${i})">Comprar</button>
    `;
    container.appendChild(div);
  });
}

setInterval(() => {
  babaras += bps / 10;
  update();
}, 100);

document.addEventListener("DOMContentLoaded", () => {
  renderUpgrades();
  update();
});

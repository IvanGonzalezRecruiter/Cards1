/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["heart", "diamond", "spade", "club"];

  let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let card = document.querySelector(".card");
  let cardValue = document.querySelector("h1");

  cardValue.innerHTML = value[getRndInt(0, value.length)];

  card.classList.add(palos[getRndInt(0, palos.length)]);

  document.querySelector(".btn").textContent = "Repartir";

  document.querySelector(".btn").addEventListener("click", function() {
    for (let i = 0; i < palos.length; i++) {
      if (card.classList.contains(palos[i])) {
        card.classList.remove(palos[i]);

        card.classList.add(palos[getRndInt(0, palos.length)]);
      }
    }

    cardValue.innerHTML = value[getRndInt(0, value.length)];
  });
};

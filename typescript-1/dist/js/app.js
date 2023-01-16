import { NegociacaoControlar } from "./controllers/negociacao-controller.js";
const controler = new NegociacaoControlar;
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    controler.adiciona();
});

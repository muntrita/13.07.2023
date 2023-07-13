/*1.creare una funzione con dentro un loop che inizia con uno e finisce con 76*/
const tabella = document.getElementsByClassName("tabellone")[0];
const generateCell = function () {
  for (let i = 0; i < 76; i++) {
    const cella = document.createElement("div");
    cella.classList.add(`${i + 1}`);
    cella.classList.add("cella");
    cella.innerText = `${i + 1}`;
    tabella.appendChild(cella);
  }
};
generateCell();

/*const generaNumeri = function (event) {
  const arr = [];
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1);
  }
  return arr;
};*/

const generaNumeriRandom = function (generaEvent) {
  const numeri = Math.floor(Math.random() * 76 + 1);
  const numeri2 = parseInt(numeri) - 0;
  const esciCella = document.getElementsByClassName(`${numeri2}`)[0];
  esciCella.classList.add("numeroUscito");
  console.log(esciCella);
  return numeri2;
};

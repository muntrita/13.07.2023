/*1.creare una funzione con dentro un loop che inizia con uno e finisce con 76*/

const generateCell = function () {
  const cell = document.querySelector(".cella");
  for (let i = 0; i < 76; i++) {
    cell.innerHTML += `<div class='cella'>${i + 1}</div>`;
  }
};
generateCell();

const generaNumeri = function () {
  const arr = [];
  for (let i = 0; i < 76; i++) {
    arr.push(i + 1);
  }
  return arr;
};
/*2.crea un bottono che riesca a selezionare un numero randon da 1 a 76 */

// h1
let titulo = document.querySelector("#box h1");
let mensagem = document.querySelector("#box h2");
function atualizarRelogio() {
  // cria novo horario
  let novaData = new Date();
  // quebra data em partes
  let horas = String(novaData.getHours()).padStart(2, "0");
  let minutos = String(novaData.getMinutes()).padStart(2, "0");
  let segundos = String(novaData.getSeconds()).padStart(2, "0");
  // titulo recebe hora atual
  titulo.innerHTML = `${horas}:${minutos}:${segundos}`;
}
// chama funcao
atualizarRelogio();

// funcao de mensagem
function saudacao() {
  let body = document.querySelector("body");
  let dataNova = new Date();
  let hora = dataNova.getHours();
  // logica da saudacao
  if (hora >= 5 && hora < 12) {
    mensagem.innerHTML = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    mensagem.innerHTML = "Boa tarde";
  } else {
    mensagem.innerHTML = "Boa noite";
  }
}
// funcao se chama a cada 1s
setInterval(atualizarRelogio, 1000);
saudacao();

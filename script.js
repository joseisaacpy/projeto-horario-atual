function atualizarRelogio() {
  // relogio / h2
  let relogio = document.getElementById("relogio");
  //   data
  let dataAtual = new Date();
  //   formatar a data
  let opcoes = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  //   data formatada
  let horaFormatada = dataAtual.toLocaleTimeString("pt-BR", opcoes);

  relogio.textContent = "São exatamente " + horaFormatada;
}
//   chama a função
atualizarRelogio();
// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

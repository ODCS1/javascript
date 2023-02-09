function contar() {
  // Mensagem
  let msg = document.querySelector("div#res");

  // Contar
  let inicio = document.querySelector("input#istart");
  let fim = document.querySelector("input#iend");
  let passo = document.querySelector("input#ipasso");

  if (i.length == 0 || f.length == 0 || p.length == 0) {
    window.alert("[ERRO] tente novamente");
  } else {
    msg.innerHTML = "Contando: ";
    let i = Number(inicio.value);
    let f = Number(end.value);
    let p = Number(passo.value);
    if (i < f && p > 0) {
      for (var c = i; c <= f; c += p) {
        msg.innerHTML += `${c} \u{1F449}`;
      }
    } else if (i > f) {
      for (c = i; c >= f; c -= p) {
        msg.innerHTML += `${c} \u{1F449}`;
      }
    }
  }
}

function contar() {
  // Mensagem
  var msg = document.querySelector("div#res");

  // Contar
  var inicio = document.querySelector("input#istart");
  var fim = document.querySelector("input#iend");
  var passo = document.querySelector("input#ipasso");
  var i = Number(inicio.value);
  var f = Number(end.value);
  var p = Number(passo.value);

  if (i == 0 || f == 0 || p == 0){
    msg.innerHTML = '[ERRO] tente novamente'
  } else{
    msg.innerHTML = 'Contando: '
    if (i < f && p > 0){
      for (var c = i; c <= f; c += p){
        msg.innerHTML += `${c} \u{1F449}`
      }
    } else{
      if (i > f && p < 0)
    }
  }
}

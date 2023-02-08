function verificar() {
  // conteúdo
  var content = document.querySelector("div#conteudo");

  // Idade
  var anon = document.querySelector("input#iano").value;
  var anon = Number(anon);
  var agora = new Date();
  var anoa = agora.getFullYear();
  var idade = anoa - anon;

  // sexo
  var inputh = document.querySelector("input[value='h']");
  var inputm = document.querySelector("input[value='m']")
  var sexo;
  
  inputh.addEventListener("change", function(){
    if (inputh.checked){
      sexo = inputh.value
    }
  })
  inputm.addEventListener("change", function (){
    if (inputm.checked){
      sexo = inputm.value
    }
  })

  // Estrutura Condicional
  if (idade <= 13 && sexo == 'm') {
    content.innerText = `Detectamos uma menina de ${idade} anos.`;
    content += Img.src('crianca-m')
  }
}

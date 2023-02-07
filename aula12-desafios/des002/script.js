function verificar(){

  // conteúdo
  var content = document.querySelector('div#conteudo')

  // Idade
  var anon = document.querySelector('imput#iano')
  var anon = Number(anon)
  var agora = new Date()
  var anoa = agora.getFullYear()
  var idade = anoa - anon

  // sexo
  var sexo = document.querySelector('input#')

  if (idade <= 13) {
    content.innerText = `Detectamos`
  }
}
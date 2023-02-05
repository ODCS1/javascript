// verificador de horário para enviar uma mensagem

// var agora = agora ()
var horario = 21;

if (horario >= 5 && horario < 12) {
  console.write("Bom dia!");
} else if (horario >= 12 && horario < 18) {
  console.log("Boa tarde!");
} else if (horario >= 18 && horario < 24) {
  console.log("Boa noite!");
} else {
  console.log("Boa madrugada!");
}

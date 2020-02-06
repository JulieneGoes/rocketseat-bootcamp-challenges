// calcular aposentadoria conforme regra 85-95
// somar o período de contribuicao + idade

const nome= 'Silvana'
const sexo= 'F'
const idade= 48
const contribuicao= 23

const calculocontribuicao = idade + contribuicao

// confirmar sexo F e calculo de contribuição >85 e contribuição >=30 retorno true
// confirma sexo M e cálculo de contribuição >95 e contribuição >=35 retorno true


const mulheraposenta = sexo == "F" && calculocontribuicao >85 && contribuicao >=30
const homemaposenta = sexo == "M" && calculocontribuicao > 95 && contribuicao >=35

if (mulheraposenta || homemaposenta)
 {console.log (`${nome}, você pode se aposentar!`)}

else  { console.log (`${nome}, você ainda não pode se aposentar.`)}
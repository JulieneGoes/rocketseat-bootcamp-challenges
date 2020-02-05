// Criar um programa que calcula o IMC (índice de massa corporal)
// é o cálculo entre altura e peso       
//  a fórmula é o peso / (altura*altura)

const nome = 'Xuxa';
const altura = 1.60
const peso = 97

const IMC = (peso/ (altura*altura))

console.log (IMC)


// se IMC for maior que 30, Carlos você está acima do peso
// se IMC for menor que 29.9, Carlos você não está acima do peso


if (IMC < 29.9) {
  console.log ( `Seu IMC é de ${IMC}. Xuxa você não está acima do peso.`)
} else { 
  console.log (` Seu IMC é de ${IMC}. Xuxa você está acima do peso`)
}





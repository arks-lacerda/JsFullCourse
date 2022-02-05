let nameSpaceship = prompt("Entre com o nome da Nave?")

let chosenOption = prompt("Deseja entrar em dobra espacial?\nDigite o número. \n1- Sim \n2- Não")

let countWrapSpace = 0

while(chosenOption == "1") {
    countWrapSpace += 1
    chosenOption = prompt("Deseja realizar próxima dobra espacial?\nDigite o número. \n1- Sim \n2- Não")
}

alert("Nome da nave: " + nameSpaceship + "\nNúmero de dobras espaciais: " + countWrapSpace)
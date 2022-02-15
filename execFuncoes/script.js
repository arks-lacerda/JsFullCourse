let spaceshipName = prompt("Digite o nome da nave")
let spaceshipVelocity = 0
let chosenOption

function showNemu() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
                        "1- Acelerar a nave em 5km/s\n" +
                        "2- Desacelerar a nave 5km/s\n" +
                        "3- Impimir dados de Bordo\n" +
                        "4- Sair")
    }
    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5
    alert("Você aumentou a velocidade para " + newVelocity + "km/s")
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    alert("Você  desacelerou velocidade para " + newVelocity + "km/s")
    return newVelocity
}

function printResultsSpaceship(name, velocity) {
    alert("Nome da nave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do {
    chosenOption = showNemu()
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break;
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break;
        case "3":
            printResultsSpaceship(spaceshipName, spaceshipVelocity)
            break;
        default:
            alert("Encerrando programa de Bordor")
    }
} while(chosenOption != "4")
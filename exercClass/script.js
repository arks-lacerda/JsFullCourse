class Spaceships {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.hitchedSpaceship = false
        this.entryDoor = false
    }

    hitch() {
        this.hitchedSpaceship = true
        this.entryDoor = true
    }
}

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("O que deseja fazer?\n" +
                              "1- Realizar engate da Nave.\n"+
                              "2- Imprimir naves.\n" +
                              "3- Sair do programa.")
    }
    return chosenOption
}

function registerSpaceship() {
    let name = prompt("Digite o nome da nave")
    let crewQuantity = Number(prompt("Digite quantidade tripulantes"))
    let spaceship = new Spaceships(name, crewQuantity)
    return spaceship
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1 + "- " + spaceship.name + " (" + spaceship.crewQuantity + " tripulades)\n")
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []
let chosenOption

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = registerSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}
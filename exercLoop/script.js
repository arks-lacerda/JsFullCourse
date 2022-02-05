let spaceship = prompt("Digite o nome da Nave?")
let invertedSpaceship = ""

for(let i = spaceship.length -1; i >= 0; i--) {
    if(spaceship[i] == "e") {
        break
    } else {
        invertedSpaceship += spaceship[i]
    }
}
alert("Nome original da nave: " + spaceship + "\nNome invertido da nave: " + invertedSpaceship)
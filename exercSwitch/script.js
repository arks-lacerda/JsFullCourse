let distanceInLy = prompt("Digite a distância em ano-luz")

let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parsepc(pc)\n2. Unidade Astronômica(AU)\n3.Quilômetros (km)\n\n(Digite o número da opção desejada")

let chosenUnity
let convertdDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertdDistance = distanceInLy *  0.306601
        break;
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertdDistance = distanceInLy *  63241.1
        break;
    case "3":
        chosenUnity = "Quilômentros"
        convertdDistance = distanceInLy * 9.5 * Math.pow(10,12)
        break;
    default:
        chosenUnity = "Unidade não identificada"
        convertdDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-Luz: " + distanceInLy + "\n" + chosenUnity + ": " + convertdDistance)
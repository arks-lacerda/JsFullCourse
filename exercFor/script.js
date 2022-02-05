let nameSpaceship = prompt("Digite o nome da nave?")
let replaceCharacter = prompt("Digite o caractere que deseja substituir?")
let newCharacter = prompt("Digite o novo caractere a substituir?")
let newNameSpaceship = ""

for(let i = 0; i < nameSpaceship.length; i++) {
    if(nameSpaceship[i] == replaceCharacter) {
        newNameSpaceship += newCharacter
    } else {
        newNameSpaceship += nameSpaceship[i]
    }
}
alert(newNameSpaceship)
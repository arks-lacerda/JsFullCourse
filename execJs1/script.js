let velocity = 0

if(velocity === 0) {
    let namePilot = prompt("Qual nome do Piloto?")
    let speedUpSpace = prompt(namePilot + ". Aumentar a velocidade?")
    let confirmSpeedUpSpace = confirm("Por favor, " + namePilot + ", Confirmar a velocidade?")
    velocity = speedUpSpace
    if(confirmSpeedUpSpace === true) {
        let newVelocity = speedUpSpace;
        if(newVelocity == 0){
            alert(namePilot + ". Não está pronto para decolar!" +
                    "\nSua velocidade ainda é: " + newVelocity)
        } else {
            alert("Sua nova velocidade é: " + newVelocity)
        }
    } else {
        alert(namePilot + ". Não está pronto para decolar!")
    } 
} else {
    alert("Tudo errado")
}
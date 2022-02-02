let velocity = 0
let namePilot = prompt("Informe seu nome, Piloto?")
let newVelocity = prompt("Piloto " + namePilot + ". Qual velocidade, você gostaria de acelerar a nave?")
let confirmVelocity = confirm("Confirme sua nova velocidade. " + newVelocity + "Km/s")

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0){
    alert("Nave está parada! Considere partir e aumentar a velocidade.")
} else if(velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.") 
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")      
}

alert("Piloto: " + namePilot + "\nVelocidade: " + velocity + "km/s")
console.log(velocity)
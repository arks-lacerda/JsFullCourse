function slowDown(velocity, printer) {
    console.log("Entrei em slowDown")
    let deceleration = 20
    while( velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Nave parada.\nComportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, (velocity) => {
    console.log("Velocidade atual: " + velocity + "km/s")
})
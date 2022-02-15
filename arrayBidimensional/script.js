const hitchedSpaceships = [  ["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false] ]

let crewCreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

console.log(crewCreaterThan9)

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

console.log(ongoingHitchPlatform)

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewCreaterThan9.join(", ")

message += "\nPlataform com processo de engate: " + (ongoingHitchPlatform + 1) 
message += "\nEspaçonaves destacadas " + highlightedSpaceships.join(", ")

alert(message)
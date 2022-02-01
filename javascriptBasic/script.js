let nameOlder = prompt("Digite o nome da pessoa mais velha?");
console.log(nameOlder);
let ageOlder = prompt("Digite a idade da pessoa mais velha?");
console.log(ageOlder);

let nameYounger = prompt("Digite o nome da pessoa mais nova?");
console.log(nameYounger);
let ageYounger = prompt("Digite a idade da pessoa mais nova?");
console.log(ageYounger);

let ageDifference = ageOlder - ageYounger;
console.log(ageDifference);
confirm(`A diferença de idade é ${ageDifference}`);

alert(`Pessoa mais velha: ${nameOlder} e a idade é: ${ageOlder} anos. \nPessoa mais nova: ${nameYounger} e a idade é: ${ageYounger} anos. \nA diferença de idade é: ${ageDifference}`);

const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

/*2.1*/

const idades = usuarios.map(usuarios => usuarios.idade);
console.log(idades);

/*2.2*/

const maior18 = usuarios.filter(usuarios => usuarios.empresa === "Rocketseat" && usuarios.idade >= 18);

console.log (maior18);

/*2.3*/

const trabalhaGoogle = usuarios.find(usuarios => usuarios.empresa === "Google");

console.log(trabalhaGoogle);

/*2.4*/

const calculo = usuarios
.map(usuarios => ({...usuarios, idade: usuarios.idade*2 }))
.filter(usuarios => usuarios.idade <= 50);

console.log(calculo);
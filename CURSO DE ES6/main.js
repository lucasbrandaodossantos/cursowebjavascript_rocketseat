const arr = [1,3,4,5,6,7];

const newArr = arr.map(function(item){ // percorrer o vetor todo e fazer algo (quase igual ao for)
        return item + 1;
})



const sum = arr.reduce(function(total, next){ // reduzir o vetor para um unico valor de acordo com a regra passado dentro da function
    return total + next;
})

const filter = arr.filter(function(item){ //filtra um valor dentro do vetor
    return item % 2 === 0; //encontra os valores pares dentro do vetor arr.
})

const find = arr.find(function(item){ //encontra algum valor dentro do array
    return item === 1;
})


console.log(newArr);
console.log(sum);
console.log(filter);
console.log(find);


/*AGORA O MESMO CÓDIGO SÓ QUE COM ARROW FUNCTIONS*/


const arr2 = [1,3,5,6,7,8,9];


const newArr2 = arr.map(item=> item + 1);


console.log('função 2' + newArr);

/*DESESTRUTURAÇÃO*/

const user = {
    nome: 'Lucas',
    idade: 24,
    endereco: {
        rua: 'Afonso Lopes Vieira',
        numero: 500
    }
}

/*chamando as propriedades do objeto utilizando desestruturação*/

const {nome, idade, endereco: {rua, numero}} = user;

console.log(nome);
console.log(idade);
console.log(rua);
console.log(numero);

/*função passando como parâmetros as variáveis do objeto utilizando desestruturação*/

function mostraUser ({nome, idade, endereco: {rua, numero}}){
    console.log(nome, idade, rua, numero);
}

mostraUser(user);


/* REST E SPREAD */

/* REST */
const usuario = {
    nome2: 'Lucas',
    idade2: 24,
    empresa: 'Nenhuma'
}

const {nome2, ...resto} = usuario; // este "..." na declaração da variável serve para obter o RESTO das informações
console.log(nome, resto);

/*  SPREAD  */

const array1 = [1,2,3]
const array2 = [2,3,4]

const array3 = [...array1, ...array2]; // faz o papel de propagação, de repasse dos dados para outra estrutura.

console.log(array3);

const usuario2 = {
    nome3: 'Lucas',
    idade3: 24,
    empresa2: 'Nenhuma'
}
const usuario3 = {...usuario2, nome3: 'João'}//repeti todas as propriedades de usuario2 no usuario3 mas fiz uma modificação em um valor de uma propriedade
console.log(usuario3);


/*TEMPLATE LITERALS*/

const nomeLiteral = 'Lucas'
const idadeLiteral = 24

console.log(`Meu nome é ${nome} e tenho ${idade} anos`) // utilização de ${} para concatenação de variáveis em strings, tudo dentro de crase `` ao invés de aspas ou apóstrofo


/*OBJECT SHORT SYNTAX*/

const nomeObject = 'Lucas'
const idadeObject = 24

const userObject = { // NÃO PRECISAMOS COLOCAR nomeobject = nomeobject, o ES6 já interpreta de forma simples que a variavel mencionada dentro do objeto se refere a variavel dentro do escopo.
    nomeObject,
    idadeObject
}

console.log(userObject);
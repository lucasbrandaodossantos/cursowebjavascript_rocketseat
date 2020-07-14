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

const usuario = {
    nome2: 'Lucas',
    idade2: 24,
    empresa: 'Nenhuma'
}

const {nome2, ...resto} = usuario;
console.log(nome, resto);
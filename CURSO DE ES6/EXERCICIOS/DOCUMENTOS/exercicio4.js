const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

/* Utilize desestruturação para ser possível exibir o código abaixo */

const {nome, endereco:{cidade, estado}} = empresa;


console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC


/*Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas: */
/**return `${nome} tem ${idade} anos.*/

/*function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
   }
   mostraInfo({ nome: 'Diego', idade: 23 })*/



const usuario = {
    nome: 'Diego',
    idade: 23
};

   function mostraInfo (nome, idade = usuario){
       return `${usuario.nome} tem ${usuario.idade} anos.`
   }
   mostraInfo({nome: 'Diego', idade: 23});

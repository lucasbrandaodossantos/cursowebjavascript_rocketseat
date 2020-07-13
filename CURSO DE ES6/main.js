const  arr = [1,2,3,4,5,6];

const somaArr = arr.map(function(item){
    return item+1;
})


const somaArrReduzido = arr.map(item=>item+1);


console.log (somaArr);

console.log(somaArrReduzido);

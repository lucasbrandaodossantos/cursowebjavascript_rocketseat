var ulItem = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

function retornaReps(repositorios){
    
    ulItem.innerHTML='';
    
    for(repo of repositorios) {
        const liItemText = document.createTextNode(repo.name);
        const liItem = document.createElement('li');

        liItem.appendChild(liItemText);
        console.log(liItem);
        ulItem.appendChild(liItem);
    }
    
}


function listarRepositorios(){
    var usuario = inputElement.value;
    inputElement.value='';
    if (!usuario) return;
 
    axios.get('https://api.github.com/users/' + usuario + '/repos')
    .then(function(response){
        retornaReps(response.data);
    })
    .catch(function(error){
        console.log("Erro 404")
    })
}

buttonElement.onclick = listarRepositorios;
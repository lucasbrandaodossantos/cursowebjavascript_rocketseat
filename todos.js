var listElement = document.querySelector('#app ul')
var buttonElement = document.querySelector('#app button')
var inputElement = document.querySelector('#app input')

var todos = JSON.parse(localStorage.getItem('bd_local_todos')) || [];

function renderizarTodos(){
    
    listElement.innerHTML = '' //setando a lista para vazio, para não duplicar a lista após criar um novo item.

    for (todo of todos) {
        var todoElement = document.createElement('li') //criando elemento da lista
        var todoText = document.createTextNode(todo) //criando texto do elemento da lista

        var linkElement = document.createElement('a') //criando um elemento do tipo link
        var textoLinkElement = document.createTextNode(' Excluir') //Texto do link criado
        var pos = todos.indexOf(todo) //obtendo a posição do todo na lista
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')') //setando o atributo de deletar o todo, caso o botão link criado (Excluir), seja clicado

        linkElement.setAttribute('href', '#') //criando o link
        linkElement.appendChild(textoLinkElement) //colocando o texto no link

        todoElement.appendChild(todoText) //colocando o texto no elemento LI criado anteriormente
        todoElement.appendChild(linkElement) //colocando o elemento link junto ao texto no elemento LI
        listElement.appendChild(todoElement) //colocando todos os itens criados na lista
    }
}

renderizarTodos();

function addTodo(){
    var todoValue = inputElement.value;

    todos.push(todoValue)
    inputElement.value = '' //setando o input element para vazio após clicar no botão adicionar
    renderizarTodos();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos){
        todos.splice(pos, 1) //obtendo a posição do todo e deletando o elemento correspondente
        renderizarTodos() //atualizando a lista
}
function saveTodos(){
    localStorage.setItem('bd_local_todos', JSON.stringify(todos));
}



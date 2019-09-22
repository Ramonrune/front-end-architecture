document.getElementById('adicionar').onclick = function() {
    adicionar();
    listar();
}

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function listar() {

    let container = document.getElementById('container');
    container.innerHTML = '';

    for (const todo in todos) {
        let div = document.createElement('div');
        div.onclick = function() {
            remover(todo);
            listar();
        }

        let text = document.createTextNode(todos[todo]);
        div.appendChild(text);


        container.appendChild(div);

    }

}

function adicionar() {

    let tarefa = document.getElementById('tarefa').value;
    if (tarefa) {
        todos.push(tarefa);
        salvarLocalStorage();
        document.getElementById('tarefa').value = '';
    } else {
        erro();
    }


}

function remover(index) {
    todos.splice(index, 1);
    salvarLocalStorage();


}

function erro() {
    let erro = document.getElementById('erro');
    erro.classList.add('active');

}

function salvarLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos))

}



listar();
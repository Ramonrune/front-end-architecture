document.getElementById('botao').onclick = function() {
    let div = document.createElement('div');
    div.style = 'width: 100px;height: 100px; background-color: red;margin-top: 14px;'
    div.onmouseenter = function() {
        div.style.backgroundColor = getRandomColor();
    };

    document.getElementById('container').appendChild(div);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var nomes = ["Diego", "Gabriel", "Lucas"];

let cont = document.getElementById('container');
let ul = document.createElement('ul');
cont.appendChild(ul);

for (nome of nomes) {


    let li = document.createElement('li')
    let texto = document.createTextNode(nome);

    li.appendChild(texto);

    ul.appendChild(li);
}


document.getElementsByTagName('button')[1].onclick = function() {
    let nome = document.getElementsByTagName('input')[0].value;
    nomes.push(nome);

    let li = document.createElement('li');
    let text = document.createTextNode(nome);

    li.appendChild(text);

    ul.appendChild(li);
    document.getElementsByTagName('input')[0].value = '';
}
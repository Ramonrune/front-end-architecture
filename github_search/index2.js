function checaIdade(idade) {
    return new Promise(function(resolve, reject) {

        if (idade >= 18) {
            resolve('Maior que 18 anos');
        } else {
            reject('Menor que 18 anos');
        }
    });


}

checaIdade(20)
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function() {
        console.log('Menor de 18 anos');
    });


function exibir() {
    let user = document.getElementById('user').value;
    addLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(response => {

            if (response.status == 200) {
                let ul = document.getElementsByTagName('ul')[0];
                ul.innerHTML = '';

                for (let data of response.data) {
                    let li = document.createElement('li');

                    let text = document.createTextNode(data.name);


                    li.appendChild(text);

                    ul.appendChild(li);
                }



                console.log(response);

            }

        })
        .catch(error => {

            console.log(error.status);
            let ul = document.getElementsByTagName('ul')[0];
            ul.innerHTML = '';

            let li = document.createElement('li');

            let text = document.createTextNode('Usuário não encontrado!');

            li.appendChild(text);

            ul.appendChild(li);



        });
}


function addLoading() {
    let ul = document.getElementsByTagName('ul')[0];

    let li = document.createElement('li');

    let text = document.createTextNode('Carregando...');

    li.appendChild(text);

    ul.appendChild(li);
}
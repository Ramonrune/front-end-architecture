var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};


function conteudo(endereco) {
    return 'O usuário mora em ' + endereco.cidade + " / " + endereco.uf + ', no bairro ' +
        endereco.bairro + ', na rua \"' + endereco.rua + '\" com o nº ' + endereco.numero;
}

//console.log(conteudo(endereco));
function pares(x, y) {

    for (let i = x; i <= y; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

//pares(32, 321);

function temHabilidade(skills) {
    console.log(skills.indexOf('Javascript'));
}


var skills = ['Javascript', 'ReactJS', 'React Native'];
//temHabilidade(skills);


function experiencia(anos) {
    if (anos >= 0 && anos <= 1) {
        console.log('Iniciante');
    }

    if (anos > 1 && anos <= 3) {
        console.log('Intermediário');
    }
    if (anos > 3 && anos <= 6) {
        console.log('Avançado');
    }

    if (anos > 6) {
        console.log('Jedi Master');
    }

}


var anosEstudo = 7;
//experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master


var usuarios = [{
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function mostrarUsuarios() {

    for (let usuario of usuarios) {
        console.log('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(','));
    }
}

mostrarUsuarios();
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email,senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    { nome: 'Lucas', idade: 30, empresa: 'Facebook'},
];

const usuariosMap = usuarios.map((item) => item.idade);

console.log(usuariosMap);

const usuariosFilter = usuarios.filter(function(value){
    return value.empresa === 'Rocketseat' && value.idade > 18; 
});

console.log(usuariosFilter);

const usuariosFind = usuarios.find(function(item){
    return item.empresa === 'Google';
});

console.log(usuariosFind);

const unindo = usuarios.map(function(item){
    item.idade *= 2;
    return item;
}).filter((item) => item.idade < 50);

console.log(unindo);

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: {cidade, estado} } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo({nome, idade}){
    return `${nome} tem ${idade} anos.`; 
}

console.log(mostraInfo({nome: 'Diego', idade: 23}));

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma(...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4,5,6));
console.log(soma(1,2));


const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel',};

const usuario3 = {...usuario,  endereco: {... usuario.endereco, cidade: 'Lontras',}};

console.log(usuario2);
console.log(usuario3);

const nome4 = 'Diego';
const idade4 = 23;

console.log(`O usuario ${nome4} possui ${idade4} anos.`);

const usuario4 = {
    nome4,
    idade4,
    cidade: 'Rio do Sul',
};

console.log(usuario4);
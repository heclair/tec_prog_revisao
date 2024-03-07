class Pessoa {
    nome: string;
    email: string;


    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}

const cliente = new Pessoa("Heclair", "heclair@hotmail.com");

console.log(cliente.nome);
console.log(cliente.email);

//UTILIZANDO METODO

class Pessoa1 {
    nome: string;
    email: string;


    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
    imprimir(){
            console.log(this.nome);
            console.log(this.email);
                   
    }
}


const cliente1 = new Pessoa1("Heclair", "heclair@hotmail.com");

cliente1.imprimir();

// EXEMPLO 02 - CALCULAR A IDADE DE UMA PESSOA TENDO A DATA DE NACIMENTO INFORMADA

class Pessoa2 {
    nome: string;
    email: string;
    nasc: string;


    constructor(nome: string, email: string, nasc:string) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    imprimir(){
            console.log(this.nome);
            console.log(this.email);
            console.log(this.nasc);
                   
    }
}


const cliente2 = new Pessoa2("Heclair", "heclair@hotmail.com","11/01/1995");

cliente1.imprimir();


//EX 04 agora criaremos o metodo idade que fará o calculo da idade a partir da data

class Pessoa3 {
    nome: string;
    email: string;
    nasc: string;


    constructor(nome: string, email: string, nasc:string) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    imprimir(){
            console.log(this.nome);
            console.log(this.email);
            console.log(this.nasc);
                   
    }
}


const cliente3 = new Pessoa3("Heclair", "heclair@hotmail.com","11/01/1995");

cliente1.imprimir();
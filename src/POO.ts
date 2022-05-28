class user {

    public name;
    public age;

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;
    }
}

class player extends user {

    public jogo;

    constructor (name: string, age: number, jogo: string){

        super(nome, idade)

        this.jogo = jogo;
    }

    dizer_jogo_atual() {
        
        return `Estou jogando no momento: ${this.jogo}`;

    }

    //metodo estático

    static horario_atual(){

        return Date.now();
    }

}

const jogador = new player('Anna', 25, 'GTA V');

console.log(jogador.dizer_jogo_atual())

//não preciso definir objetos para chamar o método estático

console.log(player.horario_atual())

class jogo {

    //metodo protected pode ser acessado somente na sua classe e nas que a extendem/herdam.
    protected nome;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizer_nome() {
        return `O nome do jogo é: ${this.nome}`
    }
}

const ghost = new jogo('Ghost of Tsushima');
console.log(ghost.dizer_nome);

//interfaces

//somente pode se definir uma interface de campos públicos!
interface i_jogo_com_descricao {
    //nome: string;
    //descricao: string;
    dizer_nome_com_descricao(): string;
}


class jogo_com_descricao extends jogo implements i_jogo_com_descricao{
    
    //metodo private só pode ser acessado dentro da classe.
    private descricao;

    constructor(nome: string, descricao: string) {
        super(nome);

        this.descricao = descricao;
    }

    dizer_nome_com_descricao() {
        return `O nome do jogo é: ${this.nome} e sua descrição é: ${this.descricao}`
    }
}

const tsushima = new jogo_com_descricao('Ghost of Tsushima','Joguete maneirão');
console.log(tsushima.dizer_nome);

//posso criar objetos usando interfaces, etc, etc...
const obj: i_jogo_com_descricao = {
    dizer_nome_com_descricao() {
        return '123'
    }
}

//type-assertions

type jogo_assertion {
    nome: string;
    descricao: string;
}

let game = {} as jogo_assertion;
//let game = <jogo_assertion>
game.nome='9uiodfhjouifhjosida';
game.descricao='9uiodfhjouifhjosida';
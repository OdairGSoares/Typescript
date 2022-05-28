//exemplo

function soma(a: number, b:number) {
    
    return a + b;

}
console.log(soma(1, 1));

//string e number

let nome :string;
let idade :number;

nome = 'Odair';
idade = 25;

let sobrenome = 'Gomes';

function nome_completo(nome: string, sobrenome: string) {
    return `${nome} ${sobrenome}`;
}

nome_completo(nome,sobrenome);

//boolean

let esta_ativo: boolean;

esta_ativo = true;

function usuario_ativo(status: boolean) {

    if (status) {
        return 'Usuario ativo!';
    } else {
        return 'Usuario n está ativo!';
    }

}

usuario_ativo(esta_ativo);

//array

let gatos: string[] = [
    'preto',
    'pardo',
    'branco',
];

//n posso inserir nada diferente de uma string;
//gatos.push(5);

function cores_de_gatos(gatos: string[]) {

    return `Os gatos são: ${gatos.join(', ')}`
}

cores_de_gatos(gatos)

//tupla

//numero de informações e tipagem definidos

const pets: [string,string,string] = [
    'luna',
    'lara',
    'leo',
]

//enum

//cria referencias de valores numericos agrupados de uma maneira mais simples.
enum Permissoes {
    admin,
    editor,
    comum,
}

const usuario = {
    nivel: Permissoes.admin
}

//pode se atribuir strings ao retorno do enum ao inves de numeros.

enum Cores {
    red = '#ff0000',
    black = '#000'
}

//Any

let minha_idade;

minha_idade=25
minha_idade='25'

//Unknown

let informações: unknown;
let informações_completas: string;

//diferente do any eu n posso atribuir uma variável de outro tipo a ele, porém posso definir valores manualmente.

//informações=1;
//informações_completas = informações;

//Null / Undefined

//Null é um valor que pode ser trabalhado.
//Undefined n tem valor atribuido.

let variavel_nula: null;
let variavel_indefinida: undefined;

//Object

let pessoa: object = {
    name: 'Odair',
    last_name: 'Gomes',
}

//Type_Alias

type Pessoa = {
    name: string;
    last_name: string;
}

//transformo propriedade em opcional colocando "?"
//last_name?: string;
//agora last_name é opcional

let pessoa_nova: Pessoa = {
    name: 'Odair',
    last_name: 'Gomes',
}

//Union_Types

//pode ser info OU error OU debug
type log_level = 'info' | 'error' | 'debug';

function log_message(message: string, level: log_level) {
    console.log(`[${level}] - ${message} \n`)
}

log_message('Uma mensagem info', 'info')

//Intersection_Types

//agrupa varios type_alias

type About = {
    bio: string;
    interests: string[]
}

type Profile =  Pessoa & About;

//agora Profile tem tudo de Pessoa e About!

const user_profile: Profile = {
    name: 'gabriel',
    last_name: 'ramos',
    bio: 'Olá, meu nome é gabriel',
    interests: ['gatos','música','fotografia'],
}

//posso unir Union_Types com Intersection_Types e Type_Alias!

type outro_profile = Pessoa & {
    log: log_level
}
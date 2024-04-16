const axios = require("axios");

async function get_token(){
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }

    return axios
        .post("https://tecweb-js.insper-comp.com.br/token", { username: "marinnagc" }, config)
        .then((response) => response.data.accessToken);
}


async function get_exercises(token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .get("https://tecweb-js.insper-comp.com.br/exercicio", config2)
        .then((response) => response.data)
}
async function soma(a, b, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma",{"resposta":a+b} ,config2)
        .then((response) => response.data)
}
async function tamanho_string(string, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/tamanho-string",{"resposta":string.length} ,config2)
        .then((response) => response.data)
}
async function nome_do_usuario(string, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/nome-do-usuario",{"resposta":string.split('@')[0]} ,config2)
        .then((response) => response.data)        
}
async function jaca_wars(v,theta, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    t_rad = theta*Math.PI/180;
    d = (v*v*Math.sin(2*t_rad))/9.8;
    if (d>=98 && d<=102){
        return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars",{"resposta":0} ,config2)
        .then((response) => response.data)
    } else if (d<98){
        return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars",{"resposta":-1} ,config2)
        .then((response) => response.data)
    } else if (d>102){
        return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/jaca-wars",{"resposta":1} ,config2)
        .then((response) => response.data)
    }
    
}
async function ano_bissexto(ano, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0){
        return axios
            .post("https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto",{"resposta":true} ,config2)
            .then((response) => response.data)
    } else {
        return axios
            .post("https://tecweb-js.insper-comp.com.br/exercicio/ano-bissexto",{"resposta":false} ,config2)
            .then((response) => response.data)
    }
}

async function volume_da_pizza(z,a, token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    v = Math.PI*z*z*a;
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/volume-da-pizza",{"resposta":Math.round(v)} ,config2)
        .then((response) => response.data)        
}

async function mru(s0,v, t,token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    s = s0 + v*t;
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/mru",{"resposta":s} ,config2)
        .then((response) => response.data)        
}

async function inverte_string(string,token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/inverte-string",{"resposta":string.split("").reverse().join("")} ,config2)
        .then((response) => response.data)        
}

async function soma_valores(dic,token){
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    let soma = 0;
    valores = dic['objeto']
    for (let key in valores){
        soma += valores[key];
    }
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-valores",{"resposta":soma} ,config2)
        .then((response) => response.data)            
}
async function encontra_n_esimo_primo(n,token) {
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    if (n <= 0) {
        return "N deve ser um número positivo maior que zero.";
    }

    let count = 0;
    let num = 2; // Começamos a verificar a partir do primeiro número primo

    while (count < n) {
        if (isPrimo(num)) {
            count++;
            if (count === n) {
                return axios
                    .post("https://tecweb-js.insper-comp.com.br/exercicio/n-esimo-primo",{"resposta":num} ,config2)
                    .then((response) => response.data)
            }
        }
        num++;
    }
}

function isPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

async function maiorPrefixoComum(strings,token) {
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    // Verificação inicial: se o array tem menos de duas strings, retorna string vazia
    if (strings.length < 2) return axios
    .post("https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum",{"resposta":""} ,config2)
    .then((response) => response.data) ;

    // Ordena o array de strings
    strings.sort();

    // Variável para manter o maior prefixo comum encontrado
    let maiorPrefixo = '';

    // Loop para comparar strings adjacentes
    for (let i = 0; i < strings.length - 1; i++) {
        let prefixoAtual = prefixoComum(strings[i], strings[i + 1]);
        if (prefixoAtual.length > maiorPrefixo.length) {
            maiorPrefixo = prefixoAtual;
        }
    }

    // Retorna o maior prefixo comum encontrado
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/maior-prefixo-comum",{"resposta":maiorPrefixo} ,config2)
        .then((response) => response.data)  
}

// Função para encontrar o prefixo comum entre duas strings
function prefixoComum(s1, s2) {
    let prefixo = '';
    let menorComprimento = Math.min(s1.length, s2.length);
    for (let i = 0; i < menorComprimento; i++) {
        if (s1[i] === s2[i]) {
            prefixo += s1[i];
        } else {
            break;
        }
    }
    return prefixo;
}

async function soma_segundo_maior_e_menor_numeros(numeros,token) {
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    // colocar a lista numeros em ordem crescente
    let soma = 0;
    numeros.sort((a, b) => a - b);
    if (numeros.length >=4){
        soma  = numeros[numeros.length-2] + numeros[1];
        return axios    
            .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros",{"resposta":soma} ,config2)
            .then((response) => response.data)
    } else{
        return axios
            .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-segundo-maior-e-menor-numeros",{"resposta":0} ,config2)
            .then((response) => response.data)
    }

}

async function contaPalindromos(palavras,token) {
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    // Função auxiliar para verificar se uma palavra é palíndromo
    function ehPalindromo(palavra) {
        return palavra === palavra.split('').reverse().join('');
    }

    // Contador de palíndromos
    let contador = 0;

    // Iterar sobre cada palavra do array
    palavras.forEach(palavra => {
        if (ehPalindromo(palavra)) {
            contador++;
        }
    });

    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/conta-palindromos",{"resposta":contador} ,config2)
        .then((response) => response.data)
}

async function soma_de_strings_de_ints(strings,token) {
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    let resp = strings.reduce((acumulador, valorAtual) => acumulador + parseInt(valorAtual), 0);
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-de-strings-de-ints",{"resposta":resp} ,config2)
        .then((response) => response.data)
    
}

async function soma_com_requisicoes(endpoints,token) {
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}` 
        }
    }
    let numeros = [];
    for (i in endpoints){
        let response = await axios.get(endpoints[i],config2);
        //console.log(response.data);
        numeros.push(response.data);
    }
    let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return axios
        .post("https://tecweb-js.insper-comp.com.br/exercicio/soma-com-requisicoes",{"resposta":soma} ,config2)
        .then((response) => response.data)
}

async function caca_ao_tesouro(response,token) {
    const config2 = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    // verificar se o response é um número, se for retornar, se nao, vamos para a proxima requisicao
    if (typeof response === 'number') {
        return axios
            .post("https://tecweb-js.insper-comp.com.br/exercicio/caca-ao-tesouro",{"resposta":response} ,config2)
            .then((response) => response.data)
    } else {
        let resposta = await axios.get(response,config2);
        return caca_ao_tesouro(resposta.data,token);
    }
}
// function soma(a, b){
//     return a + b;
// }
// const soma = (a, b) => {
//     return a + b;
// }
// (a,b) => {return a + b;}
async function main(){
    let token = await get_token();
    let exercises = await get_exercises(token);
    console.log(exercises);
    let resp_soma = await soma(exercises.soma.entrada.a,exercises.soma.entrada.b, token);
    // console.log(resp_soma);
    let resp_tamanho_string = await tamanho_string(exercises['tamanho-string'].entrada.string, token);
    // console.log(resp_tamanho_string);
    let resp_nome_usu = await nome_do_usuario(exercises['nome-do-usuario'].entrada.email, token);
    // console.log(resp_nome_usu);    
    let resp_jaca = await jaca_wars(exercises['jaca-wars'].entrada.v,exercises['jaca-wars'].entrada.theta, token);
    // console.log(resp_jaca);
    let resp_ano_bissexto = await ano_bissexto(exercises['ano-bissexto'].entrada.ano, token);
    // console.log(resp_ano_bissexto);
    let resp_volume_da_pizza = await volume_da_pizza(exercises['volume-da-pizza'].entrada.z,exercises['volume-da-pizza'].entrada.a, token);
    // console.log(resp_volume_da_pizza);
    let resp_mru = await mru(exercises.mru.entrada.s0,exercises.mru.entrada.v,exercises.mru.entrada.t, token);
    // console.log(resp_mru);
    let resp_inverte_string = await inverte_string(exercises['inverte-string'].entrada.string, token);
    // console.log(resp_inverte_string);
    let dic = exercises['soma-valores'].entrada;
    // console.log(dic);
    let resp_soma_valores = await soma_valores(dic, token);
    //console.log(resp_soma_valores);
    let resp_n_esimo_primo = await encontra_n_esimo_primo(exercises['n-esimo-primo'].entrada.n,token);
    //console.log(resp_n_esimo_primo);
    let resp_caca_ao_tesouro = await caca_ao_tesouro(exercises["caca-ao-tesouro"].entrada.inicio, token);
    //console.log(resp_caca_ao_tesouro);
    let resp_maior_prefixo_comum = await maiorPrefixoComum(exercises['maior-prefixo-comum'].entrada.strings,token);
    //console.log(resp_maior_prefixo_comum);
    let resp_soma_segundo_maior_e_menor_numeros = await soma_segundo_maior_e_menor_numeros(exercises['soma-segundo-maior-e-menor-numeros'].entrada.numeros,token);
    //console.log(resp_soma_segundo_maior_e_menor_numeros);
    let lista = exercises['conta-palindromos'].entrada.palavras;
    //console.log(lista);
    let resp_conta_palindromos = await contaPalindromos(lista,token);
    //console.log(resp_conta_palindromos);
    let lista_str = exercises['soma-de-strings-de-ints'].entrada.strings;
    //console.log(lista_str);
    let resp_soma_de_strings_de_ints = await soma_de_strings_de_ints(lista_str,token);
    //console.log(resp_soma_de_strings_de_ints);
    let endponit = exercises['soma-com-requisicoes'].entrada.endpoints;
    //console.log(endponit);
    let resp_soma_com_requisicoes = await soma_com_requisicoes(endponit,token);
    //console.log(resp_soma_com_requisicoes);

}

main();
const listaDePersonagens = ["viajante",
 "Albedo", "Noelle", "Itto", "Ningguang", "Gorou", "Yunjin", "Zhongli",
 "klee", "amber", "diluc", "bennett", "xiangling", "hutao", "thoma", "xinyan", "yanfei", "yoimiya", "dehya", "lyney",
 "cyno", "yae", "shogun", "keqing", "dori", "kuki", "sara", "fischl", "beidou", "razor", "lisa",
"barbara", "candace", "ayato", "kokomi", "xingqiu", "mona", "nilou", "childe", "yelan", "neuvilette", "furina",
"collei", "nahida", "tighnari", "alhaitham", "yaoyao", "kaveh", "kirara", "baizhu",
"aloy", "chongyun", "diona", "ayaka", "eula", "kaeya", "ganyu", "layla", "qiqi", "rosaria", "shenhe", "mika", "freminet", "wriothesley", "charlotte",
"scaramouche", "faruzan", "kazuha", "venti", "sayu", "heizou", "jean", "sucrose", "xiao", "lynette"];


/* colocar personagens no final para facilitar busca */

function compararTimes(time1, time2){
    for(let i = 0; i < time2.length; i++){
        for(let a = 0; a < 3; a++){
            if(time1[a] === time2[i]){
                return 0
            }
        }
    }
}

function compararJogadores(time){
    for(let i = 0; i < time.length - 1; i++){
        for(let j = i + 1; j < time.length; j++){
            if(time[i] == time[j]){
                return 0
            }
        }
    }
}

function randomizarPersonagens(){
    return Math.round(Math.random() * (74 - 0));;
}

function criarTimes(){
    const time1 = []
    const time2 = []
    while(time1.length < 4){
        personagem = randomizarPersonagens();
        time1.push(personagem);
        if(compararJogadores(time1) === 0){
            time1.pop();
        }
    }

    while(time2.length < 4){
        personagem = randomizarPersonagens();
        time2.push(personagem);
        if(compararJogadores(time2) === 0){
            time2.pop();
        } else if(compararTimes(time1, time2) === 0){
            time2.pop();
        }
    }
    console.log(time1, time2)
    return time1.concat(time2)
    
}

function trocarPersonagem(time, timeaux, indice){
    let novoPersonagem = Math.round(Math.random() * (78 - 0));
    time[indice] = novoPersonagem;
    if(compararJogadores(time)===0){
        trocarPersonagem(time, timeaux, indice)
    }
    if(compararTimes(time, timeaux) === 0){
        trocarPersonagem(time, timeaux, indice)
    }

}

const times = criarTimes();

const time1 = times.slice(0, 4);
const time2 = times.slice(4, 8);

const resultado = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const button = document.querySelector("button")

const imagem1 = document.getElementById("personagem1");
const imagem2 = document.getElementById("personagem2");
const imagem3 = document.getElementById("personagem3");
const imagem4 = document.getElementById("personagem4");
const imagem5 = document.getElementById("personagem5");
const imagem6 = document.getElementById("personagem6");
const imagem7 = document.getElementById("personagem7");
const imagem8 = document.getElementById("personagem8");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const botao4 = document.getElementById("botao4");
const botao5 = document.getElementById("botao5");
const botao6 = document.getElementById("botao6");
const botao7 = document.getElementById("botao7");
const botao8 = document.getElementById("botao8");

button.addEventListener("click", function(){
    resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[time1[0]]}, ${listaDePersonagens[time1[1]]}, ${listaDePersonagens[time1[2]]} e ${listaDePersonagens[time1[3]]}`
    resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[time2[0]]}, 
    ${listaDePersonagens[time2[1]]}, ${listaDePersonagens[time2[2]]} e ${listaDePersonagens[time2[3]]}`
    imagem1.setAttribute("src", `img/${time1[0]}.webp`);
    imagem2.setAttribute("src", `img/${time1[1]}.webp`);
    imagem3.setAttribute("src", `img/${time1[2]}.webp`);
    imagem4.setAttribute("src", `img/${time1[3]}.webp`);
    imagem5.setAttribute("src", `img/${time2[0]}.webp`);
    imagem6.setAttribute("src", `img/${time2[1]}.webp`);
    imagem7.setAttribute("src", `img/${time2[2]}.webp`);
    imagem8.setAttribute("src", `img/${time2[3]}.webp`);

    botao1.innerText = "Substitua o 1º personagem.";
    botao2.innerText = "Substitua o 2º personagem.";
    botao3.innerText = "Substitua o 3º personagem.";
    botao4.innerText = "Substitua o 4º personagem.";
    botao5.innerText = "Substitua o 5º personagem.";
    botao6.innerText = "Substitua o 6º personagem.";
    botao7.innerText = "Substitua o 7º personagem.";
    botao8.innerText = "Substitua o 8º personagem.";
})

botao1.addEventListener("click", function(){
    
    if(imagem1.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time1, time2, 0);
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[time1[0]]}, ${listaDePersonagens[time1[1]]}, ${listaDePersonagens[time1[2]]} e ${listaDePersonagens[time1[3]]}`
        imagem1.setAttribute("src", `img/${time1[0]}.webp`)
    }
})

botao2.addEventListener("click", function(){
    
    if(imagem2.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time1, time2, 1);
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[time1[0]]}, ${listaDePersonagens[time1[1]]}, ${listaDePersonagens[time1[2]]} e ${listaDePersonagens[time1[3]]}`
        imagem2.setAttribute("src", `img/${time1[1]}.webp`)
    }
})

botao3.addEventListener("click", function(){
    
    if(imagem3.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time1, time2, 2);
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[time1[0]]}, ${listaDePersonagens[time1[1]]}, ${listaDePersonagens[time1[2]]} e ${listaDePersonagens[time1[3]]}`
        imagem3.setAttribute("src", `img/${time1[2]}.webp`)
    }
})

botao4.addEventListener("click", function(){
    
    if(imagem4.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time1, time2, 3);
        resultado.innerHTML = `Seu time para o abismo é ${listaDePersonagens[time1[0]]}, ${listaDePersonagens[time1[1]]}, ${listaDePersonagens[time1[2]]} e ${listaDePersonagens[time1[3]]}`
        imagem4.setAttribute("src", `img/${time1[3]}.webp`)
    }
})

botao5.addEventListener("click", function(){
    
    if(imagem5.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time2, time1, 0);
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[time2[0]]}, 
    ${listaDePersonagens[time2[1]]}, ${listaDePersonagens[time2[2]]} e ${listaDePersonagens[time2[3]]}`
        imagem5.setAttribute("src", `img/${time2[0]}.webp`)
    }
})

botao6.addEventListener("click", function(){

    if(imagem6.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time2, time1, 1);
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[time2[0]]}, 
    ${listaDePersonagens[time2[1]]}, ${listaDePersonagens[time2[2]]} e ${listaDePersonagens[time2[3]]}`
        imagem6.setAttribute("src", `img/${time2[1]}.webp`)
    }
})

botao7.addEventListener("click", function(){
    
    if(imagem7.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time2, time1, 2);
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[time2[0]]}, 
    ${listaDePersonagens[time2[1]]}, ${listaDePersonagens[time2[2]]} e ${listaDePersonagens[time2[3]]}`
        imagem7.setAttribute("src", `img/${time2[2]}.webp`)
    }
})

botao8.addEventListener("click", function(){
    
    if(imagem8.getAttribute("src")!=="img/Desconhecido.png"){
        trocarPersonagem(time2, time1, 3);
        resultado2.innerHTML = `Seu segundo time para o abismo é ${listaDePersonagens[time2[0]]}, 
    ${listaDePersonagens[time2[1]]}, ${listaDePersonagens[time2[2]]} e ${listaDePersonagens[time2[3]]}`
        imagem8.setAttribute("src", `img/${time2[3]}.webp`)
    }
})

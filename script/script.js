function addBola(){
    //Criando uma div qualquer
    var bola = document.createElement("div");
    
    //Setando a classe "bolinha" para a div criada anteriormente
    bola.setAttribute("class", "bolinha");
    
    //Definindo uma posição X
    var position1 = Math.floor(Math.random() * 800);
    
    //Definindo uma posição Y
    var position2 = Math.floor(Math.random() * 700);
    
    //Posicionando a div bola em algum lugar aleatorio
    bola.setAttribute("style", "left:"+position1+"px; top:"+position2+"px");
    bola.setAttribute("onclick", "estourar(this)");
    
    //Acrescentando a bolinha dentro da div display
    document.querySelector('.display').appendChild(bola);
}

function estourar(elemento){
    document.querySelector('.display').removeChild(elemento);
}

var startStop;

function iniciarJogo(){
    startStop = setInterval(addBola, 500);
}

function pararJogo(){
    clearInterval(startStop);
}
const ingressos = [];

function addRedBorder(id){
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight")
}

function selectedCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingressos.includes(selector)) 
    ingressos.pop(selector);
    else ingressos.push(selector)
}

function showSelectedCards(){
    if (ingressos.length > 0) alert("Ingressos selecionados:" + ingressos);
}
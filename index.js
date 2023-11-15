const dia = document.getElementById(`dia`)
const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")

dia.innerHTML = 'teste';

const dataCCXP = "15 nov 2023"

function countdown () {
    const dataEvento = new Date(dataCCXP)
    const hoje = new Date()

    const totalSeg = (dataEvento - hoje) / 1000;

    const finalDias = Math.floor(totalSeg/60/60/24);
    const finalHoras = Math.floor(totalSeg/60/60) % 24;
    const finalMinutos = Math.floor(totalSeg/60) % 60;
    const finalSegundos = Math.floor(totalSeg) % 60;

    dia.innerHTML = formatoTempo(finalDias) + "D"
    hora.innerHTML = formatoTempo(finalHoras) + "H"
    minuto.innerHTML = formatoTempo(finalMinutos) + "M"
    segundo.innerHTML = formatoTempo(finalSegundos) + "S"
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}`:tempo;
}

countdown();
setInterval(countdown, 1000);
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelector(".aba-conteudo");
const contadores = document.querySelector(".contador");
const tempoObjetivo1 = new Date("2024-03-06T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);


for(let i=0;i <botoes.length;i++){ 
    botoes[i].onclick = function() {

         for(let j=0;j<botoes.length;j++) { 
            botoes[j].classList.remove("ativo");
         }
         botoes[i].classList.add("ativo");
         textos[i].classList.add("ativo");
         textos[j].classList.remove("ativo");
    }
}

function calculaTempo(tempoObjeivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(miuntos / 60);
    let dias = Math.floor(horas / 24);

    return dias + "dias" + horas + "horas" ;
}
function tocaSom (selectorAudio){
    const elemento = document.querySelector(selectorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou selector inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){

     if (evento.code === 'Space' || evento.code === 'Enter'){
     tecla.classList.add('ativa') ;         
     }
    }

    tecla.onkeyup = function(){
      tecla.classList.remove('ativa');  
    }
}
 

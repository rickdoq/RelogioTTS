const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dias = document.getElementById('dias')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let dy = dateToday.getDate();
    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    horas.textContent = hr;
    minutos.textContent = min;
    dias.textContent = dy;

    console.log(dy)
})


function lerTextoH(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    horas.textContent = hr;
    minutos.textContent = min;

    var mensagem = new SpeechSynthesisUtterance();
    mensagem.text = `Agora é ${hr} e ${min}`;
    console.log(mensagem)
    speechSynthesis.speak(mensagem);
   }

   function lerTextoD(){
    let dateToday = new Date();
    let dy = dateToday.getDate();
    

    var mensagem = new SpeechSynthesisUtterance();
    mensagem.text = `Hoje é dia ${dy}`;
    console.log(mensagem)
    speechSynthesis.speak(mensagem);
   }
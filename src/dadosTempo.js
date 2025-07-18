const dataDia = document.querySelector('[data-dia]');
const dataVideo = document.querySelector('[data-video]');
const dataGraus = document.querySelector('[data-graus]');

const data = new Date();
const arrayDias = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
];

const diaSemana = data.getDay();

dataDia.innerText = arrayDias[diaSemana];

// Numeros aleatorios para a temperatura

const temperatura = Math.floor(Math.random() * (47 - 22 + 1)) + 22;

if (temperatura > 34) {
  dataVideo.src = './src/img/video_sol.mp4';
} else {
  dataVideo.src = './src/img/video_chuva.mp4';
}

dataGraus.innerText = temperatura + '°';

console.log(temperatura);

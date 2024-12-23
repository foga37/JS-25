//BOM - Браузер обджект модель
//1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.
console.log('1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.');
let a = prompt('Введіть URL');
if(a) {
    window.location.href = a;
} else {
    console.log('не вірно');
};
//2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.
console.log('2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.');
window.navigator.geolocation.getCurrentPosition((geo) => {
    console.log(geo);
});
//3. Створити стрім із мікро і відео (Див. лекцію).
console.log('3. Створити стрім із мікро і відео (Див. лекцію).');
const vid = document.getElementById('vid');
const aud = document.getElementById('aud');
window.navigator.mediaDevices.getUserMedia({audio: true, video: true}).then((data) => {
    console.log(data);
    vid.srcObject = data;
    vid.play();
    aud.srcObject = data;
    aud.play();
});
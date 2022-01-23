const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.min');
const newLocal = '.sec';
const secHand = document.querySelector(newLocal);


setInterval(() => {
   const curDate = new Date();

   var secondRatio = curDate.getSeconds()/ 60;
   var minuteRatio = (secondRatio + curDate.getMinutes()) / 60;
   var hourRatio = (minuteRatio + curDate.getHours()) / 12;
  
console.log(secondRatio, minuteRatio, hourRatio);


setRotaion(secHand, secondRatio);
setRotaion(minHand, minuteRatio);
setRotaion(hourHand, hourRatio);
    



}, 1000);



setRotaion = (element, rotationRatio) => {
   element.style.setProperty('--rotation', rotationRatio * 360 );
}
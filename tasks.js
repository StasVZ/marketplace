'use strict';

const rain = Math.random() ;
Math.round(rain);

if (Math.round(rain) === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else if (Math.round(rain) === 0) {
  console.log('Дождя нет!');
}

const pointsMat  = +prompt('Введите кол-во баллов по математике');
const pointsRus  = +prompt('Введите кол-во баллов по русскому языку');
const pointsInfo  = +prompt('Введите кол-во баллов по информатике');


if ((pointsMat+pointsRus+pointsInfo)>=265 ){
  console.log ('Поздравляю, вы поступили на бюджет!');
}else if((pointsMat+pointsRus+pointsInfo) < 265 ){
console.log ('Сожалеем, вы не поступили на бюджет!');
}


const cash = +prompt('Введите сумму которую хотите снять');

if (cash % 100 === 0){
  console.log(' Пожалуйста ждите');
}else if (cash % 100 !== 0){
  console.log ('Введите сумму кратную 100р');
}





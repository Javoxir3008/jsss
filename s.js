let playAgain = true;

while (playAgain) {
 const user = prompt('Введите свой выбор (Камень, Бумага, Ножницы) или введите "exit" для выхода:').toLowerCase();

 if (user === 'exit') {
  alert('Игра остановлено')
  break; 
 }

 let computer = '';
 const random = Math.floor(Math.random() * 3);

 if (random === 0) {
  computer = 'камень';
 } else if (random === 1) {
  computer = 'бумага';
 } else if (random === 2) {
  computer = 'ножницы';
 }

 const v1 = user === 'камень' && computer === 'бумага';
 const v2 = user === 'бумага' && computer === 'ножницы';
 const v3 = user === 'ножницы' && computer === 'камень';

 if (user === computer) {
  alert('Ничья');
 } else if (v1 || v2 || v3) { 
  alert('Компьютер выиграл');
 } else {
  alert('Ты победил');
 }
}



  
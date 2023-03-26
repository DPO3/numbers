let randomNumber = Math.floor(Math.random()*100+1);
let array = [];
let countNumber = 0;
function show() {
    let userNumber = document.getElementById('userNumber').value;
    if (userNumber<0) {
        message.innerHTML = 'Введи > 0';}

    else if (userNumber>100) {
        message.innerHTML = 'Введи < 100';}

    else if (userNumber=='') {
        message.innerHTML = 'Введи число';}

    else if (userNumber>randomNumber) {
        message.innerHTML = 'Введи меньше'
        countNumber++;
        array.push(userNumber);
        count.innerHTML = countNumber;
        answers.innerHTML = array;}

    else if (userNumber<randomNumber) {
        message.innerHTML = 'Введи больше';
        countNumber++;
        array.push(userNumber);
        count.innerHTML = countNumber;
        answers.innerHTML = array;}

    else if (userNumber==randomNumber) {
        message.innerHTML = 'Победа';
        countNumber++;
        array.push(userNumber);  
        count.innerHTML = countNumber;
        answers.innerHTML = array;} 
    }   
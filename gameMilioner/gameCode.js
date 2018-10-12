var event, ok;

do { 
    ok = false;
    askQuestion (0);
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(event);
    }
} while (!ok);

for (var i = 0; i < 4;) {
    if (event == questions[i].correct) {
        do {
            ok = false;
            askQuestion (++i);
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(event);
            }
        } while (!ok);
    } else {
        alert("Игра окончена!");
        break;
    }
    
    if (i == 4) {
        alert("Вы стали миллионером!");
    }
}



//--------------------------

function askQuestion (i) {
    event = +prompt("Введите номер правильного ответа, для выхода введите -1:" + questions[i].question + questions[i].answer1 + questions[i].answer2 + questions[i].answer3 + questions[i].answer4);
}

function isAnswer (event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;   
}
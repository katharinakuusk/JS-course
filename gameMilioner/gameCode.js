var event, ok;

do { 
    ok = false;
    askQuestion (0);
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(event);
    }
} while (!ok)


if (event == questions[0].correct) {    
    do { 
        ok = false;
        askQuestion (1);
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(event);
        }
    } while (!ok)
    if (event == questions[1].correct) {    
        do { 
            ok = false;
            askQuestion (2);
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(event);
            }
        } while (!ok);
       if (event == questions[2].correct) {    
            do { 
                ok = false;
                askQuestion (3);
                if (event == -1) {
                    break;
                } else {
                    ok = isAnswer(event);
                }
            } while (!ok);
            if (event == questions[3].correct) {    
                do { 
                    ok = false;
                    askQuestion (4);
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(event);
                    }
                } while (!ok);
                if (event == questions[4].correct) {    
                    alert("Вы выиграли миллион!")
                } else {
                   alert("Игра окончена!");
               }                  
            } else {
               alert("Игра окончена!");
           }
       } else {
           alert("Игра окончена!");
       }
    } else {
        alert("Игра окончена!");
    }
} else {
    alert("Игра окончена!");
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
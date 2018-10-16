function my_initiation() {
    var letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H"];
    var chessmen = ["U+265C", "U+265E", ];
    var table = document.createElement("table");
    document.body.appendChild(table);
    
    //Создание строки с буквами 
    
    var lettersString = document.createElement("tr");
    lettersString.setAttribute("class", "table__string-letters");
    table.appendChild(lettersString);
    for (var letterColumn = 0; letterColumn <= 8; letterColumn++) {
        var th = document.createElement("th");
        th.setAttribute("class", "table__cell-letter");
        th.innerHTML = letters[letterColumn];
        table.appendChild(th);
    }
    
    //Создание клеток шахматной доски
    var number = 8; //отвечает за нумерацию строк
    
    for (var string = 0; string < 4; string++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        
        //нумерация
        var numberCell = document.createElement("td");
        numberCell.setAttribute("class", "table__cell-number");
        numberCell.innerHTML = number--;
        tr.appendChild(numberCell);
        
        for (var column = 0; column < 8; column++) {
            var td = document.createElement("td");
            
            if (column % 2 === 0) {
                td.setAttribute("class", "cell-black");
            } else {
                td.setAttribute("class", "cell-white");
            }
            
            tr.appendChild(td);
        }
        
        var tr = document.createElement("tr");
        table.appendChild(tr);
        
        //нумерация
        var numberCell = document.createElement("td");
        numberCell.setAttribute("class", "table__cell-number");
        numberCell.innerHTML = number--;
        tr.appendChild(numberCell);
        
        for (var column = 0; column < 8; column++) {
            var td = document.createElement("td");
            
            if (column % 2 === 1) {
                td.setAttribute("class", "cell-black");
            } else {
                td.setAttribute("class", "cell-white");
            }
            
            tr.appendChild(td);
        }
        
    }
    
    function createChessmen () {
        
    }
}

Window.onload = my_initiation;
my_initiation();
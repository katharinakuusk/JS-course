function my_initiation() {
    var letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H"];
    var chessmen = [ ["&#9823", "&#9822", "&#9821", "&#9818;", "&#9819;", "&#9821", "&#9822", "&#9823"],
                   ["&#9814;", "&#9816;", "&#9815;", "&#9812;", "&#9813;", "&#9815;","&#9816;", "&#9814;"]
                   ];
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
    var flag = true; 
    
    for (var string = 8; string > 0; string--) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        
        //нумерация
        var numberCell = document.createElement("td");
        numberCell.setAttribute("class", "table__cell-number");
        numberCell.innerHTML = string;
        tr.appendChild(numberCell); 
        
        for (var column = 0; column < 8; column++) {
            var td = document.createElement("td");
            if (column == 0) {
                flag = !flag;
            }
        
            if (flag === true) {
                    td.setAttribute("class", "cell-black");
                } else {
                    td.setAttribute("class", "cell-white");
                }
            flag = !flag;
            tr.appendChild(td);
            
            if (string == 8) {
                td.innerHTML = chessmen[0][column];
            }
            if (string == 7) {
                td.innerHTML = "&#9823;";
            }
            
            if (string == 1) {
                td.innerHTML = chessmen[1][column];
            }
            if (string == 2) {
                td.innerHTML = "&#9817;";
            }
        }     
    }
    
    function createChessmen () {
        
    }
}

Window.onload = my_initiation;
my_initiation();
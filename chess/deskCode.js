function my_initiation() {
    var letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "],
        chessmen = [ ["&#9823", "&#9822", "&#9821", "&#9818;", "&#9819;", "&#9821", "&#9822", "&#9823"],
                   ["&#9814;", "&#9816;", "&#9815;", "&#9812;", "&#9813;", "&#9815;","&#9816;", "&#9814;"]
                   ];
    var table = document.createElement("table");
    document.body.appendChild(table);
    
    createLetters("lettersRowTop", "lettersCellTop");
    
    //Создание клеток шахматной доски
    var flag = true; 
    
    for (var row = 8; row > 0; row--) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        
        createNumbers ("numberCellLeft");
        
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
            
            if (row == 8) {
                td.innerHTML = chessmen[0][column];
            }
            if (row == 7) {
                td.innerHTML = "&#9823;";
            }
            
            if (row == 1) {
                td.innerHTML = chessmen[1][column];
            }
            if (row == 2) {
                td.innerHTML = "&#9817;";
            }
        } 
        createNumbers ("numberCellRight");
        //numberCellRight.classList.add("table__cell-number-rotate");
    }
    
    createLetters ("lettersRowBottom", "lettersCellBottom");
    
    function createLetters (name, cellName) {
        name = document.createElement("tr");
        name.setAttribute("class", "table__row-letters");
        table.appendChild(name);
        
        for (var letterColumn = 0; letterColumn < 10; letterColumn++) {
            cellName = document.createElement("td");
            cellName.setAttribute("class", "table__cell-letter");
            cellName.innerHTML = letters[letterColumn];
            table.appendChild(cellName);
        }
        return cellName;
    }
    
    function createNumbers (name) {
        var name = document.createElement("td");
        name.setAttribute("class", "table__cell-number");
        name.innerHTML = row;
        tr.appendChild(name);
        return name;
    }
}

Window.onload = my_initiation;
my_initiation();
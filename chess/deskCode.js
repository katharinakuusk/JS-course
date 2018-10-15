function my_initiation() {
    var letters = ["A", "B", "C", "D", "E", "F", "G"];
    var table = document.createElement("table");
    document.body.appendChild(table);
    for (var string = 0; string < 8; string++) {
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for (var column = 0; column < 8; column++) {
            var td = document.createElement("td");
            tr.appendChild(td);
        }
    }
}

Window.onload = my_initiation;
my_initiation();
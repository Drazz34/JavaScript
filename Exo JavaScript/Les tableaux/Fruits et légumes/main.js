 let tableau = [
    ["", "mai", "juin", "juillet"],
    ["abricot", 5.80, 3.37, 3.72],
    ["fraise", 10.57, 11.11, 12.84],
    ["poireau", 1.66, 2.34, 1.98]
];


for (let i = 1; i < tableau.length; i++) {
    for (let j = 1; j < tableau.length; j++) {
        document.write("Le produit " + tableau[i][0] + " coutaît " + tableau[i][j] 
        + " euros en " + tableau[0][j] +". </br></br>");  
    }
}

function creation_tableau() {
    let body = document.getElementsByTagName("body")[0];

    let tbl = document.createElement("table");
    let tbl_body = document.createElement("tbody");

    for (let i = 0; i < tableau.length; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < tableau[0].length; j++) {
            let cell = document.createElement("td");
            let cell_text = document.createTextNode(tableau[i][j]);
            cell.appendChild(cell_text);
            row.appendChild(cell);
        }
        
        tbl_body.appendChild(row);
    }

    tbl.appendChild(tbl_body);
    body.appendChild(tbl);

    tbl.setAttribute("border", "2");
}
tableau.push(["tomate", 4.34, 3.13, 2.77]);

creation_tableau();

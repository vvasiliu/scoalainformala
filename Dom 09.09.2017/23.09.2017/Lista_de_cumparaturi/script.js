var items = [];
var itemPeCareAmDatClick;
function addItem() {
    var nume = document.getElementById("item_cumparat").value;
    items.push(nume);
    document.getElementById("item_cumparat").value = "";
}

function displayItems() {
    var htmlItems=`
    <table>
        <tr>
            <th>Item description</th> <br />
            <th>Action</th>
        </tr>
    `;
for(var i=0;i<items.length;i++){
    htmlItems=htmlItems+`
    <tr>
        <td>${items[i]}</td>
        <td>
        <button onclick="itemPeCareAmDatClick=${i}">Mark as buyed</button>
        </td>
    </tr>
    `;
    }
    document.getElementById("lista_items").innerHTML=htmlItems;
}



function ordoneazaCrescator() {
    items.sort();
    document.getElementById("ordonare_lista").innerHTML = items;
}

function ordoneazaDescrescator() {
    items.sort();
    items.reverse();
    document.getElementById("ordonare_lista").innerHTML = items;
}
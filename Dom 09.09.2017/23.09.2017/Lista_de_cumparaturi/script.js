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
            <th>Item description</th>
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
function itemPeCareAmDatClick () {
    var str = "Mark as buyed";
    var result = str.strike();
    document.getElementById("items").innerHTML = result;
}
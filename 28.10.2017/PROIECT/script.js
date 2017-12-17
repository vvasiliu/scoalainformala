
function makeGetFirebase(url) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            window.menu = JSON.parse(xhttp.responseText)
            draw(menu);

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function draw(menu) {
    //var 2
    var str = "";

    var menuKeys = Object.keys(menu);
    for (var i = 0; i < menuKeys.length; i++) {
        var menuItem = menu[menuKeys[i]];

        str += `<div class="col-sm-4" style="float:left">
            ${menuItem.name}
            <span id="titlu_poza"></span>
            <img src="${menuItem.src}">
            <br />
            <a href="./details.html?idProdus=${i}">
                <button id="btnDetails" style="text-decoration: none; color: black" autofocus onclick="afiseazaDetalii()">Details</button>
            </a>
            <br /> Pret:
            <span id="">${menuItem.pret}</span>
            </div>`;
        //code goes here
    }

    document.querySelector(".produse").innerHTML = str;
}

makeGetFirebase("https://proiect-magazin-virtual.firebaseio.com/.json");

function afiseazaDetalii() {

}
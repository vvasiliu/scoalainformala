class Contact{
    constructor(nume, telefon){
        this.nume = nume;
        this.telefon = telefon;
    }
}

var agenda = [];
var indexClick;
flag = false;

function adaugaContact(){

    var nume = document.getElementById("nume").value;
    var numar = document.getElementById("numar").value;
    var c = new Contact(nume, numar);
    agenda.push(c);
    document.getElementById("nume").value = "";
    document.getElementById("numar").value = "";

}

function displayContacte(){
    var htmlContacte = `
    <table width=100%>
        <tr>
            <th class="header">NUME</th>
            <th class="header">NUMAR TELEFON</th>
            <th></th>
            <th></th>
        </tr>
        <tr></tr>  
    `
    //aici adaugam IF flag ...
    for(var i=0;i<agenda.length;i++){
        htmlContacte = htmlContacte + `
        <tr>
            <th>${agenda[i].nume}</th>
            <th>${agenda[i].telefon}</th>
            <th><button id="modifica" onclick="indexClick=${i}; modifica(); sterge()">Modifica</button></th>
            <th><button id="sterge" onclick="indexClick=${i}; sterge(); displayContacte();">Sterge</button></th>
        </tr>
        `;
    }
    htmlContacte = htmlContacte + `</table>`;
    document.getElementById("agenda").innerHTML = htmlContacte;
    document.getElementById("agenda").style.display ="block";

}


function sterge(){
    agenda.splice(indexClick, 1);
}

function modifica(){
    flag = true;
    document.getElementById("nume").value = agenda[indexClick].nume;
    document.getElementById("numar").value = agenda[indexClick].telefon;


}
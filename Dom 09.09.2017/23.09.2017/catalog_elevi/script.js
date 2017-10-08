
var elevi = [];
var note = [];
var medieNote = [];
var indexElevPeCareAmDatClick;
function adugareElev () {
    var nume = document.getElementById("nume_elev").value;
    elevi.push(nume);
    note.push([]);
    medieNote.push(0);
    document.getElementById("nume_elev").value = "";
}

function ordoneazaCrescator() {
    medieNote.sort();
    document.getElementById("adaugare_note_wrapper").innerHTML = medieNote;
}

function ordoneazaDescrescator() {
    medieNote.sort();
    medieNote.reverse();
    document.getElementById("adaugare_note_wrapper").innerHTML = medieNote;
}

function displayElevi() {
    var htmlElevi=`
    <table>
        <tr>
            <th>Nume elev</th>
            <th>Medie note</th>
            <th></th>
        </tr>
    `;
    for(var i=0;i<elevi.length;i++){
        htmlElevi=htmlElevi+`
        <tr>
            <td>${elevi[i]}</td>
            <td>${medieNote[i]}</td>
            <td>
                <button onclick="indexElevPeCareAmDatClick=${i}; displayNote();">Vezi notele</button>
            </td>
        </tr>
    `;
    }
    document.getElementById("lista_elevi").innerHTML=htmlElevi;
}
function displayNote() {
    document.getElementById("span_nume_elev").innerHTML = elevi[indexElevPeCareAmDatClick];
    document.getElementById("note_wrapper").style.display="block";
    //pas 1 -preluam notele care le are elevul
    var noteElev = note[indexElevPeCareAmDatClick];

    var htmlNote = "";
    for(var i=0;i<noteElev.length;i++) {
        htmlNote = htmlNote + noteElev[i] + "<br/>";
    }
    //pas 3  - afisam html-ul cu notele elevului in ecran
    document.getElementById("lista_note").innerHTML = htmlNote;
}
function hideNote() {
    document.getElementById("note_wrapper").style.display="none";
}
function adaugaNota() {
    var nota = document.getElementById("nota_elev").value;

    //Pas 1- preiau lista de note din matrice
       var noteElev=note[indexElevPeCareAmDatClick];
    //Pas 2 - adauga nota noua in lista
       noteElev.push(nota);
    document.getElementById("nota_elev").value = "";
}

function sumaNoteElev() {
    var noteElev = note[indexElevPeCareAmDatClick];
    var sum = 0;
    for(var i=0;i<noteElev.length;i++) {
        sum = sum + parseInt(noteElev[i]);
    }
    return sum;
}

function medieNoteElev() {
    var noteElev = note[indexElevPeCareAmDatClick];
    
    var sumaNote = sumaNoteElev();
    var nrNote = noteElev.length;

    var mediaNotelor = sumaNote / nrNote;

    return mediaNotelor;
}
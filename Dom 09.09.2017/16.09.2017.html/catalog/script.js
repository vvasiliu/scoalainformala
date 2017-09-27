var note = [];
function generateRandomArray() {
    var randomNote = [];
    for(var i=0;i<10;i++) {
        var valoareRandom = generteRandomNumberBetween0And10();
        randomNote.push(valoareRandom); 
    }
    return randomNote;
}

function displayRandomNote() {
    var noteHtml = "";
    for(var i=0;i<note.length;i++) {
        noteHtml += "<div>" +
                   note[i] + 
                    "</div>";
    }
    document.getElementById ("note").innerHTML= noteHtml;
}

function generteRandomNumberBetween0And10() {
    return Math.floor(Math.random() * 10);
}
function sortAsc () {
    //TODO
}
function sortDesc () {
    //TODO
}
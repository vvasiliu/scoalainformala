var note = [8, 7, 3, 9, 10, 2, 1];
function calculeazaMax() {
    var max = 0;
    for (var i = 0; i < note.length; i++) {
        if (max < note[i]) {
            max = note[i];
        }

    }
    return max;
}
console.log(calculeazaMax());






function findPositionInArray(valoarea) {
    var position = 0;
    for (var i = 0; i < note.length; i++) {
        if (valoarea == note[i]) {
            position = i;
        }
    }
    return position;
}
console.log("pozitiaUndeGasescElementul=" + findPositionInArray(calculeazaMax()));


function sortDesc() {
    var sortedArray = [];
    var nrElem = note.length;
    for (var i = 0; i < nrElem; i++) {
        var max = calculeazaMax();
        var pozitiaMaxInArray = findPositionInArray(max);
        sortedArray.push(max);
        note.splice(pozitiaMaxInArray, 1);
    }
    return sortedArray;
}
console.log(sortDesc());
//maxim n nr.
function max (arr){
    var maxim = arr[0];
    for(var i=0;i<arr.length;i++){
        if (arr[i]>maxim){
            max=arr[i];
        }
    }
    return maxim;
}

//media artitmetica
function medie(arr) {
    var s=0;
    var nr=arr.length;
    for(var i=0;i<nr;i++){
        s=s+arr[i];
    }
    var medie=s/nr;
    return medie;
}

//produsul a n nr
function produs (arr) {
    var p=1;
    for (var i=0;i<arr.length;i++){
        p=p*arr[i];
    }
    return p;
}
console.log(produs([7,9,3]));


function varTest() {
    var x=1;
    if (true) {
        var x=2;
        console.log(x);
    }
    console.log(x);
}
varTest();

function letTest() {
    let x=1;
    if (true) {
        let x=2;
        console.log(x);
    }
    console.log(x);
}
letTest();

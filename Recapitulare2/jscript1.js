
//1//
function multiplicaNumere() {
    var numar = document.querySelector("#body [id=\"numar\"]").value
    var numar2 = document.querySelector("#body [id=\"numar2\"]").value
    var m = numar * numar2;
    return m;
}
function divideNumere() {
    var numar = document.querySelector("#body [id=\"numar\"]").value
    var numar2 = document.querySelector("#body [id=\"numar2\"]").value
    var d = numar / numar2;
    return d;
}
function displayNumere(r) {
    var result = document.querySelector("#body [id=\"result\"]")
    result.innerHTML = r;
}

//2//
function eliminaCaracter(s, c) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
        if (s[i] != c) {
            result = result + s[i]
        }
    }
    return result;
}
eliminaCaracter("alina", "a");
console.log(eliminaCaracter("alina", "a"));

sau

function eliminaCaracter(s, c) {
    return s.replace(c, "");
}
console.log(eliminaCaracter("Vlad", "d"));

//14//
Fibonacci


function f(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    if (n > 1) {
        return f(n - 1) + f(n - 2);
    }
}
sau

var cache = [];
function f(n) {
    if (cache[n]) return cache[n];
    if (n == 0) {
        cache[0] = 0;
        return 0;
    }
    if (n == 1) {
        cache[1] = 1;
        return 1;
    }
    if (n > 1) {
        var r = f(n - 1) + f(n - 2);
        cache[n] = r;
        return r;
    }
} 

//20//



























//3//
function areJava(b) {
    if (b[0]=="J" && b[1]=="a" && b[2]=="v" && b[3]=="a"){
        return true;
    }
    else {
        return false;
    }
}

//4//
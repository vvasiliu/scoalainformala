//EX. 1
function isPar(a){ // sau direct return(a%2==1);
    if(a%2==1){
     return true
    }else{
        return false;
    }
}
//Ex. 18
function getEmails(){
    var URL = "https://jsonplaceholder.typicode.com/posts/1/comments";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(xhttp.responseText);
                json.forEach((e)=> {
                    console.log(e.email);});
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
}
getEmails();
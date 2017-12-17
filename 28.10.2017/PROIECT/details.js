var idprodus= window.location.search.substr(10);

function makeGetFirebase(){
    
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to be performed when the document is ready:
              window.menu = JSON.parse(xhttp.responseText)
              draw(menu);
    
          }
      };
      xhttp.open("GET", "https://proiect-magazin-virtual.firebaseio.com/"+idprodus+".json", true);
      xhttp.send();
    }
    
    function draw(menu) {
        document.getElementById("name").innerHTML=menu.name;
        document.getElementById("stoc").innerHTML=menu.stoc;
        document.getElementById("provenienta").innerHTML=menu.provenienta;
        document.getElementById("img").src=menu.src;
    }

    makeGetFirebase();
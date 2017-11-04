var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       window.menu = JSON.parse(xhttp.responseText);
       console.log(menu)
       draw(window.menu);

    }
};
xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/menu/.json", true);
xhttp.send();
       //var 1
       //for (var i in menu) {
           //if(!menu.hasOwnProperty(i)) {continue;}
           //var menuItem = menu[i];//

           //code goes here
     
       function draw(menu){
       //var2
       var str="";

       var menuKeys = Object.keys(menu);
       for (var i=0;i<menuKeys;i++) {
           var menuItem = menu[menuKeys[i]];

           str+=`
           <div>${menuItem.nume} </div>
           <div>${menuItem.ingrediente} </div>
           <div>${menuItem.reteta} </div>
           <div style="border-bottom:1px solid black;">&nbsp;</div>
           `;
           //code goes here
       }
       document.querySelector("body").innerHTML=str;
    }
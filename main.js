function addUser(){

    player1=document.getElementById("player1").value;
    player2=document.getElementById("player2").value;
    
    localStorage.setItem("pl1 name",player1);
    localStorage.setItem("pl2 name",player2);
    
    window.location="mathquiz.html";
    
    
    
     }
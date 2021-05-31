pl1_name=localStorage.getItem("pl1 name");
pl2_name=localStorage.getItem("pl2 name");

pl1_score=0;
pl2_score=0;





function send() {

    num_1 = document.getElementById("input1").value;
    num_2 = document.getElementById("input2").value;
    actual_ans = parseInt(num_1) * parseInt(num_2);
    
    question_number="<h4 style='color:royal blue;'>"+num_1+" x "+num_2+"</h4>";
    input_box="<br> Answer:  <input type='text' id='answer_box' style = 'width:40%;'>"
    check_button="<br> <br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("input1").value="";
    document.getElementById("input2").value="";
    
    }

    question_turn="player1"
    ans_turn="player2";
    
    function check(){
    
    get_ans=document.getElementById("answer_box").value;
    
    
    if (get_ans == actual_ans){
    
    if(question_turn=="player1"){
    
       question_turn="player2";
       document.getElementById("question").innerHTML="Question Turn -"+ pl2_name;
    }
    
    
    else{
    
        question_turn="player1";
       document.getElementById("question").innerHTML="Question Turn -"+ pl1_name;
    }
    
    
    if(ans_turn=="player1"){
        
        update_pl1_score=pl1_score+1;
        document.getElementById("answer").innerHTML="Answer Turn -"+ pl2_name;
    }
    
    else{
        
        update_pl2_score=pl2_score+1;
        document.getElementById("answer").innerHTML="Answer Turn -"+ pl1_name;
    }
    
    document.getElementById("output").innerHTML="";
    
}}

function rollDice(){
    var roll = parseInt(Math.random()*6)+1;
    document.getElementById("diceValue").innerHTML=roll;
    
    if(roll>3){
        document.getElementById("footer").innerHTML= "<p>You rolled "+roll+". You <span class='text-primary'>win!</span>";
    }
    else{
        document.getElementById("footer").innerHTML= "<p>You rolled "+roll+". You <span class='text-danger'>lose!</span>";
    }
    
}

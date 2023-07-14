var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

let a= Math.floor(Math.random()*100)+1;
let score=10;
let highscore=0;
console.log("Testing text");
document.querySelector(".submitButton").addEventListener("click",function(){
    const inputUser=Number(document.getElementById('guess').value);
    if(inputUser<1||inputUser>100){
        alert("please enter a number between 1 and 100");
    }
    else{
        score--;
        if(inputUser==a){
            msg1.textContent="Correct";
            msg2.textContent="You guessed it right";
            msg3.textContent="The number is "+a;
            //disable
            document.querySelector(".submitButton").disabled=true;
            document.getElementById('.guess').disabled=true;
            document.body.style.backgroundColor= "green";
        }
        else if(inputUser<a){
            msg1.textContent="Wrong";
            msg2.textContent="Yur guess is too low";
            msg3.textContent="Your score is "+score;
        }
        else if(inputUser>a){
            msg1.textContent="wrong";
            msg2.textContent="Your guess is too high!";
            msg3.textContent="Your score is"+score;
        }
    }

});

function restart() {
a=Math.floor(Math.random()*100)+1;
score=10;
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("Button").disabled = true;
  
document.getElementById('guess').disabled=false;
document.querySelector(".submitButon").disabled=false;
});
document.getElementById("message3").textContent="Score:"+score;
document.body.style.backgroundColor = "#033e97";
msg1.textContent="Start Guessing";
msg2.textContent=" ";
msg3.textContent="Score:"+score;
}


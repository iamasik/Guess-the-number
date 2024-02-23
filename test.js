"use strict"
const WinNum=Math.floor(Math.random()*20)+1
let Sdata=document.querySelector(".upscore")
let Score=Number(Sdata.textContent)
let Hs=document.querySelector(".Hs")
let A1=false

document.querySelector(".PlayAgainBtn").addEventListener("click",function(){
	A1=false
    document.querySelector("body").classList.remove("cbody")
	Score=20
    Sdata.textContent=Score
    document.querySelector(".Start").textContent="Start guessing.."
    document.querySelector(".WtIGuess").textContent="?"
    document.querySelector(".inputbox").value=0
    WinNum=Math.floor(Math.random()*20)+1
    
})
document.querySelector(".checkbtn").addEventListener('click', function(){
    let msg=document.querySelector(".Start")
    let Input=Number(document.querySelector(".inputbox").value)
    document.querySelector(".WtIGuess").textContent=Number(Input)
    if(!Input){
        alert("Please enter a value")
    }
    else if(Score==0){
        alert("Opps You lose the game click (Play again)")
    }
    else if(A1){
        alert("Click Play again for new game")
    }
    else{
        if(Input>WinNum){
            msg.textContent="Too Heigh!!!"
            Score--
            Sdata.textContent=Score
        }
        else if(Input<WinNum){
            msg.textContent="Too Low!!!"
            Score--
            Sdata.textContent=Score
        }
        else if(Input===WinNum){
            msg.textContent="You win!!!!!!!!"
            Sdata.textContent=Score
            A1=true
            document.querySelector("body").classList.add("cbody")
            if(Number(Hs.textContent)<Score){
                Hs.textContent=Score
            }
        }
    }
    
    console.log(Input)
})
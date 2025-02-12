
const cards =  document.querySelectorAll(".container");
let currentIndex = 0;


function cardsChange(){
   cards.forEach((card, index)=>{
    card.classList.toggle('active', index ===  currentIndex );
   })
}


function nextFunc(){
  currentIndex = (currentIndex + 1) % cards.length ;
  cardsChange()
}

function prevFunc(){
    currentIndex = (currentIndex - 1 + cards.length) % cards.length ;
    cardsChange()
  }

  
  
  let score = 0;

function getanswer(){
    score = 0;

    // Select each answer
    let question1 = document.querySelector('input[name="q1"]:checked');
    let question2 = document.querySelector('input[name="q2"]:checked');
    let question3 = document.querySelector('input[name="q3"]:checked');
    let question4 = document.querySelector('input[name="q4"]:checked');
    let question5 = document.querySelector('input[name="q5"]:checked');

    // Check if answers are correct and increment score
    if (question1 && question1.value === "Application") {
       score += 1;
    }
    if (question2 && question2.value === "Magic tool") {
        score += 1;
    }
    if (question3 && question3.value === "Joystick") {
        score += 1;
    }
    if (question4 && question4.value === "MS Word 1020") {
        score += 1;
    }
    if (question5 && question5.value === "Office Clipboard") {
        score += 1;
    }
}

function checkScore(){
    getanswer();
    alert("Your score is: " + score);
}



  



var quizAnswer1 = document.getElementById("answer1");
var quizAnswer2 = document.getElementById("answer2");
var quizAnswer3 = document.getElementById("answer3");
var quizAnswer4 = document.getElementById("answer4");
var question = document.getElementById("question");
var startQuizBtn = document.getElementById("startquiz");
var timeRemaining = document.getElementById("quiztimer");
var results = document.getElementById("showresults");

//DATA
var quizDATA = {
    "quizname" : "Module 4 Code Quiz",
    "questions_answers" : [
        {
            "question" : "What's your first name",
            "answer" : "Paul1",
            "options" : ["Peter1", "Paul1", "David1", "Fred1"]
        },
        {
            "question" : "What's your last name",
            "answer" : "Fred",
            "options" : ["Peter2", "Paul2", "David2", "Fred2"]
        },

    ]
    };

    //FUNCTIONS
    function startQuiz() {
        startTimer();
        displayQA();

        }
    
    function startTimer() {
        // console.log("Timer has started: ");
        var secondsRemaining = 10
        timeRemaining.textContent = secondsRemaining;
        setInterval(function() {
            // --secondsRemaining;
            timeRemaining.textContent = secondsRemaining;
            --secondsRemaining;
        }, 1000)
    }
  
    function displayQA(){
        question.textContent = quizDATA.questions_answers[0].question
        quizAnswer1.textContent = quizDATA.questions_answers[0].options[0];
        quizAnswer2.textContent = quizDATA.questions_answers[0].options[1];
        quizAnswer3.textContent = quizDATA.questions_answers[0].options[2];
        quizAnswer4.textContent = quizDATA.questions_answers[0].options[3];
    }

    // Get element ID when the user click
    function ans_click(clicked) {
        var userAnswer = document.getElementById(clicked).textContent;
        // quizAnswer1.disabled = true;
        // quizAnswer2.disabled = true;
        // quizAnswer3.disabled = true;
        // quizAnswer4.disabled = true;
        setAnsBtnStatus(true);
        validateAnswer(userAnswer);
        // console.log ("Clicked Button id; " + clicked);
        // console.log ("User Answer by name " + userAnswer);
    }

    function validateAnswer(userAnswer){
        if (userAnswer === quizDATA.questions_answers[0].answer) {
            console.log("CORRECT")
            results.textContent = "YES! YES! INCORRECT";
        } else {
            console.log("WRONG")
            results.textContent = "INCORRECT";
        }
    }

    function setAnsBtnStatus(status) {
        quizAnswer1.disabled = status;
        quizAnswer2.disabled = status;
        quizAnswer3.disabled = status;
        quizAnswer4.disabled = status;
    }
// startQuizBtn.addEventListener("click", startQuiz);
startQuizBtn.addEventListener("click", function(event) {
    setAnsBtnStatus(false);
    startQuiz();
})
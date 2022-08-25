var questionBox = document.getElementById('question');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');
var start = document.getElementById('start');
var time = document.getElementById('time');
var viewScore = document.getElementById('viewscore');
var displayPrompt = document.getElementById('promptDisplay');
var answers = [ans1, ans2, ans3, ans4];

var clock = 60;
time.textContent = clock;
var questionIndex = 0;
var score = 0;
var storName;

//switches to score menu
viewScore.addEventListener('click', function() {
    location.replace('./HighScore.html')
});

//checks each button for correct answer
start.addEventListener('click', function() {
    showBtns();
    pickQuestion();
    startTime();
});    

ans1.addEventListener('click', function() {
    if (ans1.classList.contains('correct')){ 
        correctAnswer();
    } else {
        wrongAnswer();
    }
});
ans2.addEventListener('click', function() {
    if (ans2.classList.contains('correct')){ 
        correctAnswer();
    } else {
        wrongAnswer();
    }
});
ans3.addEventListener('click', function() {
    if (ans3.classList.contains('correct')){ 
        correctAnswer();
    } else {
        wrongAnswer();
    }

});
ans4.addEventListener('click', function() {
    if (ans4.classList.contains('correct')){ 
        correctAnswer();
    } else {
        wrongAnswer();
    }

});

//this starts with the first question object and enters it as texted. questions in random order
function pickQuestion() {
    questionBox.textContent = questions[questionIndex].question;
    answers.sort(() => Math.random() - .5)
    answers[0].textContent = questions[questionIndex].choice1; 
    answers[1].textContent = questions[questionIndex].choice2; 
    answers[2].textContent = questions[questionIndex].choice3; 
    answers[3].textContent = questions[questionIndex].correct;
    answers[3].classList.add('correct')
        
};

//if answer is correct
function correctAnswer() {
    displayPrompt.textContent = 'Correct!'
    setTimeout(function() {
        displayPrompt.textContent = ''
    }, 800);

    score++;
    localStorage.setItem('score', score)
    questionIndex++;
    answers[3].classList.remove('correct');
    checkQuiz();
    pickQuestion();
};

//if answer is wrong
function wrongAnswer() {
    clock = clock - 10;
   displayPrompt.textContent = 'Incorrect!'
    setTimeout(function() {
        displayPrompt.textContent = ''
    }, 800);

    questionIndex++;
    answers[3].classList.remove('correct')
    checkQuiz();
    pickQuestion();
};

//disables button sets clock interval and resets once time is up
function startTime() {
    start.disabled = true;
    var clockStart = setInterval(function() {
        clock--;
        time.textContent = clock;

        if (clock <= 0) {
            clearInterval(clockStart);
            displayPrompt.textContent = 'Times Up!';

            setTimeout(function() {
                start.disabled = false;
                clock = 100;
                time.textContent = clock;
                displayPrompt.textContent = ' ';
                setTimeout(gameOver(), 1200)
            }, 1200)
        }
    }, 1000)
};

//looks to see if all questions have been answered
function checkQuiz() {
    if (questionIndex > 4){
        gameOver();
    }
}

//asks for player initials and loads highscore page
function gameOver() {
    var name = window.prompt('Please enter your initials')
    storName = name.toUpperCase();
    localStorage.setItem('name', storName)
    localStorage.setItem('score', score)
    location.replace('./HighScore.html')
};

//displays buttons to board
function showBtns() {
    for (i = 0; i < answers.length; i++) {
        answers[i].classList.remove('hide')
    }
};

//questions, choices, and answers as objects in an array
const questions = [
    {
    question: 'how many data types are there in Javascript?',
    choice1: '2',
    choice2: '3',
    choice3: '4', 
    correct: '5'
    },
    {
    question: 'what is a boolean?',
    choice1: 'A type of bean',
    choice2: 'Math formula',
    choice3: 'An animal', 
    correct: 'True or false'
    },
    {
    question: 'which is an example of an array?',
    choice1: 'array',
    choice2: '{color: blue, name: jerry}',
    choice3: '2 + 2 - 6', 
    correct: '[1, 2, 3]'   
    },
    {
    question: 'which for loop is formatted correctly?',
    choice1: 'for i = 0 i < var.length i++;',
    choice2: 'for ([i] = 0; [i].length; [i++])',
    choice3: 'for (i = 0, i < var.length, i+)',
    correct: 'for (let i = 0; i < var.length; i++)'
    },
    {
    question: 'what is one method to prevent event bubbling?',
    choice1: 'event.propagation = false',
    choice2: '.noBubble',
    choice3: '.stopPropagation',
    correct: 'event.stopPropagation();'
    }
];
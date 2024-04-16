/*------------------------------ Questions -----------------------------*/

let questions = [
    {
        id: 1,
        title: "What planet is Obi-Wan Kenobi from?",
        answerA: "Tatooine",
        answerB: "Stewjon",
        answerC: "Degobah",
        answerD: "Coruscant",
        correctAnswer: "answerB"
    },

    {
        id: 2,
        title: "What actress played Princess Leia in the films?",
        answerA: "Daisy Ridley",
        answerB: "Natalie Portman",
        answerC: "Carrie Fisher",
        answerD: "Rosario Dawson",
        correctAnswer: "answerC"
    },

    {
        id: 3,
        title: "What planet is Padme Amidala from?",
        answerA: "Tatooine",
        answerB: "Coruscant",
        answerC: "Alderaan",
        answerD: "Naboo",
        correctAnswer: "answerD"
    },

    {
        id: 4,
        title: "How many forms of communication is C-3P0 fluent in?",
        answerA: "Over 6 Billion",
        answerB: "Over 6 Thousand",
        answerC: "Over 6 Million",
        answerD: "Over 6 HUndred",
        correctAnswer: "answerC"
    },

    {
        id: 5,
        title: "Who killed Mace Windu?",
        answerA: "Darth Sidious",
        answerB: "Anakin Skywalker",
        answerC: "Darth Maul",
        answerD: "Darth Vader",
        correctAnswer: "answerA"
    },

    {
        id: 6,
        title: "What is the name of Boba Fetts's father?",
        answerA: "'Captain' Rex Fett",
        answerB: "Boba Fett Senior",
        answerC: "Cassus Fett",
        answerD: "Jango Fett",
        correctAnswer: "answerD"
    },

    {
        id: 7,
        title: "Han Solo boasted that the Millennium Falcon made the Kessel Run in less than how many parsecs?",
        answerA: "24 Parsecs",
        answerB: "15 Parsecs",
        answerC: "12 Parsecs",
        answerD: "10 Parsecs",
        correctAnswer: "answerC"
    },

    {
        id: 8,
        title: "What model of aircraft did Luke use to 'bullseye Womp Rats'?",
        answerA: "T-4A",
        answerB: "T-16",
        answerC: "T-65B",
        answerD: "T-23",
        correctAnswer: "answerB"
    },

    {
        id: 9,
        title: "Who was the first character to speak in the first Star Wars film, A New Hope?",
        answerA: "Princess Leia",
        answerB: "R2-D2",
        answerC: "Rebel Soldier",
        answerD: "C-3PO",
        correctAnswer: "answerD"
    },

    {
        id: 10,
        title: "What species is Greedo?",
        answerA: "Rogian",
        answerB: "Twi'lek",
        answerC: "Neimoidian",
        answerD: "Trandoshan",
        correctAnswer: "answerA"
    },

    {
        id: 11,
        title: "What species is native to Endor?",
        answerA: "Twi'leks",
        answerB: "Ewoks",
        answerC: "Gungans",
        answerD: "Jawas",
        correctAnswer: "answerB"
    },

    {
        id: 12,
        title: "What kind of vehicle did Rey live in?",
        answerA: "AT-ST",
        answerB: "A-Wing",
        answerC: "AT-AT",
        answerD: "EF76 Nebulon-B escort frigate",
        correctAnswer: "answerC"
    },

    {
        id: 13,
        title: "Who killed Jabba?",
        answerA: "Han Solo",
        answerB: "Luke Skywalker",
        answerC: "Boba Fett",
        answerD: "Princess Leia",
        correctAnswer: "answerD"
    },

    {
        id: 14,
        title: "Where did the Clone Wars begin?",
        answerA: "Geonosis",
        answerB: "Dathomir",
        answerC: "Mandalore",
        answerD: "Naboo",
        correctAnswer: "answerA"
    },

    {
        id: 15,
        title: "Who killed Jango Fett?",
        answerA: "Obi-Wan Kenobi",
        answerB: "Mace Windu",
        answerC: "Anakin Skywalker",
        answerD: "Yoda",
        correctAnswer: "answerB"
    },

    {
        id: 16,
        title: "When Obi-Wan performed the blood test on Anakin, how high was the Midi-chlorian count?",
        answerA: "More than 20,000",
        answerB: "More than 50,000",
        answerC: "More than 10,000",
        answerD: "More than 35,000",
        correctAnswer: "answerA"
    },

    {
        id: 17,
        title: "How many lightsabers does General Grievous wield in his fight with Obi-Wan on Utapau?",
        answerA: "2",
        answerB: "3",
        answerC: "4",
        answerD: "5",
        correctAnswer: "answerC"
    },

    {
        id: 18,
        title: "What did R2-D2 realize about C-3PO when they first met?",
        answerA: "He's A mindless philosopher",
        answerB: "He's naked",
        answerC: "He's always scared",
        answerD: "He doesn't like him",
        correctAnswer: "answerB"
    },

    {
        id: 19,
        title: "According to Obi-Wan, how long had the Jedi been the guardians of peace and justice in the galaxy?",
        answerA: "More than 1000 generations",
        answerB: "More than 100,000 generations",
        answerC: "More than 100 generations",
        answerD: "More than 10,000 generations",
        correctAnswer: "answerD"
    },

    {
        id: 20,
        title: "Who said, 'Feel. Do not think. Trust your instincts'?",
        answerA: "Master Yoda",
        answerB: "Qui-Gon Jinn",
        answerC: "Obi-Wan Kenobi",
        answerD: "Anakin Skywalker",
        correctAnswer: "answerB"
    },

    {
        id: 21,
        title: "Which planet was Darth Vader raised on?",
        answerA: "Tatooine",
        answerB: "Kamino",
        answerC: "Dantooine",
        answerD: "Mustafar",
        correctAnswer: "answerA"
    },
];

/*------------------------------ The Game-----------------------------*/

let usedQuestions = [];
let currentQuestionIndex = 0;
let playerScore = 0;

/*------------------------------ The Start-----------------------------*/

document.getElementById("start-btn").addEventListener("click", function () {
    startGame();
});

function startGame() {
    document.getElementById("starting-screen").style.display = "none";
    document.getElementById("question-screen").style.display = "block";
    displayNextQuestion();
};

/*--------------- Question Randomizer / Options / User Answer / Check Answer ---------------*/

function displayNextQuestion() {
    if (currentQuestionIndex >= 10) {
        // Display results modal when all questions are answered
        displayResults();
        return;
    };

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));
    usedQuestions.push(randomIndex);

    let question = questions[randomIndex];
    let questionScreen = document.getElementById("question-screen");
    questionScreen.innerHTML = `
        <div class="container question">
            <h3 id="question-title">${question.title}</h3>
            <button class="col-6 question-option" data-answer="answerA" active= "true">${question.answerA}</button>
            <button class="col-6 question-option" data-answer="answerB" active= "true">${question.answerB}</button>
            <button class="col-6 question-option" data-answer="answerC" active= "true">${question.answerC}</button>
            <button class="col-6 question-option" data-answer="answerD" active= "true">${question.answerD}</button>
        </div>
    `;
}
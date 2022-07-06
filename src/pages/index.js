import './index.css';

import {
    questions,
    startButton,
    nextButton,
    questionContainer,
    answerInformation,
    questionElement,
    answerButtonElement
}
    from '../utils/constants.js';


let shuffledQuestions = questions.sort(() => Math.random() - .5);
let currentQuestionIndex = 0;


function startGame() {
    startButton.classList.add('game__button_hide');
    questionContainer.classList.remove('game__question-container_hide');
    setNextQuestion();
};

function showQuestion(question) {
    questionElement.innerText = question.question;
    createAnswerButton(question);
}

function createAnswerButton(question) {
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')

        if (answer.correct) {
            button.dataset.correct = answer.correct;
            answerInformation.innerText = answer.info
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setBodyStatusClass(document.body, correct);
    Array.from(answerButtonElement.children).forEach(button => {
        setButtonStatusClass(button, button.dataset.correct)
    })
    showTheAnswerInfo();
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('game__button_hide')
    } else {
        startButton.innerText = 'Happy hangover! Replay';
        startButton.classList.remove('game__button_hide');
        currentQuestionIndex = 0;
    }
}

function setBodyStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('page__correct')
    } else {
        element.classList.add('page__wrong')
    }
}

function setButtonStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('game__button_correct-answer')
    } else {
        element.classList.add('game__button_wrong-answer')
    }
}
function showTheAnswerInfo() {
    answerInformation.classList.remove('game__info_hide');
}

function hideTheAnswerInfo() {
    answerInformation.classList.add('game__info_hide');
}

function clearStatusClass(element) {
    element.classList.remove('game__button_correct-answer')
    element.classList.remove('game__button_wrong-answer')
    element.classList.remove('page__correct')
    element.classList.remove('page__wrong')
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('game__button_hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function completeGame() {
    currentQuestionIndex++;
    hideTheAnswerInfo();
    setNextQuestion();
}

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', completeGame)
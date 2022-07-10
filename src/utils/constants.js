export const startButton = document.querySelector('.game__button_start');
export const nextButton = document.querySelector('.game__button_next');
export const questionContainer = document.querySelector('.game__question-container');
export const answerInformation = document.querySelector('.game__info');

export const questionElement = document.querySelector('.game__question');
export const answerButtonElement = document.querySelector('.game__answers')


export const questions = [
    {
        question: 'Путин ест детей',
        answers: [
            {
                text: 'True', correct: false, info: 'Это был просто смешной пуп',
            },
            {
                text: 'False', correct: true, info: 'Ещё какой-то текст'
            }
        ],
    },
    {
        question: 'Путин купается в крови оленей',
        answers: [
            {
                text: 'True', correct: true, info: 'Я тоже в это не сразу поверила',
            },
            {
                text: 'False', correct: false, info: 'А вот какой-то текст',
            }
        ],
    },
    {
        question: 'Путин посадил шамана в психушку, потому что боится ведьм',
        answers: [
            {
                text: 'True', correct: true, info: 'Он чекнутый',
            },
            {
                text: 'False', correct: false, info: 'Тестовый текст',
            }
        ],
    },
    {
        question: 'Putin likes aquadiscos',
        answers: [
            {
                text: 'True', correct: true, info: 'It`s true! This was investigated by Navalny`s team.',
            },
            {
                text: 'False', correct: false, info: 'Oops. Putin likes to party more than you think. Check out the Meduza`s article here https://inlnk.ru/DB6355, or watch Navalny`s team`s investigation here https://youtu.be/ipAnwilMncI',
            }
        ],
    },
    {
        question: 'Путин - фея',
        answers: [
            {
                text: 'True', correct: false, info: 'Правда'
            },
            {
                text: 'False', correct: true, info: 'Лош'
            }
        ],
    }
]

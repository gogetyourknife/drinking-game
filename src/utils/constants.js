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
                text: 'True', correct: false,
            },
            {
                text: 'False', correct: true,
            }
        ],
        info: 'Это был просто смешной пуп',
    },
    {
        question: 'Путин купается в крови оленей',
        answers: [
            {
                text: 'True', correct: true,
            },
            {
                text: 'False', correct: false,
            }
        ],
        info: 'Я тоже в это не сразу поверила',
    },
    {
        question: 'Путин посадил шамана в психушку, потому что боится ведьм',
        answers: [
            {
                text: 'True', correct: true,
            },
            {
                text: 'False', correct: false,
            }
        ],
        info: 'Он чекнутый',
    },
    {
        question: 'Путин любит аквадискотеки',
        answers: [
            {
                text: 'True', correct: true,
            },
            {
                text: 'False', correct: false,
            }
        ],
        info: 'Зацени расследование Навального',
    },
    {
        question: 'Путин - фея',
        answers: [
            {
                text: 'True', correct: false,
            },
            {
                text: 'False', correct: true,
            }
        ],
        info: 'Разве что фея склада грязи',
    }
]

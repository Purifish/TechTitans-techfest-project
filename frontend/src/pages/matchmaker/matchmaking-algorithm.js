import { quizContent } from "./quiz-content";

function languageScore(language, scores) {
    if (language === "Python") {
        scores[0] = 12;
        scores[2] = 12;
        scores[4] = 12;
        scores[5] = 12;
    } else if (language === "Java") {
        scores[2] = 12;
        scores[3] = 12;
        scores[4] = 12;
    } else if (language === "C++") {
        scores[0] = 12;
        scores[3] = 12;
        scores[5] = 12;
    } else if (language === "C#") {
        scores[3] = 12;
    } else if (language === "JavaScript") {
        scores[1] = 12;
        scores[3] = 12;
        scores[4] = 12;
    } else {
        scores[2] = 12;
    }
}

function mathScore(choice, scores) {
    const mathChoices = quizContent.pages[1].elements[0].choices;
    let index = -1;

    for (let i = 0; i < mathChoices.length; i++) {
        if (choice === mathChoices[i]) {
            index = i;
            break;
        }
    }

    if (index === 0) { // Very Good
        scores[0] += 12;
        scores[5] += 12;
        scores[2] += 6;
        scores[3] += 6;
        scores[4] += 6;
    } else if (index === 1) { // Above Average
        scores[0] += 6;
        scores[5] += 6;
        scores[2] += 3;
        scores[3] += 3;
        scores[4] += 3;
    } else if (index === 3) { // Below Average
        scores[0] -= 6;
        scores[5] -= 6;
        scores[2] -= 3;
        scores[3] -= 3;
        scores[4] -= 3;
    } else if (index === 4) { // BAD
        scores[0] -= 12;
        scores[5] -= 12;
        scores[2] -= 6;
        scores[3] -= 6;
        scores[4] -= 6;
    }
}

function interestScore(choice, scores) {
    const interestChoices = quizContent.pages[3].elements[0].choices;
    let index = -1;

    for (let i = 0; i < interestChoices.length; i++) {
        if (choice === interestChoices[i]) {
            index = i;
            break;
        }
    }

    if (index === 0) { // AI
        scores[0] += 12;
        scores[5] += 12;
    } else if (index === 1) { // Create an app
        scores[1] += 6;
        scores[2] += 12;
        scores[3] += 12;
        scores[4] += 12;
    } else if (index === 2) { // Design an app
        scores[1] += 12;
        scores[3] += 6;
        scores[4] += 12;
    } else if (index === 3) { // Tough coding problems
        scores[0] += 12;
        scores[5] += 12;
        scores[2] += 6;
        scores[4] += 6;
        scores[3] += 3;
    }
}

function thinkingScore(choice, scores) {
    const thinkingChoices = quizContent.pages[2].elements[0].choices;
    let index = -1;

    for (let i = 0; i < thinkingChoices.length; i++) {
        if (choice === thinkingChoices[i]) {
            index = i;
            break;
        }
    }

    if (choice === 1) { // logical
        scores[0] += 12;
        scores[5] += 12;
    } else if (choice === 2) { // artistic
        scores[1] += 12;
        scores[4] += 12;
    } else if (choice === 3) { // creative
        scores[1] += 6;
        scores[3] += 6;
        scores[2] += 12;
        scores[4] += 12;
    } else if (choice === 4) { // brainstormer
        scores[3] += 12;
        scores[2] += 6;
        scores[4] += 6;
        scores[0] += 6;
        scores[5] += 3;
    }
}

export { languageScore, mathScore, thinkingScore, interestScore };
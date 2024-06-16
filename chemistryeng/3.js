// quiz.js

const quizData = [
    {
        question: "In which of the following , NH3 is not used?",
        a: "Nessler’s reagent",
        b: "Reagent for the analysis of IV group basic radical",
        c: "Reagent for the analysis of III group basic radical",
        d: "Tollen’s reagent",
        correct: "",
        answered: null
    },
    {
        question: "Which is true regarding nitrogen?",
        a: "least electronegative element",
        b: "has low ionisation enthalpy than oxygen",
        c: "d- orbitals available",
        d: "ability to form pπ − pπ bonds with itself",
        correct: "",
        answered: null
    },
    {
        question: "An element belongs to group 15 and 3 rd period of the periodic table, its electronic configuration would be",
        a: "1s² 2s² 2p⁴",
        b: "1s² 2s² 2p³",
        c: "1s² 2s² 2p⁶ 3s² 3p²",
        d: "1s² 2s² 2p⁶ 3s² 3p³",
        correct: "",
        answered: null
    },
    {
        question: "Solid (A) reacts with strong aqueous NaOH liberating a foul smelling gas(B) which spontaneously burn in air giving smoky rings. A and B are respectively",
        a: "P₄(red) and PH₃",
        b: "P₄(white) and PH₃",
        c: "S₈ and H₂S",
        d: "P₄(white) and H₂S",
        correct: "",
        answered: null
    },
    {
        question: "On hydrolysis, PCl3 gives",
        a: "H₃PO₃",
        b: "PH₃",
        c: "H₃PO₄",
        d: "POCl₃",
        correct: "",
        answered: null
    },
    {
        question: "P₄O₆ reacts with cold water to give",
        a: "H₃PO₃",
        b: "H₄P₂O₇",
        c: "HPO₃",
        d: "H₃PO₄",
        correct: "",
        answered: null
    },
    {
        question: "The basicity of pyrophosphorous acid ( H4P2O5) is",
        a: "4",
        b: "2",
        c: "3",
        d: "5",
        correct: "",
        answered: null
    },
    {
        question: "The molarity of given orthophosphoric acid solution is 2M. its normality is",
        a: "6N",
        b: "4N",
        c: "2N",
        d: "none of these",
        correct: "",
        answered: null
    },
    {
        question: "Assertion : bond dissociation energy of fluorine is greater than chlorine gas Reason: chlorine has more electronic repulsion than fluorine",
        a: "Both assertion and reason are true and reason is the correct explanation of assertion.",
        b: "Both assertion and reason are true but reason is not the correct explanation of assertion.",
        c: "Assertion is true but reason is false.",
        d: "Both assertion and reason are false.",
        correct: "",
        answered: null
    },
    {
        question: "Among the following, which is the strongest oxidizing agent?",
        a: "Cl₂",
        b: "F₂",
        c: "Br₂",
        d: "l₂",
        correct: "",
        answered: null
    },
    {
        question: "he correct order of the thermal stability of hydrogen halide is",
        a: "HI > HBr > HCl > HF",
        b: "HF > HCl > HBr > HI",
        c: "HCl > HF > HBr > HI",
        d: "HI > HCl > HF > HBr",
        correct: "",
        answered: null
    },
    {
        question: "Which one of the following compounds is not formed?",
        a: "XeOF₄",
        b: "XeO₃",
        c: "XeF₂",
        d: "NeF₂",
        correct: "",
        answered: null
    },
    {
        question: "Most easily liquefiable gas is",
        a: "Ar",
        b: "Ne",
        c: "He",
        d: "Kr",
        correct: "",
        answered: null
    },
    {
        question: "XeF₆ on complete hydrolysis produces",
        a: "XeOF₄",
        b: "XeO₂F₂",
        c: "XeO₃",
        d: "XeO₂",
        correct: "",
        answered: null
    },
    {
        question: "Which of the following is strongest acid among all?",
        a: "HI",
        b: "HF",
        c: "HBr",
        d: "HCl",
        correct: "",
        answered: null
    },
    {
        question: "Which one of the following orders is correct for the bond dissociation enthalpy of halogen molecules?",
        a: "Br₂> I₂ > F₂ > Cl₂",
        b: "F₂ > Cl₂ > Br₂ > l₂",
        c: "I₂ > Br₂ > Cl₂ > F₂",
        d: "Cl₂ > Br₂ > F₂ > I₂",
        correct: "",
        answered: null
    },
    {
        question: "Among the following the correct order of acidity is",
        a: "HClO₂ < HClO < HClO₃ < HClO₄",
        b: "HClO₄ < HClO₂ < HClO < HClO₃",
        c: "HClO₃ < HClO₄ < HClO₂ < HClO",
        d: "HClO < HClO₂ < HClO₃ < HClO₄",
        correct: "",
        answered: null
    },
    {
        question: "When copper is heated with conc HNO3 it produces",
        a: "Cu(NO₃)₂ , NO and NO₂",
        b: "Cu(NO₃)₂ and N₂O",
        c: "Cu(NO₃)₂ and NO₂",
        d: "Cu(NO₃)₂ and NO",
        correct: "",
        answered: null
    }
    
    
];

let index = 0;
const total = quizData.length;

const questionBox = document.getElementById("questionBox");
const questionNav = document.getElementById("questionNav");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const submitButton = document.getElementById("submitButton");
const homeButton = document.getElementById("homeButton");

// Function to initialize the quiz
const initializeQuiz = () => {
    loadQuestion(index);
    populateQuestionNav();
    setupEventListeners();
};

// Function to load a question
const loadQuestion = (index) => {
    if (index < 0 || index >= total) {
        return;
    }
    const data = quizData[index];
    questionBox.innerHTML = `
        <div>
            <h2>${index + 1}. ${renderOption(data.question)}</h2>
            <div class="options">
                <label><input type="radio" name="answer${index}" value="a">${renderOption(data.a)}</label><br>
                <label><input type="radio" name="answer${index}" value="b">${renderOption(data.b)}</label><br>
                <label><input type="radio" name="answer${index}" value="c">${renderOption(data.c)}</label><br>
                <label><input type="radio" name="answer${index}" value="d">${renderOption(data.d)}</label><br>
            </div>
        </div>
    `;

    // Check if there's a previously saved answer and mark it as checked
    if (data.answered !== null) {
        const selectedInput = questionBox.querySelector(`input[value="${data.answered}"]`);
        if (selectedInput) {
            selectedInput.checked = true;
        }
    }

    updateNavigation();
};

// Function to render options (handles images)
const renderOption = (option) => {
    if (option.endsWith('.png') || option.endsWith('.jpg') || option.endsWith('.jpeg') || option.endsWith('.gif')) {
        return `<img src="${option}" alt="Option Image" class="option-image">`;
    } else {
        return option; // Display text if not an image path
    }
};

// Function to populate question navigation bar
const populateQuestionNav = () => {
    questionNav.innerHTML = '';
    quizData.forEach((_, i) => {
        const li = document.createElement('li');
        li.innerText = `${i + 1}`;
        li.onclick = () => jumpToQuestion(i);
        if (quizData[i].answered !== null) {
            li.classList.add('answered');
        }
        questionNav.appendChild(li);
    });
};

// Function to update navigation buttons visibility and state
const updateNavigation = () => {
    prevButton.disabled = index === 0;
    nextButton.disabled = index === total - 1;
    submitButton.style.display = index === total - 1 ? "block" : "none";
};

// Function to navigate to a specific question
const jumpToQuestion = (i) => {
    saveAnswer(); // Save answer before jumping to another question
    index = i;
    loadQuestion(index);
};

// Function to move to the next question
const nextQuestion = () => {
    saveAnswer(); // Save answer before moving to next question
    index++;
    if (index < total) {
        loadQuestion(index);
    } else {
        updateNavigation();
    }
};

// Function to move to the previous question
const previousQuestion = () => {
    saveAnswer(); // Save answer before moving to previous question
    if (index > 0) {
        index--;
        loadQuestion(index);
    }
};

// Function to save the current answer
const saveAnswer = () => {
    const selectedInput = getSelectedInput();
    if (selectedInput) {
        quizData[index].answered = selectedInput.value;
        markQuestionAsAnswered(index);
    }
};

// Function to get selected input
const getSelectedInput = () => {
    const inputs = document.getElementsByName(`answer${index}`);
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i];
        }
    }
    return null;
};

// Function to mark question as answered in the navigation
const markQuestionAsAnswered = (index) => {
    const li = questionNav.children[index];
    if (li) {
        li.classList.add('answered');
    }
};

// Function to setup event listeners for radio button changes
const setupEventListeners = () => {
    questionBox.addEventListener("change", () => {
        saveAnswer(); // Save answer whenever a radio button changes
    });
};

// Event listener for submit button
submitButton.addEventListener("click", () => {
    submitQuiz();
});

// Function to submit the quiz
const submitQuiz = () => {
    saveAnswer(); // Save answer before submitting the quiz
    
    let correct = 0;
    quizData.forEach(question => {
        if (question.answered === question.correct) {
            correct++;
        }
    });
    displayResults(correct);
};

// Function to display results
const displayResults = (correct) => {
    questionBox.innerHTML = `
        <h2>RESULT</h2>
        <p>Total correct answers: ${correct} out of ${total}</p>
        <p>${getResultMessage(correct)}</p>
    `;
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "none";
    homeButton.style.display = "block";
    questionNav.style.display = "none";
};

// Function to get result message based on score
const getResultMessage = (correct) => {
    const score = (correct / total) * 100;
    if (score >= 75) {
        return "Congratulations! Excellent job!";
    } else if (score >= 50) {
        return "Good job! You did well.";
    } else if (score >= 25) {
        return "You can do better. Keep practicing.";
    } else {
        return "Read more to improve your knowledge.";
    }
};

// Initialize the quiz
initializeQuiz();

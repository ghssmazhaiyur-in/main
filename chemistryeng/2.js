// quiz.js

const quizData = [
    {
        question: "An aqueous solution of borax is",
        a: "neutral",
        b: "acidic",
        c: "basic",
        d: "amphoteric",
        correct: "c",
        answered: null
    },
    {
        question: "Boric acid is an acid because its molecule",
        a: "contains replaceable H+ ion",
        b: "gives up a proton",
        c: "combines with proton to form water molecule",
        d: "accepts OH- from water ,releasing proton.",
        correct: "d",
        answered: null
    },
    {
        question: "Which among the following is not a borane?",
        a: "B₂H₆",
        b: "B₃H₆",
        c: "B₄H₁₀",
        d: "none of these",
        correct: "b",
        answered: null
    },
    {
        question: "Which of the following metals has the largest abundance in the earth’s crust?",
        a: "Aluminium",
        b: "Calcium",
        c: "Magnesium",
        d: "Sodium",
        correct: "a",
        answered: null
    },
    {
        question: "In diborane, the number of electrons that accounts for banana bonds is",
        a: "six",
        b: "two",
        c: "four",
        d: "three",
        correct: "c",
        answered: null
    },
    {
        question: "The element that does not show catenation among the following p-block elements is",
        a: "Carbon",
        b: "silicon",
        c: "Lead",
        d: "germanium",
        correct: "c",
        answered: null
    },
    {
        question: "Carbon atoms in fullerene with formula C₆₀ have",
        a: "sp³ hybridised",
        b: "sp hybridised",
        c: "sp² hybridised",
        d: "partially sp² and partially sp³ hybridised",
        correct: "c",
        answered: null
    },
    {
        question: "Oxidation state of carbon in its hydrides",
        a: "+4",
        b: "-4",
        c: "+3",
        d: "+2",
        correct: "a",
        answered: null
    },
    {
        question: "The basic structural unit of silicates is",
        a: "(SiO₃)²⁻",
        b: "(SiO₄)²⁻",
        c: "(SiO)⁻",
        d: "(SiO₄)⁴⁻",
        correct: "d",
        answered: null
    },
    {
        question: "The repeating unit in silicone is",
        a: "SiO₂",
        b: "l1c1.png",
        c: "l2o2.png",
        d: "l2o3.png",
        correct: "b",
        answered: null
    },
    {
        question: "Which of these is not a monomer for a high molecular mass silicone polymer?",
        a: "Me₃SiCl",
        b: "PhSiCl₃",
        c: "MeSiCl₃",
        d: "Me₂SiCl₂",
        correct: "a",
        answered: null
    },
    {
        question: "Which of the following is not sp² hybridised?",
        a: "Graphite",
        b: "graphene",
        c: "Fullerene",
        d: "dry ice",
        correct: "d",
        answered: null
    },
    {
        question: "The geometry at which carbon atom in diamond are bonded to each other is",
        a: "Tetrahedral",
        b: "hexagonal",
        c: "Octahedral",
        d: "none of these",
        correct: "a",
        answered: null
    },
    {
        question: "Which of the following statements is not correct?",
        a: "Beryl is a cyclic silicate",
        b: "Mg₂SiO₄ is an orthosilicate",
        c: "SiO₄⁴⁻ is the basic structural unit of silicates",
        d: "Feldspar is not aluminosilicate",
        correct: "4",
        answered: null
    },
    {
        question: "l2q1.png",
        a: "2 1 4 3",
        b: "1 2 4 3",
        c: "1 2 4 3",
        d: "None of these",
        correct: "a",
        answered: null
    },
    {
        question: "Duralumin is an alloy of",
        a: "Cu,Mn",
        b: "Cu,Al,Mg",
        c: "Al,Mn",
        d: "Al,Cu,Mn,Mg",
        correct: "d",
        answered: null
    },
    {
        question: "The compound that is used in nuclear reactors as protective shields and control rods is",
        a: "Metal borides",
        b: "metal oxides",
        c: "Metal carbonates",
        d: "metal carbide",
        correct: "a",
        answered: null
    },
    {
        question: "The stability of +1 oxidation state increases in the sequence",
        a: "Al < Ga < In < Tl",
        b: "Tl < In < Ga < Al",
        c: "In < Tl < Ga < Al",
        d: "Ga< In < Al < Tl",
        correct: "a",
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

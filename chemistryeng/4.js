// quiz.js

const quizData = [
    {
        question: "Sc( Z=21) is a transition element but Zinc (z=30) is not because",
        a: "both Sc³⁺ and Zn²⁺ ions are colourless and form white compounds.",
        b: "in case of Sc, 3d orbital are partially filled but in Zn these are completely filled",
        c: "last electron as assumed to be added to 4s level in case of zinc",
        d: "both Sc and Zn do not exhibit variable oxidation states",
        correct: "",
        answered: null
    },
    {
      question: "Which of the following d block element has half filled penultimate d sub shell as well as half filled valence sub shell?",
      a: "Cr",
      b: "Pd",
      c: "Pt",
      d: "none of these",
      correct: "",
      answered: null
    },
    {
        question: "Among the transition metals of 3d series, the one that has highest negative (M²⁺/M) standard electrode potential is",
        a: "Ti",
        b: "Cu",
        c: "Mn",
        d: "Zn",
        correct: "",
        answered: null
    },
    {
        question: "Which one of the following ions has the same number of unpaired electrons as present in V3+?",
        a: "Ti³⁺",
        b: "Fe³⁺",
        c: "Ni²⁺",
        d: "Cr³⁺",
        correct: "",
        answered: null
    },
    {
        question: "The magnetic moment of Mn²⁺ ion is",
        a: "5.92BM",
        b: "2.80BM",
        c: "8.95BM",
        d: "3.90BM",
        correct: "",
        answered: null
    },
    {
        question: "The catalytic behaviour of transition metals and their compounds is ascribed mainly due to",
        a: "their magnetic behaviour",
        b: "their unfilled d orbitals",
        c: "their ability to adopt variable oxidation states",
        d: "their chemical reactivity",
        correct: "",
        answered: null
    },
    {
        question: "The correct order of increasing oxidizing power in the series",
        a: "VO₂⁺ < Cr₂O₇²⁻ < MnO₄⁻",
        b: "Cr₂O₇²⁻ < VO₂⁺ < MnO₄⁻",
        c: "Cr₂O₇²⁻ < MnO₄⁻ < VOv₂⁺",
        d: "MnO₄⁻ < Cr₂O₇²⁻ < VO₂⁺",
        correct: "",
        answered: null
    },
    {
        question: "In acid medium, potassium permanganate oxidizes oxalic acid to",
        a: "oxalate",
        b: "Carbon dioxide",
        c: "acetate",
        d: "acetic acid",
        correct: "",
        answered: null
    },
    {
        question: "Which of the following statements is not true?",
        a: "on passing H₂S, through acidified K₂Cr₂O₇ solution, a milky colour is observed.",
        b: "Na₂Cr2O₇ is preferred over K₂Cr₂O₇ in volumetric analysis",
        c: "K₂Cr₂O₇ solution in acidic medium is orange in colour",
        d: "K₂Cr₂O₇ solution becomes yellow on increasing the PH beyond 7",
        correct: "",
        answered: null
    },
    {
        question: "Permanganate ion changes to ________ in acidic medium",
        a: "MnO₄²⁻",
        b: "Mn²⁺",
        c: "Mn³⁺",
        d: "MnO₂",
        correct: "",
        answered: null
    },
    {
        question: "How many moles of I2 are liberated when 1 mole of potassium dichromate react with potassium iodide?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "",
        answered: null
    },
    {
        question: "The number of moles of acidified KMnO4 required to oxidize 1 mole of ferrous oxalate(FeC2O4) is",
        a: "5",
        b: "3",
        c: "0.6",
        d: "1.5",
        correct: "",
        answered: null
    },
    {
        question: "Which one of the following statements related to lanthanons is incorrect?",
        a: "Europium shows +2 oxidation state.",
        b: "The basicity decreases as the ionic radius decreases from Pr to Lu.",
        c: "All the lanthanons are much more reactive than aluminium.",
        d: "Ce4+ solutions are widely used as oxidising agents in volumetric analysis.",
        correct: "",
        answered: null
    },
    {
        question: "Which of the following lanthanoid ion is diamagnetic?",
        a: "Eu²⁺",
        b: "Yb²⁺",
        c: "Ce²⁺",
        d: "Sm²⁺",
        correct: "",
        answered: null
    },
    {
        question: "Which of the following oxidation state is most common among the lanthanoids?",
        a: "+4",
        b: "+2",
        c: "+5",
        d: "+3",
        correct: "",
        answered: null
    },
    {
        question: "Assertion : Ce4+ is used as an oxidizing agent in volumetric analysis. Reason: Ce4+ has the tendency of attaining +3 oxidation state.",
        a: "Both assertion and reason are true and reason is the correct explanation of assertion.",
        b: "Both assertion and reason are true but reason is not the correct explanation of assertion.",
        c: "Assertion is true but reason is false.",
        d: "Both assertion and reason are false.",
        correct: "",
        answered: null
    },
    {
        question: "The most common oxidation state of actinoids is",
        a: "+2",
        b: "+3",
        c: "+4",
        d: "+6",
        correct: "",
        answered: null
    },
    {
        question: "The actinoid elements which show the highest oxidation state of +7 are",
        a: "Np, Pu ,Am",
        b: "U, Fm, Th",
        c: "U, Th, Md",
        d: "Es, No, Lr",
        correct: "",
        answered: null
    },
    {
        question: "Which one of the following is not correct?",
        a: "La(OH)₃ is less basic than Lu(OH)₃",
        b: "In lanthanoid series ionic radius of Ln₃+ ions decreases",
        c: "La is actually an element of transition metal series rather than lanthanoid series",
        d: "Atomic radii of Zr and Hf are same because of lanthanoid contraction",
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

// quiz.js

const quizData = [
    {
        question: "Bauxite has the composition",
        a: "Al₂O₃",
        b: "Al₂O₃.nH₂O",
        c: "Fe₂O₃.2H₂O",
        d: "None of these",
        correct: "a",
        answered: null
    },
    {
        question: "Roasting of sulphide ore gives the gas (A). (A) is a colourless gas. Aqueous solution of (A is acidic. The gas (A) is",
        a: "CO₂",
        b: "SO₃",
        c: "SO₂",
        d: "H₂S",
        correct: "c",
        answered: null
    },
    {
        question: "Which one of the following reaction represents calcinations?",
        a: "2Zn+O₂→2ZnO",
        b: "2ZnS + 3O₂→2ZnO + 2SO₂",
        c: "MgCO₃→MgO + CO₂",
        d: "Both (a) and (c)",
        correct: "c",
        answered: null
    },
    {
        question: "The metal oxide which cannot be reduced to metal by carbon is",
        a: "PbO",
        b: "Al₂O₃",
        c: "ZnO",
        d: "FeO",
        correct: "b",
        answered: null
    },
    {
        question: "Which of the metal is extracted by Hall-Heroult process?",
        a: "Al",
        b: "Ni",
        c: "Cu",
        d: "Zn",
        correct: "a",
        answered: null
    },
    {
        question: "Which of the following statements, about the advantage of roasting of sulphide ore before reduction is not true?",
        a: "Δ G f 0 of sulphide is greater than those for CS2 and H2S",
        b: "Δ Gr 0 is negative for roasting of sulphide ore to oxide",
        c: "Roasting of the sulphide to its oxide is thermodynamically feasible.",
        d: "Carbon and hydrogen are suitable reducing agents for metal sulphides.",
        correct: "d",
        answered: null
    },
    {
        question: "l1o1.png",
        a: "(a)(i)(ii)(iii)(iv)",
        b: "(b)(iii)(iv)(v)(i)",
        c: "(c)(iv)(ii)(iii)(i)",
        d: "(d)(ii)(iii)(i)(v)",
        correct: "c",
        answered: null
    },
    {
        question: "Wolframite ore is separated from tinstone by the process of",
        a: "Smelting",
        b: "Calcination",
        c: "Roasting",
        d: "Electromagnetic separation",
        correct: "d",
        answered: null
    },
    {
        question: "Which one of the following is not feasible",
        a: "Zn(s) + Cu²⁺ → Cu(s) + Zn²⁺(aq)",
        b: "Cu(s) + Zn²⁺ → Zn(s) + Cu²⁺(aq)",
        c: "Cu(s) + 2Ag⁺ → 2Ag(s) + Cu²⁺(aq)",
        d: "Fe(s) + Cu²⁺ → Cu(s) + Fe²⁺(aq)",
        correct: "b",
        answered: null
    },
    {
        question: "Electrochemical process is used to extract",
        a: "Iron",
        b: "Lead",
        c: "Sodium",
        d: "silver",
        correct: "c",
        answered: null
    },
    {
        question: "Flux is a substance which is used to convert",
        a: "Mineral into silicate",
        b: "Infusible impurities to soluble impurities",
        c: "Soluble impurities to infusible impurities",
        d: "All of these",
        correct: "b",
        answered: null
    },
    {
        question: "Which one of the following ores is best concentrated by froth – floatation method?",
        a: "Magnetite",
        b: "Haematite",
        c: "Galena",
        d: "Cassiterite",
        correct: "c",
        answered: null
    },
    {
        question: "In the extraction of aluminium from alumina by electrolysis, cryolite is added to",
        a: "Lower the melting point of alumina",
        b: "Remove impurities from alumina",
        c: "Decrease the electrical conductivity",
        d: "Increase the rate of reduction",
        correct: "a",
        answered: null
    },
    {
        question: "Zinc is obtained from ZnO by",
        a: "Carbon reduction",
        b: "Reduction using silver",
        c: "Electrochemical process",
        d: "Acid leaching",
        correct: "a",
        answered: null
    },
    {
        question: "Extraction of gold and silver involves leaching with cyanide ion. silver is later recovered by",
        a: "Distillation",
        b: "Zone refining",
        c: "Displacement with zinc",
        d: "liquation",
        correct: "c",
        answered: null
    },
    {
        question: "Considering Ellingham diagram, which of the following metals can be used to reduce alumina?",
        a: "Fe",
        b: "Cu",
        c: "Mg",
        d: "Zn",
        correct: "c",
        answered: null
    },
    {
        question: "The following set of reactions are used in refining Zirconium",
        a: "Liquation",
        b: "Van Arkel process",
        c: "Zone refining",
        d: "Mond’s process",
        correct: "b",
        answered: null
    },
    {
        question: "Which of the following is used for concentrating ore in metallurgy?",
        a: "Leaching",
        b: "Roasting",
        c: "Froth floatation",
        d: "Both (a) and (c)",
        correct: "d",
        answered: null
    },
    {
        question: "The incorrect statement among the following is",
        a: "Nickel is refined by Mond’s process",
        b: "Titanium is refined by Van Arkel’s process",
        c: "Zinc blende is concentrated by froth floatation",
        d: "In the metallurgy of gold, the metal is leached with dilute sodium chloride solution",
        correct: "d",
        answered: null
    },
    {
        question: "In the electrolytic refining of copper, which one of the following is used as anode?",
        a: "Pure copper",
        b: "Impure copper",
        c: "Carbon rod",
        d: "Platinum electrode",
        correct: "b",
        answered: null
    },
    {
        question: "Which of the following plot gives Ellingham diagram",
        a: "Δ S Vs T",
        b: "Δ G⁰ Vs T",
        c: "Δ G⁰ Vs T/2",
        d: "Δ G Vs T²",
        correct: "b",
        answered: null
    },
    {
        question: "In the Ellingham diagram, for the formation of carbon monoxide",
        a: "(∆S⁰/∆T)is negative",
        b: "(∆G⁰/∆T)is positive",
        c: "(∆G⁰/∆T)is negative",
        d: "initially (∆T/∆G⁰) is positive, after 7000C ,(∆G⁰/∆T) is negative",
        correct: "c",
        answered: null
    },
    {
        question: "Which of the following reduction is not thermodynamically feasible?",
        a: "Cr₂O₃ + 2Al → Al₂O₃ + 2Cr",
        b: "Al₂O₃ + 2Cr → Cr₂O₃ + 2Al",
        c: "3TiO₂+ 4Al → 2 Al₂O₃ + 3Ti",
        d: "none of these",
        correct: "b",
        answered: null
    },
    {
        question: "Which of the following is not true with respect to Ellingham diagram?",
        a: "Free energy changes follow a straight line. Deviation occurs when there is a phase change.",
        b: "The graph for the formation of CO2 is a straight line almost parallel to free energy axis.",
        c: "Negative slope of CO shows that it becomes more stable with increase in temperature.",
        d: "Positive slope of metal oxides shows that their stabilities decrease with increase in temperature.",
        correct: "b",
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

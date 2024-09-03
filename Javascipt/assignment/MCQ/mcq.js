const MCQ = [{
    question: " Which country is known for its capital food, sushi?",
    options: ["China", "japan", "Thailand", "Korea"],
    correctOption: "japan",
},
    {
        question: " The French dish “croissant” is best described as:",
        options: ["A type of pasta", "A type of bread roll", "A type of pastry", "A type of cheese"],
        correctOption: "A type of cheese",
    },
    // {
    //     question: " Which country is famous for the dish “paella”?",
    //     options: ["Italy", "Spain", "Greece", "Portugal"],
    //     correctOption: "Spain",
    // },
    
    // {
    //     question: " “Tacos” are a traditional food from which country?",
    //     options: ["Mexico", "Argentina", "Peru", "Colombia"],
    //     correctOption: "Mexico",
    // },
    
    // {
    //     question: "In which country would you find the dish “moussaka”?",
    //     options: ["Turkey", "Egypt", "Greece", "Lebanon"],
    //     correctOption: "Greece",
    // },
    
    // {
    //     question: "The dish “poutine,” which consists of fries topped with cheese curds and gravy, originates from: ",
    //     options: ["Belgium", "Canada", "France", "Switzerland"],
    //     correctOption: "Canada",
    // },
    
    // {
    //     question: "Which of the following countries is known for “dim sum”?",
    //     options: ["Thailand", "China", "Japan", "Vietnam"],
    //     correctOption: "China",
    // },
    
    // {
    //     question: "“Goulash” is a traditional dish from which country?",
    //     options: ["Austria", "Hungary", "Poland", "Czech Republic"],
    //     correctOption: "Hungary",
    // },
    
]


// display the question

function showQuestion(MCQ) {
//    let i = 0;
    
    document.getElementById('question').textContent = MCQ[0].question;
    const listOfOptions = document.getElementById("options");
    listOfOptions.innerHTML = "";
    MCQ[0].options.forEach((option,index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="option" value="${option}" id="option${index}"><label for="option${index}">${option}</label>`;
        listOfOptions.appendChild(li);
    });
}
function submit() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const resultDiv = document.getElementById('result');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer == MCQ[0].correctOption)
        {
            resultDiv.textContent = "Correct! You scored 1 mark.";
            // showQuestion(i++);
        }
        else {
            
            resultDiv.textContent = `Incorrect. The correct answer is ${MCQ[0].correctOption}. You scored 0 marks.`;
        }

    } else
    {
        
        resultDiv.textContent = "Please select an answer.";
        resultDiv.style.display = 'block';
    }

}
window.onload = showQuestion();
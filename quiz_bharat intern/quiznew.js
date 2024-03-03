const questions = [
    {
      question: "Which is the national animal of India?",
      options: ["Tiger", "Lion", "Elephant", "Horse"],
      answer: "Tiger"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Earth"],
      answer: "Mars"
    },
    {
      question: "Which is the largest dessert in the world ",
      options: ["Thar", "Sahara", "Gobi", "Antarctica"],
      answer: "Sahara"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "H2SO4"],
      answer: "H2O"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const resultElement = document.getElementById("result");
  
  function showQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";
    currentQ.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const currentQ = questions[currentQuestion];
    if (selectedAnswer === currentQ.answer) {
      score++;
      resultElement.textContent = "Correct!";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = `Wrong! The correct answer is ${currentQ.answer}.`;
      resultElement.style.color = "red";
    }
    optionsElement.querySelectorAll(".option").forEach(button => {
      button.removeEventListener("click", checkAnswer);
    });
    nextBtn.style.display = "block";
  }
  
  function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
      nextBtn.style.display = "none";
      resultElement.textContent = "";
    } else {
      
      if (score === questions.length) {
        resultElement.textContent = "Congratulations! You got full score!";
      } else {
        resultElement.textContent = `Quiz completed. Your score is ${score} out of ${questions.length}.`;
      }
      nextBtn.style.display = "none";
      optionsElement.innerHTML = "";
    }
  }
  
  nextBtn.addEventListener("click", showNextQuestion);
  
  showQuestion();
  
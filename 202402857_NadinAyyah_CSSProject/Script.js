document.addEventListener("DOMContentLoaded", function () {
    // Product image hover effect
    const products = document.querySelectorAll(".product-img");
    
    products.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute("data-hover");
    
        img.addEventListener("mouseover", function () {
            img.src = hoverSrc;
        });
    
        img.addEventListener("mouseout", function () {
            img.src = originalSrc;
        });
    });

    // Form validation
    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
    
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        let errorMessage = "";
    
        if (name === "") {
            errorMessage += "Name is required.<br>";
        }
    
        if (email === "") {
            errorMessage += "Email is required.<br>";
        } else if (!email.includes("@") || !email.includes(".")) {
            errorMessage += "Please enter a valid email address.<br>";
        }
    
        if (errorMessage !== "") {
            document.getElementById("errorMessage").innerHTML = errorMessage;
        } else {
            alert("Form submitted successfully!");
        }
    });
});

// Correct answer checking
function checkAnswer(selectedAnswer, questionId) {
    const correctAnswers = {
        q1: "mindset",
        q2: "sunscreen",
        q3: "trimming"
    };

    const resultDiv = document.getElementById(`quizResult-${questionId}`);

    if (selectedAnswer === correctAnswers[questionId]) {
        resultDiv.innerHTML = "Correct!";
        resultDiv.style.color = "green"; // Set the text color to green for correct answers
    } else {
        resultDiv.innerHTML = "Incorrect. Try again!";
        resultDiv.style.color = "red"; // Set the text color to red for incorrect answers
    }
}
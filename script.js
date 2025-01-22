window.onload = function() {
    // Show the first question
    document.getElementById("question1").style.display = "block";

    // Handling "Yes" for first question
    document.getElementById("yes1").addEventListener("click", function() {
        document.getElementById("question1").style.display = "none";
        document.getElementById("question2").style.display = "block";
    });

    // Handling "No" for first question
    document.getElementById("no1").addEventListener("click", function() {
        showTryAgain();
    });

    // Handling "Yes" for second question
    document.getElementById("yes2").addEventListener("click", function() {
        document.getElementById("question2").style.display = "none";
        document.getElementById("messageBox").style.display = "block";
    });

    // Handling "No" for second question
    document.getElementById("no2").addEventListener("click", function() {
        showTryAgain();
    });

    // Handling the Try Again button
    document.getElementById("tryAgainButton").addEventListener("click", function() {
        document.getElementById("tryAgain").style.display = "none";
        document.getElementById("question1").style.display = "block";
    });

    // Handling open letter button
    document.getElementById("openLetterButton").addEventListener("click", function() {
        document.getElementById("messageBox").style.display = "none";
        document.getElementById("letterPage").style.display = "block";
    });

    // Close the letter
    document.getElementById("closeLetterButton").addEventListener("click", function() {
        document.getElementById("letterPage").style.display = "none";
    });
};

function showTryAgain() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("tryAgain").style.display = "block";
}

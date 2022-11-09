const acc = document.getElementsByClassName("Question");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "open" class,
    to highlight the button that controls the Answer */
    this.classList.toggle("open");
    
    /* Toggle between hiding and showing the active panel */
    const Answer = this.nextElementSibling;
    if (Answer.style.display === "block") {
        Answer.style.display = "none";
    } else {
        Answer.style.display = "block";

    }
    });
    
}





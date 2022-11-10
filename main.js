const acc = document.getElementsByClassName("Question");
const answers = document.getElementsByClassName("Answer");

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
        /* close all panel */
        for (let i = 0; i < answers.length; i++) {
            answers[i].style.display = 'none';
        }
        Answer.style.display = "block";
        acc.style.borderBottom = '1px solid white';

    }
    
    });
}



const acc = document.getElementsByClassName("Question");
const arrow = document.querySelector(".arrow");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active panel */
    const Answer = this.nextElementSibling;
    if (Answer.style.display === "block") {
        Answer.style.display = "none";
    } else {
        Answer.style.display = "block";

    }
    arrow.classList.toggle("rotate");
    });
    
}





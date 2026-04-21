// Function to handle the scroll reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Triggers when 150px of the element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Check on scroll
window.addEventListener("scroll", reveal);

// Run once on load to show elements already in view
window.onload = reveal;
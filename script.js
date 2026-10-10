

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});



navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});



const findPathBtn = document.getElementById("findPathBtn");
const interestSelect = document.getElementById("interestSelect");
const finderResult = document.getElementById("finderResult");



const pathSuggestions = {
    web: " Web Development: Start with HTML, CSS, and JavaScript.",

    python: " Python Programming: Start with variables, conditions, and simple problems.",

    ai: " Artificial Intelligence: Begin with Python and basic AI concepts.",

    data: " Data Science: Start with data analysis and visualisation.",

    java: " Java Programming: Learn variables, conditions, and object-oriented basics.",

    cyber: " Cybersecurity: Begin with networking and online safety basics."
};


findPathBtn.addEventListener("click", function () {
    const selectedInterest = interestSelect.value;

    finderResult.textContent = pathSuggestions[selectedInterest];
});

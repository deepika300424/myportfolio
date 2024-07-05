/* ========================= Typing Animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* ========================== Aside Navigation ============================= */
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(event) {
        event.preventDefault();

        // Remove 'active' class from all navigation links
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }

        // Add 'active' class to the clicked navigation link
        this.classList.add("active");

        // Show the corresponding section
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSections[num].classList.add("back-section");
}

function showSection(element) {
    // Remove 'active' class from all sections
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.remove("active");
    }

    // Get the target section ID from the clicked navigation link
    const target = element.getAttribute("href").split("#")[1];

    // Add 'active' class to the target section
    document.getElementById(target).classList.add("active");
}

function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];
    
    for (let i = 0; i < totalNavList; i++) {
        const navLink = navList[i].querySelector("a");
        if (navLink.getAttribute("href").split("#")[1] === target) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(event) {
    event.preventDefault();
    
    const sectionIndex = this.getAttribute("data-section-index");
    
    // Show the clicked section
    showSection(this);
    
    // Update navigation
    updateNav(this);
    
    // Remove and add back-section class
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.toggle("open");
    }
}

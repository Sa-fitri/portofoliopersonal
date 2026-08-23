// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ================================
// SCROLL ANIMATION
// ================================

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-text, .about-info, .skill-card, .timeline-item, .experience-card, .project-card, .contact-container"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ================================
// CURRENT YEAR
// ================================

const footerYear = document.querySelector("footer p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Safitri`;

}

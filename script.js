// ==========================================
// TYPING ANIMATION
// ==========================================

new Typed("#typing", {
    strings: [
        "AI Engineer",
        "Data Science Student",
        "Machine Learning Enthusiast",
        "Python Developer",
        "Frontend Web Developer"
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1500,
    loop: true
});


// ==========================================
// PARTICLES BACKGROUND
// ==========================================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#00d4ff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#00d4ff",
            opacity: 0.25,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "bounce"
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {
                distance: 160,
                line_linked: {
                    opacity: 0.7
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});


// ==========================================
// HEADER SHADOW
// ==========================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "rgba(8,10,25,.92)";
        header.style.boxShadow = "0 0 20px rgba(0,212,255,.25)";

    } else {

        header.style.background = "rgba(8,10,25,.55)";
        header.style.boxShadow = "none";

    }

});


// ==========================================
// ACTIVE NAVBAR
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements = document.querySelectorAll(
    ".skill-card,.project-card,.card,.box,.contact-box div"
);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);
reveal();


// ==========================================
// IMAGE PARALLAX
// ==========================================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 35;
    const y = (window.innerHeight / 2 - e.pageY) / 35;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave", () => {

    heroImage.style.transform = "rotateY(0deg) rotateX(0deg)";

});


// ==========================================
// PRELOADER REMOVE
// ==========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(
"%cDesigned & Developed by Sarumathi A",
"color:#00d4ff;font-size:18px;font-weight:bold;"
);
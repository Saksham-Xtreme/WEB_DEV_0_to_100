// ===== Typing Effect =====
const roles = [
"Aspiring Web Developer",
"DSA Enthusiast",
"B.Tech CSE Student",
"Future Software Engineer"
];

let index = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function type() {
if (charIndex < roles[index].length) {
    typingEl.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
} else {
    setTimeout(erase, 1500);
}
}

function erase() {
if (charIndex > 0) {
    typingEl.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
} else {
    index = (index + 1) % roles.length;
    setTimeout(type, 400);
}
}

type();

// ===== Fade-in on Scroll =====
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add("show");
    }
});
}, { threshold: 0.15 });

document.querySelectorAll("section").forEach(sec => {
sec.style.opacity = "0";
sec.style.transform = "translateY(40px)";
sec.style.transition = "0.8s ease";
observer.observe(sec);
});

// ===== Apply animation =====
document.addEventListener("scroll", () => {
document.querySelectorAll(".show").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
});
});

// ===== Form feedback =====
const form = document.querySelector("form");
if (form) {
form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks for reaching out! 🚀");
    form.reset();
});
}

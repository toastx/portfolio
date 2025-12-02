// Projects Data
const projects = [
    {
        name: "SolanaPay Integration",
        description: "Decentralized payment processor for Solana ecosystem. Handles 1000+ tx/sec with sub-second finality.",
        stack: ["Rust", "Solana", "TypeScript"],
        liveUrl: "https://example.com",
        sourceUrl: "https://github.com/toastx/solanapay"
    },
    {
        name: "SPL Token Vault",
        description: "Secure custodial solution for SPL tokens. Implements multi-sig security and emergency pause mechanisms.",
        stack: ["Rust", "Anchor", "Security"],
        liveUrl: "https://example.com",
        sourceUrl: "https://github.com/toastx/vault"
    },
    {
        name: "Perpetual Futures DEX",
        description: "High-frequency decentralized derivatives exchange. Enables leverage trading with oracle-based pricing.",
        stack: ["Rust", "Solana", "DeFi"],
        liveUrl: "https://example.com",
        sourceUrl: "https://github.com/toastx/perpetuals"
    },
    {
        name: "Crosschain Bridge",
        description: "Atomic swap protocol bridging Solana and Ethereum. Secured by threshold cryptography.",
        stack: ["Rust", "Go", "Blockchain"],
        liveUrl: "https://example.com",
        sourceUrl: "https://github.com/toastx/bridge"
    },
    {
        name: "NFT Launchpad",
        description: "Metaplex-based NFT creation and minting platform. Supports candy machine v2 with dynamic metadata.",
        stack: ["TypeScript", "React", "Metaplex"],
        liveUrl: "https://example.com",
        sourceUrl: "https://github.com/toastx/launchpad"
    }
];

// Skills Data
const skills = {
    "Languages": [
        { name: "Rust", level: "CORE" },
        { name: "TypeScript", level: "CORE" },
        { name: "Python", level: "CONFIDENT" },
        { name: "Go", level: "CONFIDENT" }
    ],
    "Frameworks & Libraries": [
        { name: "Anchor", level: "CORE" },
        { name: "React", level: "CORE" },
        { name: "Next.js", level: "CORE" },
        { name: "Web3.js", level: "CORE" },
        { name: "Solana CLI", level: "CORE" }
    ],
    "Tools & Platforms": [
        { name: "Git / GitHub", level: "CORE" },
        { name: "Docker", level: "CONFIDENT" },
        { name: "AWS", level: "CONFIDENT" },
        { name: "Solscan", level: "CORE" },
        { name: "Phantom", level: "CONFIDENT" }
    ]
};

// Populate Projects
function populateProjects() {
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = projects.map(proj => `
        <div class="project-card">
            <h3 class="project-name">${proj.name}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-stack">
                ${proj.stack.map(tag => `<span class="stack-tag">${tag}</span>`).join("")}
            </div>
            <div class="project-links">
                <a href="${proj.liveUrl}" target="_blank">Live</a>
                <a href="${proj.sourceUrl}" target="_blank">Source</a>
            </div>
        </div>
    `).join("");
}

// Populate Skills
function populateSkills() {
    const section = document.getElementById("skills-section");
    section.innerHTML = Object.entries(skills).map(([category, items]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-list">
                ${items.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

// Smooth Scroll
function smoothScroll(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        document.getElementById("nav").classList.remove("mobile-menu-open");
        document.getElementById("hamburger").classList.remove("open");
    }
}

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("mobile-menu-open");
});

// Nav Links Smooth Scroll
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href").substring(1);
        smoothScroll(id);
    });
});

// Form Validation & Submission
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearErrors() {
    document.querySelectorAll(".form-error").forEach(el => el.classList.remove("show"));
    formStatus.classList.remove("show");
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    if (!name) {
        document.getElementById("nameError").textContent = "Name is required";
        document.getElementById("nameError").classList.add("show");
        isValid = false;
    }

    if (!email) {
        document.getElementById("emailError").textContent = "Email is required";
        document.getElementById("emailError").classList.add("show");
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        document.getElementById("emailError").classList.add("show");
        isValid = false;
    }

    if (!message || message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters";
        document.getElementById("messageError").classList.add("show");
        isValid = false;
    }

    if (isValid) {
        formStatus.textContent = "Message sent. Looking forward to collaborating.";
        formStatus.classList.add("show");
        contactForm.reset();
        setTimeout(() => {
            formStatus.classList.remove("show");
        }, 4000);
    }
});

// Initialize
populateProjects();
populateSkills();

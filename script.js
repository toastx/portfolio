// Projects Data
const projects = [
  {
    name: "Sola AI",
    description:
      "Voice assistant to execute Solana intents like trading, staking, lending, NFT actions. Processing 20+ onchain actions with >90% success rate.",
    stack: ["Rust", "TypeScript", "Solana"],
    liveUrl: "https://beta.solaai.xyz",
    sourceUrl: "https://github.com/TheSolaAI/sola-application",
  },
  {
    name: "Nexa Toolkit",
    description:
      "Framework that allows developers to create Solana-based voice assistants by plugging in custom actions and logic.",
    stack: ["TypeScript", "Next.js", "Web3.js"],
    liveUrl: null,
    sourceUrl: "https://github.com/TheSolaAI/nexa-toolkit",
  },
  {
    name: "StarkDev",
    description:
      "Published CLI tool simplifying StarkNet development environment setup. Available on crates.io.",
    stack: ["Rust", "Starknet", "Clap"],
    liveUrl: "https://crates.io/crates/starkdev",
    sourceUrl: "https://github.com/toastx/starknet-dev-setup",
  },
  {
    name: "LinkPay",
    description:
      "Simplified blockchain payments through shareable links. One click to send or receive — no complex interfaces or key management needed.",
    stack: ["Next.js", "Python", "Stellar XLM"],
    liveUrl: null,
    sourceUrl: "https://github.com/toastx/LinkPay",
  },
  {
    name: "AptNinja",
    description:
      "Token-driven game on Aptos inspired by Fruit Ninja. Features gasless transactions and hit-based onchain event triggers.",
    stack: ["Move", "JavaScript", "Aptos"],
    liveUrl: "https://www.aptosninja.fun",
    sourceUrl: "https://github.com/jaibhedia/apt-ninja1",
  },
];

// Skills Data
const skills = {
  Languages: [
    { name: "Rust", level: "CORE" },
    { name: "TypeScript", level: "CORE" },
    { name: "Python", level: "CONFIDENT" },
    { name: "Go", level: "CONFIDENT" },
  ],
  "Frameworks & Libraries": [
    { name: "Anchor", level: "CORE" },
    { name: "React", level: "CORE" },
    { name: "Next.js", level: "CORE" },
    { name: "Web3.js", level: "CORE" },
    { name: "Solana CLI", level: "CORE" },
  ],
  "Tools & Platforms": [
    { name: "Git / GitHub", level: "CORE" },
    { name: "Docker", level: "CONFIDENT" },
    { name: "AWS", level: "CONFIDENT" },
    { name: "Solscan", level: "CORE" },
    { name: "Phantom", level: "CONFIDENT" },
  ],
};

// Populate Projects
function populateProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = projects
    .map(
      (proj) => `
        <div class="project-card">
            <h3 class="project-name">${proj.name}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-stack">
                ${proj.stack
                  .map((tag) => `<span class="stack-tag">${tag}</span>`)
                  .join("")}
            </div>
            <div class="project-links">
                ${
                  proj.liveUrl
                    ? `<a href="${proj.liveUrl}" target="_blank">Live</a>`
                    : ""
                }
                <a href="${proj.sourceUrl}" target="_blank">Source</a>
            </div>
        </div>
    `
    )
    .join("");
}

// Populate Skills
function populateSkills() {
  const section = document.getElementById("skills-section");
  section.innerHTML = Object.entries(skills)
    .map(
      ([category, items]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            <div class="skill-list">
                ${items
                  .map(
                    (skill) => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}</span>
                    </div>
                `
                  )
                  .join("")}
        </div>
    `
    )
    .join("");
}

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Smooth Scroll Function (using Lenis)
function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    lenis.scrollTo(target);
    // Close mobile menu if open
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
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    smoothScroll(id);
  });
});

// Initialize
populateProjects();
populateSkills();

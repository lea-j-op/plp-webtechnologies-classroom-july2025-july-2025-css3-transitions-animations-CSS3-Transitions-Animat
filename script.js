// JavaScript for Interactive Portfolio Showcase

// ===== GLOBAL VARIABLES (Demonstrating Scope) =====
const projectCategories = ['all', 'web', 'mobile', 'design'];
let currentFilter = 'all'; // Global variable to track current filter

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Initialize skill bars with 0 width
    initializeSkillBars();
    
    // Set up scroll event listener for header
    window.addEventListener('scroll', handleHeaderScroll);
});

// ===== FUNCTION DECLARATIONS =====

/**
 * Smooth scroll to section
 * @param {string} sectionId - The ID of the section to scroll to
 * Demonstrates: Parameters, DOM manipulation
 */
function smoothScroll(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: 'smooth'
        });
    }
}

/**
 * Animate CTA button with multiple effects
 * Demonstrates: Function scope, DOM manipulation, triggering CSS animations
 */
function animateCTAButton() {
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.classList.add('animate');
        setTimeout(() => {
            ctaButton.classList.remove('animate');
        }, 2000);
    }
}

function toggleAnswer(faqBox) {
    const answer = faqBox.querySelector('.faq-answer');
    const svg = faqBox.querySelector('svg');
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        svg.style.transform = "rotate(0deg)";
    } else {
        answer.style.display = "block";
        svg.style.transform = "rotate(45deg)";
    }
}
// FAQ Section JavaScript
document.querySelectorAll('.faqbox').forEach(faqbox => {
    faqbox.addEventListener('click', () => {
        faqbox.classList.toggle('active');
    });
});

// Footer JavaScript
function toggleFooterAnswer(footerItem) {
    const answer = footerItem.querySelector('.footer-answer');
    
    // Toggle display of the answer
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        // Hide other answers
        document.querySelectorAll('.footer-answer').forEach(el => {
            el.style.display = "none";
        });
        answer.style.display = "block";
    }
}

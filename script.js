/**
 * Shared JavaScript for Birthday Website
 * FIXED: Removed corrupted characters in heartShapes
 */

function navigateTo(page) {
    window.location.href = page;
}

function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    
    // KOREKSI: Karakter sebelumnya rusak (mojibake). 
    // Saya ganti dengan emoji hati yang valid.
    const heartShapes = ['💙', '✨', '🎂', '🎀', '💌'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartShapes[Math.floor(Math.random() * heartShapes.length)];
        
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        container.appendChild(heart);
    }
}

function shakeButton(btn) {
    btn.classList.add('shake');
    setTimeout(() => {
        btn.classList.remove('shake');
    }, 300);
}

function initPage() {
    createFloatingHearts();
    window.scrollTo({ top: 0, behavior: 'instant' });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}
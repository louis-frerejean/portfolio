document.addEventListener('DOMContentLoaded', () => {

    // 1. EFFET DE LUEUR SUR LES CARTES
    const cards = document.querySelectorAll('.bento-card, .project-tile');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.06), rgba(30, 41, 59, 0.6))`;
            card.style.borderColor = "rgba(255,255,255,0.15)";
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(30, 41, 59, 0.6)';
            card.style.borderColor = "rgba(255, 255, 255, 0.1)";
        });
    });

    // 2. ANIMATION AU SCROLL (reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. NAVBAR ACTIVE AU SCROLL
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => navObserver.observe(section));

});

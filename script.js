document.addEventListener('DOMContentLoaded', () => {

    // 1. EFFET DE LUEUR SUR LES CARTES — throttlé via rAF
    let glowFrame;
    const cards = document.querySelectorAll('.bento-card, .project-tile');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            cancelAnimationFrame(glowFrame);
            glowFrame = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.06), rgba(30, 41, 59, 0.6))`;
                card.style.borderColor = "rgba(255,255,255,0.15)";
            });
        }, { passive: true });
        card.addEventListener('mouseleave', () => {
            cancelAnimationFrame(glowFrame);
            card.style.background = '';
            card.style.borderColor = '';
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
    }, { threshold: 0.1, rootMargin: window.innerWidth < 860 ? "0px" : "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. ACCESSIBILITÉ — icônes décoratives masquées aux lecteurs d'écran
    document.querySelectorAll('i[class*="ph-"]').forEach(icon => {
        if (!icon.hasAttribute('aria-label')) {
            icon.setAttribute('aria-hidden', 'true');
        }
    });

    // 4. MENU HAMBURGER MOBILE
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        const closeMenu = () => {
            navbar.classList.remove('open');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.removeEventListener('click', handleOutsideClick);
        };

        const handleOutsideClick = (e) => {
            if (!navbar.contains(e.target)) closeMenu();
        };

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navbar.classList.toggle('open');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            if (isOpen) {
                document.addEventListener('click', handleOutsideClick);
            } else {
                document.removeEventListener('click', handleOutsideClick);
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // 5. NAVBAR ACTIVE AU SCROLL
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
    }, { threshold: 0.1 });

    sections.forEach(section => navObserver.observe(section));

    // 6. BOUTON RETOUR EN HAUT
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});

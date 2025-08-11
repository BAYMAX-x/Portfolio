// Custom Cursor
const cursor = document.querySelector('.cursor');
if (cursor) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// GSAP Entrance Animations (with toggleActions for replay on scroll)
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero-title')) {
        gsap.to('.hero-title', {opacity: 1, y: 0, duration: 1, delay: 0.2});
    }
    if (document.querySelector('.hero-subtitle')) {
        gsap.to('.hero-subtitle', {opacity: 1, y: 0, duration: 1, delay: 0.5});
    }
    if (document.querySelector('.hero-cta')) {
        gsap.to('.hero-cta', {opacity: 1, y: 0, duration: 1, delay: 0.8});
    }
    gsap.utils.toArray('.animate-in').forEach((el, i) => {
        gsap.fromTo(el,
            {opacity: 0, y: 100},
            {
                opacity: 1, y: 0, duration: 1, delay: 0.2 + i * 0.15,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });
    gsap.utils.toArray('.animate-scale').forEach((el, i) => {
        gsap.fromTo(el,
            {opacity: 0, scale: 0.8},
            {
                opacity: 1, scale: 1, duration: 1, delay: 0.2 + i * 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });
    gsap.utils.toArray('.animate-slide-left').forEach((el, i) => {
        gsap.fromTo(el,
            {opacity: 0, x: -100},
            {
                opacity: 1, x: 0, duration: 1, delay: 0.2 + i * 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });
    gsap.utils.toArray('.animate-slide-right').forEach((el, i) => {
        gsap.fromTo(el,
            {opacity: 0, x: 100},
            {
                opacity: 1, x: 0, duration: 1, delay: 0.2 + i * 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    });
});

// Typewriter animation for hero subtitle
window.addEventListener('DOMContentLoaded', () => {
    // Typewriter effect
    const typewriterEl = document.getElementById('typewriter');
    const typewriterText = "Crafting digital experiences with passion and precision";
    if (typewriterEl) {
        typewriterEl.textContent = "";
        let i = 0;
        function type() {
            if (i < typewriterText.length) {
                typewriterEl.textContent += typewriterText.charAt(i);
                i++;
                setTimeout(type, 40);
            }
        }
        type();
    }
});

// GSAP Floating Elements Animation
if (document.querySelector('.floating-1')) {
    gsap.to('.floating-1', {y: 40, repeat: -1, yoyo: true, duration: 6, ease: "sine.inOut"});
}
if (document.querySelector('.floating-2')) {
    gsap.to('.floating-2', {y: -30, repeat: -1, yoyo: true, duration: 7, ease: "sine.inOut"});
}
if (document.querySelector('.floating-3')) {
    gsap.to('.floating-3', {y: 25, repeat: -1, yoyo: true, duration: 5, ease: "sine.inOut"});
}

// GSAP Parallax Background
if (document.querySelector('.parallax-bg')) {
    gsap.to('.parallax-bg', {
        y: () => window.innerHeight * 0.1,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
}

// Skill Progress Bars Animation
gsap.utils.toArray('.progress-bar').forEach(bar => {
    let width = bar.getAttribute('data-width');
    gsap.set(bar, {width: 0});
    ScrollTrigger.create({
        trigger: bar,
        start: "top 90%",
        onEnter: () => gsap.to(bar, {width: width + "%", duration: 2, ease: "power2.out"})
    });
});

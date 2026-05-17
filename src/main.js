// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple AOS (Animate on Scroll) Implementation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            // Once animated, no need to observe anymore
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    el.classList.add('aos-init');
    observer.observe(el);
});

// Form Submission (Demo)
const inquiryForm = document.getElementById('inquiry-form');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        inquiryForm.reset();
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Thumbnail Gallery Switching
const mainImage = document.querySelector('.main-image img');
const thumbnails = document.querySelectorAll('.thumbnail-grid img');

if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}


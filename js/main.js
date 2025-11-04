// DealSpot AI - Main JavaScript File
// =====================================

// Mobile Menu Toggle
// ------------------
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');

            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }

            // Re-render Lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            });
        });
    }
});

// Email Signup Form Handler (Homepage Hero)
// ------------------------------------------
const emailSignupForm = document.getElementById('emailSignupForm');
if (emailSignupForm) {
    emailSignupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = document.getElementById('emailInput');
        const email = emailInput.value;

        // Basic email validation
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would normally send the email to your backend
        // For now, we'll just show a success message
        console.log('Email submitted:', email);
        alert('Thank you! We\'ll notify you when DealSpot AI launches.');

        // Reset form
        emailInput.value = '';
    });
}

// CTA Signup Form Handler
// ------------------------
const ctaSignupForm = document.getElementById('ctaSignupForm');
if (ctaSignupForm) {
    ctaSignupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = ctaSignupForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Basic email validation
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Here you would normally send the email to your backend
        console.log('Email submitted:', email);
        alert('Thank you for joining our waitlist! We\'ll be in touch soon.');

        // Reset form
        emailInput.value = '';
    });
}

// Contact Form Handler
// --------------------
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Validate required fields
        if (!data.name || !data.email || !data.subject || !data.message) {
            showFormMessage('error', 'Please fill in all required fields.');
            return;
        }

        // Validate email
        if (!isValidEmail(data.email)) {
            showFormMessage('error', 'Please enter a valid email address.');
            return;
        }

        // Here you would normally send the data to your backend
        // For demonstration, we'll simulate a successful submission
        console.log('Contact form submitted:', data);

        // Show success message
        showFormMessage('success', 'Thank you for your message! We\'ll get back to you within 24-48 hours.');

        // Reset form
        contactForm.reset();

        // In a real implementation, you would:
        // 1. Send data to your backend API
        // 2. Handle errors appropriately
        // 3. Show loading state during submission
        // Example:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            showFormMessage('success', 'Message sent successfully!');
            contactForm.reset();
        })
        .catch(error => {
            showFormMessage('error', 'An error occurred. Please try again.');
            console.error('Error:', error);
        });
        */
    });
}

// Form Message Display Helper
// ----------------------------
function showFormMessage(type, message) {
    const successEl = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');

    if (!successEl || !errorEl) return;

    // Hide both messages first
    successEl.style.display = 'none';
    errorEl.style.display = 'none';

    // Show the appropriate message
    if (type === 'success') {
        successEl.querySelector('p').textContent = message;
        successEl.style.display = 'flex';

        // Scroll to message
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide after 10 seconds
        setTimeout(() => {
            successEl.style.display = 'none';
        }, 10000);
    } else if (type === 'error') {
        errorEl.querySelector('p').textContent = message;
        errorEl.style.display = 'flex';

        // Scroll to message
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide after 10 seconds
        setTimeout(() => {
            errorEl.style.display = 'none';
        }, 10000);
    }
}

// Email Validation Helper
// ------------------------
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth Scroll for Anchor Links
// -------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just '#' or '#/'
            if (href === '#' || href === '#/') {
                return;
            }

            // Check if target exists
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without triggering navigation
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            }
        });
    });
});

// Add active class to current navigation link
// --------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Check if paths match (accounting for index.html)
        if (linkPath === currentPath ||
            (currentPath === '/' && linkPath === '/index.html') ||
            (currentPath === '/index.html' && linkPath === '/')) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for Fade-in Animations (Optional Enhancement)
// -------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Add fade-in-target class to elements you want to animate
        const targets = document.querySelectorAll('.feature-card, .vision-card, .industry-item, .faq-item');
        targets.forEach(target => {
            target.classList.add('fade-in-target');
            observer.observe(target);
        });
    }
});

// Add CSS for fade-in animation dynamically
// -----------------------------------------
const fadeInStyles = `
    .fade-in-target {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in-target.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Inject styles only if not already present
if (!document.querySelector('#fade-in-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'fade-in-styles';
    styleSheet.textContent = fadeInStyles;
    document.head.appendChild(styleSheet);
}

// Console Message (Developer Easter Egg)
// ---------------------------------------
console.log('%c🤖 DealSpot AI', 'font-size: 24px; font-weight: bold; color: #8A2BE2;');
console.log('%cInterested in joining our team?', 'font-size: 14px; color: #1A73E8;');
console.log('%cSend your resume to careers@dealspot.ai', 'font-size: 12px; color: #666;');

// Prevent form resubmission on page reload
// ----------------------------------------
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

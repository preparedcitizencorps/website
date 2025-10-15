// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

// Define menu control functions in shared scope
let closeMobileMenu = null;
let openMobileMenu = null;

if (mobileMenuBtn && mobileMenu && menuIcon && closeIcon) {
    closeMobileMenu = () => {
        if (mobileMenu && menuIcon && closeIcon) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    };

    openMobileMenu = () => {
        if (mobileMenu && menuIcon && closeIcon) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    };

    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close mobile menu when clicking on links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// Typing Animation
const typingText = document.getElementById('typing-text');

if (typingText) {
    const fullText = "SYSTEM INITIALIZED...";
    let index = 0;

    function typeText() {
        if (index <= fullText.length) {
            typingText.textContent = fullText.slice(0, index);
            index++;
            setTimeout(typeText, 100);
        }
    }

    // Start typing animation when page loads
    window.addEventListener('load', () => {
        setTimeout(typeText, 500);
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    // Create status message element
    const statusMessage = document.createElement('div');
    statusMessage.setAttribute('role', 'status');
    statusMessage.setAttribute('aria-live', 'polite');
    statusMessage.className = 'mt-4 p-4 rounded-md text-sm hidden';
    contactForm.appendChild(statusMessage);

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const formData = new FormData(contactForm);
        const data = {
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Disable submit button during submission
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = '> TRANSMITTING...';
        }

        // Hide any previous status messages
        statusMessage.classList.add('hidden');

        // Open user's email client with pre-filled information
        const subject = encodeURIComponent(data.subject);
        const body = encodeURIComponent(data.message);
        const mailtoLink = `mailto:contact@preparedcitizencorps.com?subject=${subject}&body=${body}`;

        // Open mailto link
        window.location.href = mailtoLink;

        // Show informational message with actions
        statusMessage.innerHTML = `
            <div class="space-y-3">
                <p class="font-semibold">✓ A draft should open in your email client.</p>
                <p class="text-sm">If it doesn't open automatically, you can:</p>
                <div class="flex flex-col sm:flex-row gap-2 mt-2">
                    <button type="button" id="copy-message-btn" class="flex-1 border border-primary text-primary hover:bg-primary hover:text-primary-foreground terminal-glow bg-transparent inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-all h-9 px-3">
                        &gt; COPY MESSAGE
                    </button>
                    <a href="${mailtoLink}" target="_blank" rel="noopener noreferrer" class="flex-1 border border-primary text-primary hover:bg-primary hover:text-primary-foreground terminal-glow bg-transparent inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-all h-9 px-3">
                        &gt; OPEN EMAIL CLIENT
                    </a>
                    <button type="button" id="clear-form-btn" class="flex-1 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground terminal-glow bg-transparent inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-all h-9 px-3">
                        &gt; CLEAR FORM
                    </button>
                </div>
            </div>
        `;
        statusMessage.className = 'mt-4 p-4 rounded-md text-sm bg-primary/10 border border-primary text-primary';
        statusMessage.classList.remove('hidden');

        // Add event listeners for the action buttons
        const copyBtn = statusMessage.querySelector('#copy-message-btn');
        const clearBtn = statusMessage.querySelector('#clear-form-btn');

        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const messageText = `To: contact@preparedcitizencorps.com\nSubject: ${data.subject}\n\n${data.message}`;
                navigator.clipboard.writeText(messageText).then(() => {
                    copyBtn.textContent = '✓ COPIED!';
                    setTimeout(() => {
                        copyBtn.innerHTML = '&gt; COPY MESSAGE';
                    }, 2000);
                }).catch(() => {
                    copyBtn.textContent = '✗ COPY FAILED';
                    setTimeout(() => {
                        copyBtn.innerHTML = '&gt; COPY MESSAGE';
                    }, 2000);
                });
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                contactForm.reset();
                statusMessage.classList.add('hidden');
            });
        }

        // Re-enable submit button
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = '> TRANSMIT_MESSAGE';
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
if (mobileMenuBtn && mobileMenu && closeMobileMenu) {
    document.addEventListener('click', (e) => {
        // Check if click is outside menu and button
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        }
    });
}

// Add active states for better mobile feedback
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('touchstart', function() {
        this.style.opacity = '0.7';
    }, { passive: true });

    element.addEventListener('touchend', function() {
        this.style.opacity = '1';
    }, { passive: true });

    element.addEventListener('touchcancel', function() {
        this.style.opacity = '1';
    }, { passive: true });
});

/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Created for BCA Student Portfolio
   ============================================ */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            // Toggle navigation menu visibility
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ========================================
    const allLinks = document.querySelectorAll('a[href^="#"]');
    
    allLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply if href is a valid anchor (not just "#")
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    // Calculate header height for proper offset
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // SCROLL TO TOP BUTTON
    // ========================================
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        // Scroll to top when button is clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ========================================
    // NAVBAR BACKGROUND ON SCROLL
    // ========================================
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
            }
        });
    }
    
    // ========================================
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(function(section) {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector('.nav-links a[href="#' + sectionId + '"]');
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ========================================
    // DOWNLOAD RESUME FUNCTION
    // ========================================
    window.downloadResume = function(event) {
        event.preventDefault();
        
        // Replace 'resume.pdf' with your actual resume file path
        // Example: 'documents/resume.pdf' or store in same directory
        const resumeFile = 'resume.pdf';
        
        // Check if resume file exists (for demo purposes)
        // In production, you would link to actual file
        alert('📄 Download Resume\n\nTo complete your portfolio:\n\n1. Create a PDF resume file\n2. Name it "resume.pdf"\n3. Place it in the same folder as this HTML file\n4. Or update the href in the HTML to point to your resume file\n\nExample: <a href="path/to/your/resume.pdf" ...>');
        
        // Alternative: Uncomment below to enable actual download
        // const link = document.createElement('a');
        // link.href = resumeFile;
        // link.download = 'Mohammad_Afroj_Hussain_Resume.pdf';
        // link.click();
    };
    
    // ========================================
    // SCROLL ANIMATION FOR ELEMENTS
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animation
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .certification-card, .education-card');
    
    animatedElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add visible class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // PROJECT CARD HOVER EFFECTS
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ========================================
    // SKILL CARD HOVER EFFECTS
    // ========================================
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ========================================
    // CONTACT LINK HANDLING
    // ========================================
    const contactLinks = document.querySelectorAll('.contact-item a');
    
    contactLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // For email links
            if (this.href.startsWith('mailto:')) {
                // Allow default mailto behavior
                return true;
            }
            // For external links (GitHub, LinkedIn)
            if (this.href.startsWith('http')) {
                // Add target attribute if not present
                if (!this.getAttribute('target')) {
                    this.setAttribute('target', '_blank');
                }
                // Add noopener for security
                if (!this.getAttribute('rel')) {
                    this.setAttribute('rel', 'noopener noreferrer');
                }
            }
        });
    });
    
    // ========================================
    // UTILITY: DEBOUNCE FUNCTION
    // ========================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ========================================
    // PERFORMANCE: OPTIMIZED SCROLL HANDLER
    // ========================================
    const optimizedScrollHandler = debounce(function() {
        // Add any scroll-based operations here
        // This will only run once every 10ms during scroll
    }, 10);
    
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // ========================================
    // CONSOLE WELCOME MESSAGE
    // ========================================
    console.log('%c Welcome to My Portfolio! ', 'background: #2563eb; color: white; padding: 10px; font-size: 16px; border-radius: 5px;');
    console.log('%c Feel free to explore and connect! ', 'color: #2563eb; font-size: 12px;');
    
});

// ========================================
// END OF JAVASCRIPT
// ========================================


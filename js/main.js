/**
 * Professional Portfolio - Enhanced JavaScript
 * Advanced interactions, animations, and user experience enhancements
 */

// =======================================
// BACKGROUND EFFECTS
// =======================================
class BackgroundEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createFloatingParticles();
        this.createGeometricShapes();
    }

    createFloatingParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 25;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    createGeometricShapes() {
        const shapesContainer = document.createElement('div');
        shapesContainer.className = 'geometric-shapes';
        document.body.appendChild(shapesContainer);

        // Create different geometric shapes
        const shapes = [
            { class: 'shape shape-circle', count: 3 },
            { class: 'shape shape-triangle', count: 2 },
            { class: 'shape shape-square', count: 3 }
        ];

        shapes.forEach(shapeType => {
            for (let i = 0; i < shapeType.count; i++) {
                const shape = document.createElement('div');
                shape.className = shapeType.class;
                
                // Random positioning and timing
                shape.style.left = Math.random() * 100 + '%';
                shape.style.animationDelay = Math.random() * 20 + 's';
                shape.style.animationDuration = (20 + Math.random() * 15) + 's';
                
                shapesContainer.appendChild(shape);
            }
        });
    }
}

// =======================================
// PROJECT DATA - Enhanced
// =======================================
const projects = [
    {
        title: "Professional Portfolio Website",
        description: "A modern, responsive portfolio built with vanilla JavaScript, featuring advanced CSS animations, dark mode toggle, and optimized performance. Showcases clean code architecture and professional design principles.",
        imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/portfolio",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
        title: "Blog Platform with Comments",
        description: "A comprehensive full-stack blogging platform featuring user authentication, rich text editor, CRUD operations for posts, and real-time commenting system. Includes admin dashboard, category management, and responsive design. Built with Spring Boot backend, MySQL database, and modern frontend technologies.",
        imageUrl: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/blog-platform",
        technologies: ["Java", "Spring Boot", "MySQL", "JavaScript", "HTML/CSS"]
    },
    {
        title: "URL Shortener Service",
        description: "A scalable URL shortening service similar to Bitly, featuring custom short URLs, click analytics, QR code generation, and expiration dates. Built with Node.js and Express backend, MongoDB for data storage, and Redis for caching. Includes user dashboard, link management, and detailed analytics.",
        imageUrl: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/url-shortener",
        technologies: ["Node.js", "Express", "MongoDB", "Redis", "JavaScript"]
    },
    {
        title: "Sentiment Analysis Movie Reviews",
        description: "An intelligent movie review sentiment analysis system using Natural Language Processing and Machine Learning. Features real-time sentiment classification, emotion detection, review summarization, and interactive data visualizations. Built with Python, scikit-learn, and Flask with a modern web interface.",
        imageUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/movie-sentiment-analysis",
        technologies: ["Python", "Machine Learning", "NLP", "Flask", "scikit-learn"]
    },
    {
        title: "Heart Disease Prediction Tool",
        description: "An intelligent health assessment application using machine learning algorithms to predict heart disease risk. Features data visualization, user-friendly interface, comprehensive health analytics, and medical report generation with 95% accuracy using ensemble methods.",
        imageUrl: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/heart-disease-prediction",
        technologies: ["Python", "Machine Learning", "Flask", "Data Analysis", "Pandas"]
    },
    {
        title: "E-Commerce Platform",
        description: "A comprehensive e-commerce solution with shopping cart, secure payment integration, inventory management, order tracking, and admin dashboard. Features responsive design, product search, user reviews, and seamless checkout experience across all devices.",
        imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/ecommerce-platform",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "JWT"]
    },
    {
        title: "Task Management Dashboard",
        description: "A modern project management application with drag-and-drop functionality, real-time collaboration, team management, and progress tracking. Features include Kanban boards, time tracking, file attachments, notifications, and detailed analytics with beautiful data visualizations.",
        imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/task-management",
        technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"]
    },
    {
        title: "Weather Forecast App",
        description: "An intelligent weather application with location-based forecasts, interactive maps, severe weather alerts, and historical data analysis. Features include 7-day forecasts, hourly predictions, weather radar, air quality index, and personalized weather recommendations.",
        imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/weather-app",
        technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation", "PWA"]
    },
    {
        title: "Social Media Analytics Tool",
        description: "A comprehensive social media analytics platform that tracks engagement metrics, audience insights, content performance, and competitor analysis. Features automated reporting, sentiment analysis, hashtag tracking, and AI-powered content suggestions for optimal posting times.",
        imageUrl: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
        liveUrl: "#",
        codeUrl: "https://github.com/codedbyshashi/social-analytics",
        technologies: ["Python", "Django", "React", "D3.js", "Twitter API", "Instagram API"]
    }
];

// =======================================
// DOM ELEMENTS
// =======================================
const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;
const projectsContainer = document.querySelector('#projects-container');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const header = document.querySelector('#header');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');

// =======================================
// THEME MANAGEMENT
// =======================================
class ThemeManager {
    constructor() {
        this.init();
    }

    init() {
        // Load saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        
        // Update toggle state
        if (themeToggle) {
            themeToggle.checked = savedTheme === 'dark';
            themeToggle.addEventListener('change', () => {
                const newTheme = themeToggle.checked ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        }
    }

    setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update meta theme-color for mobile browsers
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#1e293b' : '#ffffff');
        }
    }
}

// =======================================
// SCROLL EFFECTS & NAVIGATION
// =======================================
class ScrollManager {
    constructor() {
        this.init();
    }

    init() {
        this.handleScrollEffects();
        this.handleActiveNavigation();
        this.handleSmoothScrolling();
    }

    handleScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrollY = window.scrollY;
            
            // Header scroll effect
            if (header) {
                if (scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }

            // Parallax effect for hero section
            const hero = document.querySelector('#hero');
            if (hero) {
                const heroHeight = hero.offsetHeight;
                const scrollPercent = Math.min(scrollY / heroHeight, 1);
                hero.style.transform = `translateY(${scrollPercent * 50}px)`;
            }

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    handleActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        
        const updateActiveNav = () => {
            const scrollY = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveNav);
    }

    handleSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// =======================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =======================================
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add staggered animation for project cards
                    if (entry.target.classList.contains('project-card')) {
                        const cards = document.querySelectorAll('.project-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible');
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .project-card').forEach(el => {
            observer.observe(el);
        });
    }
}

// =======================================
// PROJECT RENDERING
// =======================================
class ProjectManager {
    constructor() {
        this.init();
    }

    init() {
        this.renderProjects();
    }

    renderProjects() {
        if (!projectsContainer) return;

        const projectsHTML = projects.map((project, index) => `
            <div class="project-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="project-image-container">
                    <img 
                        src="${project.imageUrl}" 
                        alt="Screenshot of ${project.title}" 
                        class="project-image"
                        loading="lazy"
                    >
                    <div class="project-overlay">
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-links">
                        <a 
                            href="${project.liveUrl}" 
                            class="btn btn-primary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            ${project.liveUrl === '#' ? 'onclick="return false;" style="opacity: 0.6; cursor: not-allowed;"' : ''}
                        >
                            ${project.liveUrl === '#' ? 'Coming Soon' : 'Live Demo'}
                        </a>
                        <a 
                            href="${project.codeUrl}" 
                            class="btn btn-secondary" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Code
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        projectsContainer.innerHTML = projectsHTML;
    }
}

// =======================================
// FORM MANAGEMENT
// =======================================
class FormManager {
    constructor() {
        this.init();
    }

    init() {
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Show loading state
        this.showStatus('Sending your message...', 'info');
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.showStatus('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
                contactForm.reset();
            } else {
                const data = await response.json();
                const errorMessage = data.errors ? 
                    data.errors.map(error => error.message).join(', ') : 
                    'Something went wrong. Please try again.';
                this.showStatus(errorMessage, 'error');
            }
        } catch (error) {
            this.showStatus('Network error. Please check your connection and try again.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    showStatus(message, type) {
        if (!formStatus) return;

        formStatus.textContent = message;
        formStatus.className = type;
        formStatus.style.display = 'block';
        formStatus.style.opacity = '1';
        formStatus.style.transform = 'translateY(0)';

        // Auto-hide success messages
        if (type === 'success') {
            setTimeout(() => {
                formStatus.style.opacity = '0';
                formStatus.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 300);
            }, 5000);
        }
    }
}

// =======================================
// MOBILE MENU MANAGEMENT
// =======================================
class MobileMenuManager {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        if (!menuToggle) return;

        menuToggle.addEventListener('click', () => this.toggle());
        
        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('header')) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.isOpen = true;
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.isOpen = false;
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// =======================================
// PERFORMANCE OPTIMIZATIONS
// =======================================
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('loading');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                img.classList.add('loading');
                imageObserver.observe(img);
            });
        }
    }

    preloadCriticalResources() {
        // Preload hero image
        const heroImage = new Image();
        heroImage.src = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
}

// =======================================
// INITIALIZATION
// =======================================
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // Initialize all managers
        new ThemeManager();
        new BackgroundEffects();
        new ScrollManager();
        new AnimationManager();
        new ProjectManager();
        new FormManager();
        new MobileMenuManager();
        new PerformanceManager();

        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');

        // Initialize any additional features
        this.initializeTooltips();
        this.initializeKeyboardNavigation();
    }

    initializeTooltips() {
        // Add tooltips for interactive elements
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', this.showTooltip);
            element.addEventListener('mouseleave', this.hideTooltip);
        });
    }

    initializeKeyboardNavigation() {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close any open modals or menus
                const mobileMenu = new MobileMenuManager();
                mobileMenu.close();
            }
        });
    }

    showTooltip(e) {
        // Tooltip implementation
        console.log('Show tooltip:', e.target.dataset.tooltip);
    }

    hideTooltip(e) {
        // Hide tooltip implementation
        console.log('Hide tooltip');
    }
}

// =======================================
// START APPLICATION
// =======================================
new Portfolio();

// =======================================
// UTILITY FUNCTIONS
// =======================================
const utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Portfolio, utils };
}
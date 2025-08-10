// Portfolio JavaScript functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Create floating particles
    createFloatingParticles();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Projects data
    const projectsData = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with secure payment processing, inventory management, user authentication, and admin dashboard. Features include product search, shopping cart, order tracking, and customer reviews.",
            image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Task Management Dashboard",
            description: "Modern project management application with drag-and-drop functionality, real-time collaboration, Kanban boards, time tracking, and comprehensive analytics. Built for team productivity.",
            image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Vue.js", "Firebase", "Vuetify", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Weather Forecast App",
            description: "Intelligent weather application with interactive maps, severe weather alerts, 7-day forecasts, and location-based recommendations. Features beautiful UI and real-time data updates.",
            image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React Native", "OpenWeather API", "Redux", "Maps API"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Social Media Analytics Tool",
            description: "Comprehensive analytics platform for social media management with engagement metrics, sentiment analysis, competitor tracking, and AI-powered content suggestions for optimal performance.",
            image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Python", "Django", "D3.js", "TensorFlow", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Blog Platform with Comments",
            description: "Modern blogging platform with rich text editor, user authentication, comment system, category management, and admin dashboard. Features SEO optimization and responsive design.",
            image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "TailwindCSS"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "URL Shortener Service",
            description: "High-performance URL shortening service with custom short URLs, click analytics, QR code generation, user dashboard, and Redis caching for optimal speed and reliability.",
            image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Node.js", "Redis", "MongoDB", "Express", "Chart.js"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Sentiment Analysis Movie Reviews",
            description: "Advanced NLP application for movie review sentiment analysis with emotion detection, review summarization, and interactive data visualizations. Uses machine learning for accurate predictions.",
            image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Python", "NLTK", "Scikit-learn", "Flask", "Pandas"],
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Heart Disease Prediction Tool",
            description: "Machine learning application for heart disease risk assessment with 95% accuracy. Features ensemble methods, data visualization, and medical report generation for healthcare professionals.",
            image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit"],
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    // Render projects
    function renderProjects() {
        const projectsContainer = document.getElementById('projects-container');
        if (!projectsContainer) {
            console.error('Projects container not found');
            return;
        }

        projectsContainer.innerHTML = '';

        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                    <div class="project-overlay">
                        <div class="project-tech">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.liveUrl}" class="btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a href="${project.githubUrl}" class="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });

        console.log(`Rendered ${projectsData.length} projects`);
    }

    // Initialize projects
    renderProjects();

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Add scroll effect for navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
    
    // Create floating particles function
    function createFloatingParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        
        // Create 20 particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const colors = [
                'rgba(37, 99, 235, 0.6)',
                'rgba(6, 182, 212, 0.6)',
                'rgba(16, 185, 129, 0.6)',
                'rgba(245, 158, 11, 0.6)',
                'rgba(139, 92, 246, 0.6)'
            ];
            
            const size = Math.random() * 4 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 15;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                left: ${left}%;
                bottom: -10px;
                animation: floatUp ${animationDuration}s linear infinite;
                animation-delay: ${delay}s;
                box-shadow: 0 0 10px ${color};
            `;
            
            particlesContainer.appendChild(particle);
        }
        
        document.body.appendChild(particlesContainer);
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
        
        // Observe fade-in elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    }
});
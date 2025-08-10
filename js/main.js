// Portfolio JavaScript functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Initialize particle system
    initParticleSystem();
    
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
    
    function initParticleSystem() {
        createParticleContainer();
        createFloatingParticles();
        createGeometricParticles();
        createBubbleParticles();
        createConstellationEffect();
        createSpiralParticles();
        initInteractiveParticles();
    }
    
    function createParticleContainer() {
        const container = document.createElement('div');
        container.className = 'particle-container';
        document.body.appendChild(container);
        return container;
    }
    
    function createFloatingParticles() {
        const container = document.querySelector('.particle-container');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const sizes = ['small', 'medium', 'large'];
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            
            particle.className = `floating-particle ${size}`;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
            
            container.appendChild(particle);
        }
    }
    
    function createGeometricParticles() {
        const container = document.querySelector('.particle-container');
        const shapes = ['triangle', 'square', 'diamond'];
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            
            particle.className = `geometric-particle ${shape}`;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 25 + 's';
            particle.style.animationDuration = (Math.random() * 15 + 20) + 's';
            
            container.appendChild(particle);
        }
    }
    
    function createBubbleParticles() {
        const container = document.querySelector('.particle-container');
        const sizes = ['small', 'medium', 'large'];
        const particleCount = 12;
        
        for (let i = 0; i < particleCount; i++) {
            const bubble = document.createElement('div');
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            
            bubble.className = `bubble-particle ${size}`;
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDelay = Math.random() * 15 + 's';
            bubble.style.animationDuration = (Math.random() * 8 + 12) + 's';
            
            container.appendChild(bubble);
        }
    }
    
    function createConstellationEffect() {
        const container = document.querySelector('.particle-container');
        const starCount = 20;
        const stars = [];
        
        // Create constellation stars
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'constellation-particle';
            
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.animationDelay = Math.random() * 3 + 's';
            
            container.appendChild(star);
            stars.push({ element: star, x, y });
        }
        
        // Create connecting lines between nearby stars
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(stars[i].x - stars[j].x, 2) + 
                    Math.pow(stars[i].y - stars[j].y, 2)
                );
                
                if (distance < 150) {
                    const line = document.createElement('div');
                    line.className = 'constellation-line';
                    
                    const angle = Math.atan2(stars[j].y - stars[i].y, stars[j].x - stars[i].x);
                    
                    line.style.left = stars[i].x + 'px';
                    line.style.top = stars[i].y + 'px';
                    line.style.width = distance + 'px';
                    line.style.transform = `rotate(${angle}rad)`;
                    line.style.animationDelay = Math.random() * 4 + 's';
                    
                    container.appendChild(line);
                }
            }
        }
    }
    
    function createSpiralParticles() {
        const container = document.querySelector('.particle-container');
        const particleCount = 8;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'spiral-particle pulse-particle';
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
            
            container.appendChild(particle);
        }
    }
    
    function initInteractiveParticles() {
        const particles = document.querySelectorAll('.floating-particle, .geometric-particle');
        
        window.addEventListener('scroll', () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            
            particles.forEach((particle, index) => {
                if (scrollPercent > (index / particles.length) - 0.1 && 
                    scrollPercent < (index / particles.length) + 0.1) {
                    particle.classList.add('interactive-particle', 'active');
                } else {
                    particle.classList.remove('active');
                }
            });
        });
        
        // Mouse interaction
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const rect = particle.getBoundingClientRect();
                const particleX = (rect.left + rect.width / 2) / window.innerWidth;
                const particleY = (rect.top + rect.height / 2) / window.innerHeight;
                
                const distance = Math.sqrt(
                    Math.pow(mouseX - particleX, 2) + 
                    Math.pow(mouseY - particleY, 2)
                );
                
                if (distance < 0.1) {
                    particle.style.transform += ` scale(1.2)`;
                    particle.style.opacity = '1';
                }
            });
        });
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
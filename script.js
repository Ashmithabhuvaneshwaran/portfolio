// ==========================================
// CASE STUDIES DATA
// ==========================================

const caseStudies = {
    'college-hub': {
        title: 'College Hub System',
        category: 'Full Stack Development',
        duration: '3 Months',
        overview: `
            <div class="case-study-section">
                <h4>Overview</h4>
                <p>College Hub is a comprehensive centralized system designed to streamline college operations, 
                manage student and faculty records, and facilitate resource allocation with an intuitive 
                role-based access control system.</p>
            </div>
        `,
        problem: `
            <div class="case-study-section">
                <h4>The Problem</h4>
                <ul>
                    <li>Manual management of student and faculty records was time-consuming and error-prone</li>
                    <li>Lack of a centralized platform for resource allocation and course management</li>
                    <li>Difficulty in maintaining data consistency across different departments</li>
                    <li>Limited transparency in administrative processes</li>
                </ul>
            </div>
        `,
        solution: `
            <div class="case-study-section">
                <h4>Solution</h4>
                <p><strong>Architecture:</strong> Built a full-stack application with:</p>
                <ul>
                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript for responsive user interface</li>
                    <li><strong>Backend:</strong> Python with Flask framework for robust API</li>
                    <li><strong>Database:</strong> MySQL for reliable data management</li>
                    <li><strong>Features:</strong> Role-based access control, faculty resume upload, user account creation</li>
                </ul>
                <p><strong>Key Features Implemented:</strong></p>
                <ul>
                    <li>Automated faculty resume upload system</li>
                    <li>User account creation with email verification</li>
                    <li>Role-based access control (Admin, Faculty, Student)</li>
                    <li>Course and subject management dashboard</li>
                    <li>Real-time notifications system</li>
                </ul>
            </div>
        `,
        outcome: `
            <div class="case-study-section">
                <h4>Outcomes & Impact</h4>
                <ul>
                    <li>✓ Reduced administrative workload by 60%</li>
                    <li>✓ Improved data accuracy and consistency</li>
                    <li>✓ Enhanced transparency in all processes</li>
                    <li>✓ Positive feedback from faculty and administration</li>
                    <li>✓ Successfully deployed and used by 500+ students and faculty</li>
                </ul>
            </div>
        `,
        tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL']
    },
    'library-system': {
        title: 'Library Management System',
        category: 'MERN Stack Development',
        duration: '4 Months',
        overview: `
            <div class="case-study-section">
                <h4>Overview</h4>
                <p>A modern, full-featured library management system built with MERN stack that enables efficient 
                book management, member tracking, real-time availability tracking, and advanced search capabilities.</p>
            </div>
        `,
        problem: `
            <div class="case-study-section">
                <h4>The Problem</h4>
                <ul>
                    <li>Manual cataloging and tracking of library books was inefficient</li>
                    <li>Difficulty in real-time book availability tracking</li>
                    <li>Complex and time-consuming member registration and borrowing processes</li>
                    <li>No integrated system for managing overdue books and fines</li>
                </ul>
            </div>
        `,
        solution: `
            <div class="case-study-section">
                <h4>Solution</h4>
                <p><strong>Tech Stack:</strong> Modern MERN (MongoDB, Express.js, React, Node.js)</p>
                <ul>
                    <li><strong>Frontend:</strong> React with responsive UI components</li>
                    <li><strong>Backend:</strong> Express.js with RESTful API architecture</li>
                    <li><strong>Database:</strong> MongoDB for flexible document storage</li>
                    <li><strong>Features:</strong> Search, borrow/return, real-time tracking, role-based access</li>
                </ul>
                <p><strong>Key Features Implemented:</strong></p>
                <ul>
                    <li>Advanced book search and filtering system</li>
                    <li>Real-time book availability tracking</li>
                    <li>Member registration with profile management</li>
                    <li>Borrow and return transaction logging</li>
                    <li>Automatic fine calculation for overdue books</li>
                    <li>Librarian and Member role-based access</li>
                </ul>
            </div>
        `,
        outcome: `
            <div class="case-study-section">
                <h4>Outcomes & Impact</h4>
                <ul>
                    <li>✓ Book availability response time reduced from hours to seconds</li>
                    <li>✓ 85% faster member registration and borrowing process</li>
                    <li>✓ Automated fine management saved librarian 10+ hours per week</li>
                    <li>✓ Increased library circulation by 40%</li>
                    <li>✓ Member satisfaction increased significantly with online portals</li>
                </ul>
            </div>
        `,
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'RESTful API']
    }
};

// ==========================================
// CASE STUDY MODAL
// ==========================================

function viewCaseStudy(projectId) {
    const caseStudy = caseStudies[projectId];
    if (!caseStudy) return;

    const modal = new bootstrap.Modal(document.getElementById('caseStudyModal'));
    const titleEl = document.getElementById('caseStudyTitle');
    const contentEl = document.getElementById('caseStudyContent');

    titleEl.textContent = caseStudy.title;

    contentEl.innerHTML = `
        <div class="case-study-content">
            <div class="case-study-meta">
                <span class="meta-badge">${caseStudy.category}</span>
                <span class="meta-badge">${caseStudy.duration}</span>
            </div>

            ${caseStudy.overview}
            ${caseStudy.problem}
            ${caseStudy.solution}
            ${caseStudy.outcome}

            <div class="case-study-section">
                <h4>Technologies Used</h4>
                <div class="tech-list">
                    ${caseStudy.tech.map(tech => `<span class="tech-badge-lg">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;

    modal.show();
}

// Style for case study content
const caseStudyStyles = `
    <style>
        .case-study-content {
            padding: 1rem 0;
        }

        .case-study-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .meta-badge {
            background: linear-gradient(135deg, rgba(91, 127, 255, 0.2) 0%, rgba(157, 78, 221, 0.2) 100%);
            color: #5B7FFF;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-size: 0.9rem;
            font-weight: 600;
            border: 1px solid rgba(91, 127, 255, 0.3);
        }

        .case-study-section {
            margin-bottom: 2rem;
        }

        .case-study-section h4 {
            color: #1A1A2E;
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .case-study-section p {
            color: #6B7280;
            margin-bottom: 1rem;
            line-height: 1.8;
        }

        .case-study-section ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .case-study-section li {
            color: #6B7280;
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            line-height: 1.6;
        }

        .case-study-section li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #5B7FFF;
            font-weight: 700;
        }

        .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        .tech-badge-lg {
            background: linear-gradient(135deg, rgba(91, 127, 255, 0.15) 0%, rgba(157, 78, 221, 0.15) 100%);
            color: #5B7FFF;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 500;
            border: 1px solid rgba(91, 127, 255, 0.2);
        }
    </style>
`;

// Inject styles
if (document.head) {
    document.head.insertAdjacentHTML('beforeend', caseStudyStyles);
}

// ==========================================
// FORM HANDLING
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Show success message (in a real application, you would send this to a server)
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Message Sent!';
            btn.disabled = true;
            btn.classList.add('success');
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.classList.remove('success');
            }, 3000);
            
            // Log form data (for demonstration)
            console.log('Form submitted:', {
                name: this.querySelector('input[placeholder="Your Name"]').value,
                email: this.querySelector('input[placeholder="Your Email"]').value,
                message: this.querySelector('textarea[placeholder="Your Message"]').value
            });
        });
    }
});

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and other elements
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card, .about-content, .contact-card');
    projectCards.forEach(card => observer.observe(card));
});

// ==========================================
// SMOOTH SCROLL BEHAVIOR
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// ACTIVE NAV LINK
// ==========================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.7)';
        navbar.style.backdropFilter = 'blur(20px)';
    }
});

// ==========================================
// ANIMATION STATE FOR BUTTONS
// ==========================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousedown', function () {
        this.style.transform = 'translateY(1px)';
    });

    button.addEventListener('mouseup', function () {
        this.style.transform = '';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

// ==========================================
// RIPPLE EFFECT FOR BUTTONS
// ==========================================

function createRipple(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple styles
const rippleStyles = `
    <style>
        .btn {
            position: relative;
            overflow: hidden;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .btn.success {
            background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        }

        .nav-link.active {
            color: #5B7FFF !important;
        }

        .nav-link.active::after {
            width: 100%;
        }
    </style>
`;

if (document.head) {
    document.head.insertAdjacentHTML('beforeend', rippleStyles);
}

// Attach ripple effect to primary buttons
document.querySelectorAll('.btn-primary, .btn-outline-primary').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ==========================================
// PARALLAX EFFECT (SUBTLE)
// ==========================================

const parallaxElements = document.querySelectorAll('[data-parallax]');

if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            element.style.transform = `translateY(${window.scrollY * speed}px)`;
        });
    });
}

// ==========================================
// PAGE LOAD ANIMATION
// ==========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease-in';
});

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 10);
});

// ==========================================
// CUSTOM CURSOR
// ==========================================

const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Smooth trailing ring - faster response
    function animateRing() {
        ringX += (mouseX - ringX) * 0.35;
        ringY += (mouseY - ringY) * 0.35;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover effect on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .btn, .project-card, .glass-card, .contact-card-v2, .social-pill, input, textarea, .skill-badge-new, .nav-link');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.classList.add('cursor-hover');
            cursorRing.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('cursor-hover');
            cursorRing.classList.remove('cursor-hover');
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
        cursorDot.classList.add('cursor-click');
        cursorRing.classList.add('cursor-click');
    });
    document.addEventListener('mouseup', () => {
        cursorDot.classList.remove('cursor-click');
        cursorRing.classList.remove('cursor-click');
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorRing.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
    });
}

// ==========================================
// CONSOLE EASTER EGG
// ==========================================

console.log('%cWelcome to Ashmitha\'s Portfolio!', 'font-size: 20px; color: #3498DB; font-weight: bold;');
console.log('%cLooking under the hood? I love curious developers!', 'font-size: 14px; color: #E8B456;');
console.log('%cCheck out my GitHub: https://github.com/Ashmithabuvaneshwaran/', 'font-size: 12px; color: #A0A8B8;');

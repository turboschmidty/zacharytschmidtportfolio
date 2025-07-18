// Main JavaScript file for portfolio website

// Content data will be loaded from JSON
let contentData = null;

// DOM elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadContent();
    initializeTheme();
    initializeNavigation();
    initializeScrollEffects();
});

// Load content from JSON file
async function loadContent() {
    try {
        const response = await fetch('data/content.json');
        contentData = await response.json();
        populateContent();
    } catch (error) {
        console.error('Error loading content:', error);
        // Fallback to inline content if JSON fails
        loadFallbackContent();
    }
}

// Populate content from loaded data
function populateContent() {
    if (!contentData) return;

    // Populate timeline
    populateTimeline();
    
    // Populate skills
    populateSkills();
    
    // Populate projects
    populateProjects();
}

// Populate experience timeline
function populateTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline || !contentData.experience) return;

    timeline.innerHTML = '';
    
    contentData.experience.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const achievements = item.achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.period}</div>
                <h3 class="timeline-title">${item.position}</h3>
                <div class="timeline-company">${item.company} - ${item.location}</div>
                <div class="timeline-description">
                    <ul>
                        ${achievements}
                    </ul>
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Populate skills section
function populateSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid || !contentData.skills) return;

    skillsGrid.innerHTML = '';
    
    contentData.skills.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        const skillTags = category.items.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
        
        skillCategory.innerHTML = `
            <h3><i class="${category.icon}"></i> ${category.name}</h3>
            <div class="skill-list">
                ${skillTags}
            </div>
        `;
        
        skillsGrid.appendChild(skillCategory);
    });
}

// Populate projects section
function populateProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !contentData.projects) return;

    projectsGrid.innerHTML = '';
    
    contentData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const projectTags = project.technologies.map(tech => 
            `<span class="project-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${projectTags}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Fallback content if JSON loading fails
function loadFallbackContent() {
    // This would contain the hardcoded content as a fallback
    console.log('Loading fallback content...');
    
    // Populate with basic content
    populateTimelineFromResume();
    populateSkillsFromResume();
    populateProjectsFromResume();
}

// Populate timeline from resume data
function populateTimelineFromResume() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    const experiences = [
        {
            period: "May 2023 - Present",
            position: "Director of Help Desk",
            company: "NEOGOV",
            location: "El Segundo, CA",
            achievements: [
                "Owned vendor relationships and oversaw budgets exceeding $10M, optimizing cost efficiency",
                "Managed the implementation of OneLogin SSO and the migration to Okta in under 2 months",
                "Directed cross-functional teams to implement enterprise-wide technology solutions, driving cost savings through process automation and vendor optimization"
            ]
        },
        {
            period: "Nov. 2021 – Feb. 2023",
            position: "IT Manager",
            company: "MasterClass",
            location: "San Francisco, CA",
            achievements: [
                "Designed a leadership pillar program to enhance skills, communication, and ownership over knowledge",
                "Oversaw FreshService ticketing system onboarding, development, and launch",
                "Managed purchasing, forecasting, and hardware management for both PC and MAC systems (via JAMF)",
                "Developed IT infrastructure strategy, architecture, and processes, resulting in a 90% reduction in ticket backlog"
            ]
        },
        {
            period: "April 2019 - Nov. 2021",
            position: "Technical Support Manager",
            company: "Hulu / Disney Streaming Services",
            location: "Santa Monica, CA",
            achievements: [
                "Led a team of 16 people in implementing ITIL best practices to improve technical support services",
                "Managed break-fix support for 2000+ PC and MAC users across diverse IT infrastructures",
                "Administered user lifecycle management for 3 entities supporting 3,000+ employees globally with SOX compliance",
                "Developed and executed automated app request flows, automating 1K+ tasks"
            ]
        },
        {
            period: "July 2016 - April 2019",
            position: "Helpdesk Technician Tier 2",
            company: "Milken Community Schools",
            location: "Los Angeles, CA",
            achievements: [
                "Managed JAMF administration, including scripting, installation, and deployment of all Apple devices",
                "Provided ongoing support for campus-wide Cisco VOIP phones, Cisco Meraki switches, and classroom A/V technology"
            ]
        }
    ];

    timeline.innerHTML = '';
    
    experiences.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const achievements = item.achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.period}</div>
                <h3 class="timeline-title">${item.position}</h3>
                <div class="timeline-company">${item.company} - ${item.location}</div>
                <div class="timeline-description">
                    <ul>
                        ${achievements}
                    </ul>
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Populate skills from resume data
function populateSkillsFromResume() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;

    const skills = [
        {
            name: "Certifications",
            icon: "fas fa-certificate",
            items: [
                "CompTIA A+/SEC+/Net+",
                "ITIL 4 Certified",
                "Okta Certified Pro",
                "JAMF CCE",
                "Microsoft Certified (Azure, 365, Power Platforms)",
                "Google IT Automation with Python",
                "BetterCloud Certified Admin",
                "LFCA: Linux Foundation"
            ]
        },
        {
            name: "Identity & Access Management",
            icon: "fas fa-shield-alt",
            items: [
                "Okta",
                "PingOne",
                "OneLogin",
                "Active Directory",
                "Azure AD",
                "BetterCloud",
                "Sailpoint",
                "LastPass",
                "1Password",
                "Keeper"
            ]
        },
        {
            name: "IT Service Management",
            icon: "fas fa-cogs",
            items: [
                "ServiceNow",
                "FreshService",
                "JAMF",
                "Munki",
                "Ivanti",
                "ManageEngine",
                "Power Automate",
                "Zapier"
            ]
        },
        {
            name: "Cloud & Productivity",
            icon: "fas fa-cloud",
            items: [
                "Office 365",
                "Google Workspace",
                "Azure",
                "Adobe CC",
                "Zoom",
                "Slack",
                "Box",
                "Dropbox",
                "Google Drive"
            ]
        },
        {
            name: "Network & Infrastructure",
            icon: "fas fa-network-wired",
            items: [
                "Cisco Meraki",
                "Cisco VOIP",
                "Avaya",
                "Zoom Phone",
                "Network Administration",
                "Infrastructure Management"
            ]
        },
        {
            name: "Project Management",
            icon: "fas fa-project-diagram",
            items: [
                "Trello",
                "Asana",
                "Jira",
                "Confluence",
                "Lucidchart",
                "Airtable",
                "Tableau"
            ]
        }
    ];

    skillsGrid.innerHTML = '';
    
    skills.forEach(category => {
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        const skillTags = category.items.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
        
        skillCategory.innerHTML = `
            <h3><i class="${category.icon}"></i> ${category.name}</h3>
            <div class="skill-list">
                ${skillTags}
            </div>
        `;
        
        skillsGrid.appendChild(skillCategory);
    });
}

// Populate projects from resume data
function populateProjectsFromResume() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const projects = [
        {
            title: "Enterprise SSO Migration",
            description: "Led the migration from OneLogin to Okta SSO platform in under 2 months, ensuring seamless user experience and enhanced security across the organization.",
            icon: "fas fa-key",
            technologies: ["Okta", "OneLogin", "Active Directory", "SAML", "SCIM"]
        },
        {
            title: "IT Infrastructure Optimization",
            description: "Developed and implemented IT infrastructure strategy resulting in 90% reduction in ticket backlog and significant cost savings through process automation.",
            icon: "fas fa-server",
            technologies: ["ITIL", "FreshService", "Process Automation", "Vendor Management"]
        },
        {
            title: "Multi-Entity User Management",
            description: "Administered user lifecycle management for 3 entities supporting 3,000+ employees globally with SOX compliance requirements.",
            icon: "fas fa-users",
            technologies: ["Active Directory", "Office 365", "SOX Compliance", "User Provisioning"]
        },
        {
            title: "Automated Workflow Implementation",
            description: "Developed and executed automated app request flows, successfully automating over 1,000 tasks and improving operational efficiency.",
            icon: "fas fa-robot",
            technologies: ["Power Automate", "Zapier", "Workflow Automation", "API Integration"]
        },
        {
            title: "Enterprise Device Management",
            description: "Managed JAMF administration including scripting, installation, and deployment of Apple devices across educational and corporate environments.",
            icon: "fas fa-laptop",
            technologies: ["JAMF", "Apple Device Management", "Scripting", "Mobile Device Management"]
        },
        {
            title: "Leadership Development Program",
            description: "Designed and implemented a leadership pillar program to enhance team skills, communication, and knowledge ownership across IT departments.",
            icon: "fas fa-graduation-cap",
            technologies: ["Team Leadership", "Training Programs", "Knowledge Management", "Professional Development"]
        }
    ];

    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const projectTags = project.technologies.map(tech => 
            `<span class="project-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <div class="project-icon">
                <i class="${project.icon}"></i>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${projectTags}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize theme functionality
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update theme toggle icon
    updateThemeToggleIcon(savedTheme, themeToggle);

    // Add click event listener
    themeToggle.addEventListener('click', () => toggleTheme(themeToggle));
}

// Toggle theme function
function toggleTheme(themeToggle) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon(newTheme, themeToggle);
}

// Update theme toggle icon
function updateThemeToggleIcon(theme, themeToggle) {
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Initialize navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Active link highlighting
    window.addEventListener('scroll', updateActiveLink);
}

// Update active navigation link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        observer.observe(category);
    });
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        observer.observe(card);
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

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add typing effect to hero title
function initTypingEffect() {
    const titleElement = document.querySelector('.hero-title .text-gradient');
    if (!titleElement) return;
    
    const text = 'Zachary Schmidt';
    titleElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Initialize typing effect when page loads
window.addEventListener('load', initTypingEffect);

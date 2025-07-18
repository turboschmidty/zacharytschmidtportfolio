# Zachary Schmidt Portfolio Website

## Overview

This is a personal portfolio website for Zachary Schmidt, an IT Management Professional and Director of Help Desk. The website showcases his professional experience, skills, and projects through a modern, responsive design with dark/light theme functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static Website**: Pure HTML, CSS, and JavaScript implementation
- **Single Page Application (SPA)**: Navigation handled via JavaScript with smooth scrolling
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Theme System**: Dark/light mode toggle with CSS custom properties
- **Component-Based Structure**: Modular sections for easy maintenance

### Key Design Patterns
- **CSS Custom Properties**: Centralized theming and consistent design tokens
- **Progressive Enhancement**: Core content accessible without JavaScript
- **Semantic HTML**: Proper document structure for accessibility and SEO
- **External Data Loading**: Content separated from presentation via JSON

## Key Components

### 1. Navigation System
- **Sticky Navigation**: Fixed header with smooth scroll to sections
- **Mobile Menu**: Hamburger menu for mobile devices
- **Active State Management**: JavaScript-driven navigation highlighting

### 2. Theme Management
- **CSS Custom Properties**: Dual theme system (light/dark)
- **Local Storage**: Theme preference persistence
- **System Preference Detection**: Automatic theme based on user's OS preference

### 3. Content Management
- **JSON Data Source**: Centralized content in `data/content.json`
- **Dynamic Population**: JavaScript-driven content rendering
- **Fallback System**: Inline content backup if JSON loading fails

### 4. Interactive Elements
- **Smooth Scrolling**: Enhanced navigation experience
- **Scroll Effects**: Progressive disclosure and animations
- **Contact Form**: Client-side form handling (ready for backend integration)

## Data Flow

### Content Loading Process
1. **Initial Load**: HTML structure loads immediately
2. **JSON Fetch**: Asynchronous loading of content data
3. **DOM Manipulation**: JavaScript populates sections with data
4. **Fallback Handling**: Static content shown if JSON fails

### Theme Management Flow
1. **System Detection**: Check user's OS preference
2. **Storage Check**: Look for saved theme preference
3. **Theme Application**: Apply appropriate CSS custom properties
4. **Toggle Handling**: User interaction updates theme and saves preference

### Navigation Flow
1. **Anchor Detection**: JavaScript intercepts navigation clicks
2. **Smooth Scroll**: Animated scrolling to target sections
3. **State Update**: Active navigation item highlighting
4. **Mobile Menu**: Responsive menu toggle for mobile devices

## External Dependencies

### Fonts and Icons
- **Google Fonts**: Inter font family for modern typography
- **Font Awesome**: Icon library for UI elements
- **CDN Delivery**: External font and icon loading

### No Backend Dependencies
- **Static Hosting Ready**: No server-side requirements
- **Client-Side Only**: All functionality runs in browser
- **No Database**: Content stored in JSON files

## Deployment Strategy

### Static Site Hosting
- **Platform Agnostic**: Compatible with any static hosting service
- **No Build Process**: Direct file deployment
- **Performance Optimized**: Minimal external dependencies

### Recommended Hosting Options
- **Replit**: Direct hosting from development environment
- **Netlify/Vercel**: Git-based deployment with CI/CD
- **GitHub Pages**: Free hosting with version control integration

### Performance Considerations
- **Minimal HTTP Requests**: Combined CSS and JavaScript files
- **Optimized Loading**: Asynchronous content loading
- **Caching Strategy**: Static assets with appropriate cache headers

## Technical Decisions

### CSS Architecture
- **Problem**: Maintaining consistent theming across components
- **Solution**: CSS custom properties with centralized theme management
- **Benefits**: Easy theme switching, consistent design system, maintainable code

### Content Management
- **Problem**: Separating content from presentation for easy updates
- **Solution**: JSON-based content storage with JavaScript rendering
- **Benefits**: Non-technical content updates, internationalization ready, clean separation of concerns

### JavaScript Approach
- **Problem**: Modern functionality without build complexity
- **Solution**: Vanilla JavaScript with modern ES6+ features
- **Benefits**: No build process, faster loading, easier debugging

This architecture provides a solid foundation for a professional portfolio website that's both performant and maintainable, with room for future enhancements like backend integration or advanced interactive features.
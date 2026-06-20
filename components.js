const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">TEAM <span>VEGA</span></div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="sponsors.html">Sponsors</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>
    </nav>
`;

const footerHTML = `
    <footer id="contact">
        <div class="footer-content">
            <h2>TEAM VEGA</h2>
            <p>Contact us at: <a href="mailto:hello@teamvega.example.com">hello@teamvega.example.com</a></p>
            <div class="social-links">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
            </div>
            <p class="copyright">&copy; 2026 Team Vega. Ad Astra.</p>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) navPlaceholder.innerHTML = navbarHTML;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
    
    // Ensure smooth scrolling script is attached to new dynamically inserted links if needed
});

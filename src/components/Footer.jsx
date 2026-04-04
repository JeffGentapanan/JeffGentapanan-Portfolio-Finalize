export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/JeffGentapanan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jeff-gentapanan-4b76b8370/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/share/182aXsGi6r/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p>&copy; {currentYear} Designed and Built by Jeff A. Gentapanan.</p>
      </div>
    </footer>
  );
}
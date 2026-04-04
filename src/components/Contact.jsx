export default function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's talk!</h3>
          <p>I'm always open to new opportunities and collaborations...</p>
          <ul className="contact-details">
            <li><i className="fas fa-envelope"></i> jeff.gentapanan2004525@gmail.com</li>
            <li><i className="fas fa-phone-alt"></i> 09944935058</li>
            <li><i className="fas fa-map-marker-alt"></i> Philippines</li>
            <li><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/jeff-gentapanan-4b76b8370/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          </ul>
        </div>
        <form className="contact-form" action="https://formsubmit.co/jeff.gentapanan2004525@gmail.com" method="POST">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}
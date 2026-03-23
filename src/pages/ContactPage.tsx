import './ContactPage.css';

export function ContactPage() {
  return (
    <div className="page-container contact-page">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p>Have questions? We'd love to hear from you.</p>
          <p><strong>Email:</strong> your-email@example.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-890</p>
          <p>We typically respond within 24 hours.</p>
        </div>
        <form className="contact-form" action="https://formspree.io/f/YOUR_UNIQUE_FORM_ID" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
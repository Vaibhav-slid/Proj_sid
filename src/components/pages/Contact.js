import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    try {
      console.log('Form submitted:', { name, email, message });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
            I'm always happy to connect with students, fellow educators, or professionals. Drop me a message and I'll get back to you as soon as possible!
          </p>
          <ul className="contact-details">
            <li><strong>Email:</strong> professor@example.com</li>
            <li><strong>Office Hours:</strong> Mon-Fri, 10 AM - 6 PM</li>
            <li><strong>Location:</strong> SSTC Bhilai, Department of Computer Science</li>
            {/* <li><strong>LinkedIn:</strong> <a href="" target="_blank" rel="noopener noreferrer">linkedin.com/in/professor</a></li> */}
          </ul>
        </div>
        <div className="contact-form-section">
          {submitted ? (
            <div className="thank-you-message">
              <h2>Thank you for reaching out!</h2>
              <p>I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {error && <p className="error-message">{error}</p>}

              <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

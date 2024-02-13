import emailjs from "emailjs-com";
import { useState } from "react";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      // .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
          // Optionally, reset the form fields
          setFormData({
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import React, { useState } from "react";
import "./Contact.css";
import { UserDataPost } from "../Api/CoreApi";
import { message } from "antd";

export default function Contact() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await UserDataPost(formData);

      message.success({
        content: "✅ Thank you! Your message has been sent successfully.",
        duration: 3,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      message.error({
        content: "❌ Unable to send your message. Please try again.",
        duration: 3,
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">

        <h2 className="contact__title">Let's Connect</h2>

        <p className="contact__subtitle">
          I'm currently open to Python Full Stack Developer opportunities,
          freelance projects, internships, and collaborations. Feel free to
          contact me—I’d love to hear from you.
        </p>

        {/* Contact Info */}

        <div className="contact__cards">

          <div className="contact__card">
            <div className="contact__icon">📞</div>

            <h3 className="contact__card-title">Phone</h3>

            <p className="contact__card-info">
              +91 9993334440
            </p>
          </div>

          <div className="contact__card">
            <div className="contact__icon">📧</div>

            <h3 className="contact__card-title">Email</h3>

            <p className="contact__card-info">
              yash@example.com
            </p>
          </div>

          <div className="contact__card">
            <div className="contact__icon">📍</div>

            <h3 className="contact__card-title">Location</h3>

            <p className="contact__card-info">
              Bangalore, Karnataka, India </p>
          </div>

        </div>

        {/* Contact Form */}

        <form className="contact__form" onSubmit={handleSubmit}>

          <div className="contact__row">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            pattern="[0-9]{10}"
            maxLength="10"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message here..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="contact__button"
          >
            Send Message 🚀
          </button>

        </form>

      </div>

      <br />
      <hr />
    </section>
  );
}
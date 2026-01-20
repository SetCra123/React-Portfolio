import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "../Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_zkr9jjb",
        "template_45uk6xd",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message
        },
        "6GUtKL1oMyjHnNJeE"
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="contact-card">
        <h1>Contact</h1>
        <p>
          Interested in working together or have a question?  
          Send me a message and I’ll get back to you.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </motion.div>
  );
}

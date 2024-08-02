import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "" // Added subject field if you want to use it
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Use 'name' instead of 'id'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail", // Replace with your EmailJS service ID
        "template_jzwceqx", // Replace with your EmailJS template ID
        e.target,
        "0ZsvfOp81ktqJ_0uE" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    setFormData({ name: "", email: "", message: "", subject: "" }); // Reset form after submission
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-around mb-10">
          <div className="w-full md:w-2/3">
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" // Match this with the template variable
                  className="w-full px-4 py-2 text-gray-900 rounded-lg"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" // Match this with the template variable
                  className="w-full px-4 py-2 text-gray-900 rounded-lg"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message" // Match this with the template variable
                  className="w-full px-4 py-2 text-gray-900 rounded-lg"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject" // Match this with the template variable if used
                  className="w-full px-4 py-2 text-gray-900 rounded-lg"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="font-medium bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

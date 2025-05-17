import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-2xl font-bold text-accent border-b border-accent mb-4 inline-block">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 text-white rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 text-white rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 bg-gray-800 text-white rounded"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-accent text-white rounded hover:bg-cyan-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
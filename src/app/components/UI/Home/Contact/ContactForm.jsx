"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/send-messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to send message");

      setSuccess(true);
      setFormData({ name: "", email: "", description: "" });
    } catch (error) {
      console.error("Message send failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="contact_forms w-full px-2 py-3 rounded-xl"
            style={{ background: "linear-gradient(...)" }}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="contact_forms w-full px-2 py-3 rounded-xl"
            style={{ background: "linear-gradient(...)" }}
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="Type your message here..."
            className="contact_forms w-full px-2 py-3 rounded-xl"
            style={{ background: "linear-gradient(...)" }}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 cursor-pointer flex justify-center items-center gap-2 px-6 py-3 text-white font-semibold rounded-[40px] 
    border border-white/20 bg-white/10 shadow-[0px_0px_12px_0px_rgba(255,255,255,0.24)] 
    transition-all duration-300 ease-in-out hover:bg-white/20"
        >
          Send Message
        </button>

        {success && (
          <p className="text-green-500 mt-2">Message sent successfully!</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

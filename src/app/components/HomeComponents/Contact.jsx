"use client";

import { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      );

      Swal.fire({
        icon: "success",
        title: "Message sent successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      formRef.current.reset(); // important
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to send message",
        text: error.text || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pb-16">
      <div className="text-center my-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>

        <p className="max-w-2xl mx-auto opacity-80">
          Send us a message and our team will respond as soon as possible.
        </p>
      </div>

      <div className="bg-base-200 border border-primary/20 rounded-3xl shadow-lg overflow-hidden my-12">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left */}
          <div className="lg:col-span-2 text-white p-10 space-y-6 place-content-center">
            <aside className="place-items-center text-center">
              <Image src="/logo.png" alt="Camera" width={150} height={150} />
              <h2 className="text-2xl text-primary font-semibold">CameraCrew</h2>
              <p className="text-blue-200 mt-1"><span className="text-primary">Email:</span> mdjahirulislamtuku@gmail.com</p>
            </aside>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="input input-bordered w-full"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-bordered w-full"
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input input-bordered w-full"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="textarea textarea-bordered w-full"
              />

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary shadow-none w-full uppercase"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

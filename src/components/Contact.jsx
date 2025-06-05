import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toastPosition, setToastPosition] = useState("bottom-center");

  useEffect(() => {
    function updateToastPosition() {
      if (window.innerWidth < 768) {
        setToastPosition("top-center");
      } else {
        setToastPosition("bottom-center");
      }
    }

    updateToastPosition();

    window.addEventListener("resize", updateToastPosition);
    return () => window.removeEventListener("resize", updateToastPosition);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_03jkwcc",
        "template_9tz7zwa",
        formRef.current,
        "BaFswMHyviXUIlHws"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          toast.success("Message sent successfully!");
          setTimeout(() => setSuccess(false), 2000);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Message failed. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className=" sm:mb-[-60px] relative w-full min-h-screen bg-zinc-950 text-white px-6 md:px-20 py-20 overflow-hidden flex flex-col"
    >
      <Toaster position={toastPosition} />

      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute w-[40rem] h-[40rem] bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-[-5rem] -left-40 z-0"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute w-[30rem] h-[30rem] bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-[-4rem] -right-20 z-0"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-emerald-400 mb-12 text-center z-10"
      >
        Contact Me
      </motion.h2>

      {/* Form & Map */}
      <div className="relative z-10 flex flex-col md:flex-row gap-10 flex-grow">
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col gap-4 md:flex-1"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-zinc-700 p-3 rounded text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-zinc-700 p-3 rounded text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="bg-zinc-700 p-3 rounded text-white placeholder-gray-400"
          ></textarea>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            disabled={loading}
            className={`mt-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 w-fit self-center
              ${
                loading
                  ? "bg-emerald-700 text-white cursor-not-allowed"
                  : "bg-emerald-500 hover:bg-emerald-600 text-black"
              }`}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : success ? (
              "Sent ✅"
            ) : (
              "Send"
            )}
          </motion.button>
        </form>

        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.356137883125!2d85.1067803037594!3d25.5936480416968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581270368427%3A0xe526d92f4bacc843!2sGardanibagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1749122934877!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "450px", borderRadius: "0.5rem" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="md:flex-1 shadow-md border border-emerald-600"
        ></iframe>
      </div>

      {/* Bottom bar: Follow me + Footer */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-emerald-400 select-none gap-4">
        <div className="flex items-center gap-6 text-3xl">
          <span className="font-semibold text-lg select-none">Follow me on:</span>
          <a href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-red-500 hover:scale-90 transition-colors" />
          </a>
          <a href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 hover:scale-90 transition-colors" />
          </a>
          <a href="https://www.facebook.com/animesh.prakash.16" target="_blank" rel="noreferrer">
            <FaFacebookF className=" text-2xl hover:text-blue-500 hover:scale-90 transition-colors" />
          </a>
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-right text-sm font-semibold"
        >
          <h3 className="text-lg font-semibold mb-1">ParkourX</h3>
          <p>
  &copy; {new Date().getFullYear()}{" "}
  <a
    className="cursor-pointer text-md text-emerald-400 hover:text-emerald-600"
    target="_blank"
    rel="noreferrer noopener"
    href="https://animesh-mern.vercel.app/"
  >
    Animesh Prakash
  </a>
  . All rights reserved.
</p>

        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;

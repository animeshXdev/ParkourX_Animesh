// src/components/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img1 from '../assets/WhatsApp Image 2025-05-31 at 01.06.48_b13f3a3d.jpg'
import img2 from '../assets/WhatsApp Image 2025-05-31 at 01.06.49_ed9630cf.jpg'
import img3 from '../assets/WhatsApp Image 2025-05-31 at 01.06.51_309949c7.jpg'
import img4 from '../assets/WhatsApp Image 2025-05-31 at 01.06.51_c558b366.jpg'
import img5 from '../assets/WhatsApp Image 2025-05-31 at 01.06.51_e6ba370e.jpg'
import img6 from '../assets/WhatsApp Image 2025-05-31 at 01.06.52_10afa361.jpg'
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const galleryImages = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const modalRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus trap inside modal for accessibility
  useEffect(() => {
    if (!isOpen) return;
    const focusableElements =
      modalRef.current.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    firstElement.focus();

    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        nextImage();
      } else {
        // Swipe right
        prevImage();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-16 w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 px-6 text-center relative overflow-hidden"
        id="home"
        style={{ marginTop: 0 }}
      >
        {/* Animated background blobs */}
        <div
          className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500 rounded-full opacity-20 filter blur-3xl animate-pulse scale-110"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full opacity-15 filter blur-2xl animate-pulse scale-90"
          style={{ animationDuration: "7s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-24 left-1/2 w-72 h-72 bg-emerald-600 rounded-full opacity-12 filter blur-3xl animate-pulse scale-100"
          style={{ animationDuration: "9s", animationDelay: "4s" }}
        ></div>

        {/* Floating circles */}
        <div
          className="absolute top-16 left-12 w-10 h-10 bg-emerald-400 rounded-full opacity-30"
          style={{ animation: "floatUpDown 6s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute top-28 right-16 w-8 h-8 bg-emerald-500 rounded-full opacity-25"
          style={{ animation: "floatSideways 7s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-24 right-28 w-12 h-12 bg-emerald-600 rounded-full opacity-28"
          style={{ animation: "floatUpDown 5s ease-in-out infinite", animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-16 left-8 w-14 h-14 bg-emerald-300 rounded-full opacity-25"
          style={{ animation: "floatSideways 8s ease-in-out infinite", animationDelay: "3s" }}
        ></div>

        <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          Hi, I’m <span className="text-emerald-400">Animesh</span>
        </h1>

        <p className="relative z-10 text-lg md:text-2xl text-gray-300 font-mono mb-8 min-h-[3rem]">
          <Typewriter
            words={[
              "Parkour athlete.",
              "Motion lover.",
              "Chasing freedom one jump at a time.",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <Link
          to="/contact"
          className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black font-semibold rounded-xl shadow-lg transition-transform duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-emerald-500/70"
        >
          Contact Me <ArrowRight size={20} />
        </Link>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="relative max-w-6xl mx-auto px-6 py-16 text-white overflow-hidden"
      >
        {/* Animated background blobs for gallery */}
        <div
          className="absolute top-8 left-1/4 w-64 h-64 bg-emerald-500 rounded-full opacity-20 filter blur-3xl animate-pulse scale-110"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-16 right-1/4 w-52 h-52 bg-emerald-400 rounded-full opacity-15 filter blur-2xl animate-pulse scale-90"
          style={{ animationDuration: "7s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-emerald-600 rounded-full opacity-12 filter blur-3xl animate-pulse scale-100"
          style={{ animationDuration: "9s", animationDelay: "4s" }}
        ></div>

        {/* Floating circles */}
        <div
          className="absolute top-28 left-12 w-10 h-10 bg-emerald-400 rounded-full opacity-30"
          style={{ animation: "floatUpDown 6s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute top-36 right-16 w-8 h-8 bg-emerald-500 rounded-full opacity-25"
          style={{ animation: "floatSideways 7s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-24 right-28 w-12 h-12 bg-emerald-600 rounded-full opacity-28"
          style={{ animation: "floatUpDown 5s ease-in-out infinite", animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-16 left-8 w-14 h-14 bg-emerald-300 rounded-full opacity-25"
          style={{ animation: "floatSideways 8s ease-in-out infinite", animationDelay: "3s" }}
        ></div>

        <h2 className="text-4xl font-bold mb-10 text-center text-emerald-400 relative z-10">
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 relative z-10">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" ? openModal(i) : null)}
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={modalRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="relative max-w-4xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white hover:text-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded p-1 bg-black bg-opacity-30"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:text-emerald-400 transition focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded p-1 bg-black bg-opacity-30"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>

            {/* Image */}
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg select-none"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      )}

      {/* Custom animation keyframes in style tag */}
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes floatSideways {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(15px); }
          }
        `}
      </style>
    </>
  );
};

export default Home;

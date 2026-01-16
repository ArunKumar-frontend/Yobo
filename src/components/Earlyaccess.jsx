"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import emailjs from "@emailjs/browser";

export default function EarlyAccessModal({ onClose }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [showNotification, setShowNotification] = React.useState(false);
  const [notification, setNotification] = React.useState({
    type: "",
    message: "",
  });

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setNotification({
        type: "error",
        message: "⚠️ Please enter your email address",
      });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
      return;
    }

    if (!validateEmail(email)) {
      setNotification({
        type: "error",
        message: "❌ Invalid email format. Please check your email",
      });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
      return;
    }

    setIsSubmitting(true);

    try {
      // 1️⃣ Submit to Google Form
      const formData = new FormData();
      formData.append("entry.1523033229", email); // Google Form entry
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSd3fpntK-vxD4Qeq-QRz9XvMi1xH4p5jAoByxYlSgeSGRnhbw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      // 2️⃣ Send Thank You email using EmailJS
      await emailjs.send(
        "service_1j3vkr2", // Replace with your EmailJS Service ID
        "template_7vl5wgg", // Replace with your EmailJS Template ID
        {
          name:  email.split("@")[0], // Use name or part of email
          user_email: email,
        },
        "QHSJURGR73JEhK1Sl" // Replace with your EmailJS Public Key
      );

      setNotification({
        type: "success",
        message: "🎉 Thank you! Check your email for confirmation.",
      });
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
        setTimeout(onClose, 300);
      }, 2000);
    } catch (error) {
      console.log(error);
      setNotification({
        type: "error",
        message: "🌐 Something went wrong. Try again later.",
      });
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
        setIsSubmitting(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Wrapper */}
      <motion.div
        className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div
          className="relative w-full max-w-md rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient Header */}
          <div className="h-24 bg-gradient-to-br from-black via-gray-800 to-gray-900 flex items-center px-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl">
                🚀
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Get Early Access</h2>
                <p className="text-sm text-gray-300">Be the first to experience</p>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              className="ml-auto text-gray-300 hover:text-white transition"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              Join our early access list and get exclusive updates, features, and launch benefits.
            </p>

            <div className="mt-6 space-y-4">
              {/* Name Input */}
             

              {/* Email Input */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                disabled={isSubmitting}
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition disabled:opacity-50 disabled:cursor-not-allowed"
              />

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get Early Access"}
              </motion.button>
            </div>

            {/* Footer hint */}
            <p className="mt-4 text-xs text-gray-400 text-center">
              Invites are limited. No marketing emails.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Notification Popup */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[1100]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[320px] ${
                notification.type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                  : "bg-gradient-to-r from-red-500 to-rose-600 text-white"
              }`}
            >
              <div className="text-2xl">{notification.type === "success" ? "✓" : "✕"}</div>
              <p className="font-medium text-sm">{notification.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

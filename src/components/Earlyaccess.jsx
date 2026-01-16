"use client";
import { motion } from "framer-motion";

export default function EarlyAccessModal({ onClose }) {
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
                <h2 className="text-xl font-bold text-white">
                  Get Early Access
                </h2>
                <p className="text-sm text-gray-300">
                  Be the first  experience
                </p>
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
              Join our early access list and get exclusive updates, features,
              and launch benefits.
            </p>

            <form className="mt-6 space-y-4">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-black 
                focus:border-black transition"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold 
                shadow-lg hover:shadow-xl transition-all"
              >
                Get Early Access
              </motion.button>
            </form>

            {/* Footer hint */}
            <p className="mt-4 text-xs text-gray-400 text-center">
Invites are limited. No marketing emails.            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

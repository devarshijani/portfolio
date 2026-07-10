"use client"

import { motion } from "framer-motion"

export default function CodolioCard() {
  const codolioUrl = process.env.NEXT_PUBLIC_CODOLIO;

  if (!codolioUrl) return null;

  return (
    <section id="codolio" className="py-20 px-4 bg-black/95 relative overflow-hidden">
      {/* Floating background blobs to match Hero */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl float-animation z-0"></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl float-animation z-0"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          My <span className="gradient-text">Codolio</span> Dashboard
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto"
        >
          Track my coding journey across LeetCode, GFG, Codeforces, and more — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shadow-xl rounded-xl overflow-hidden border border-white/10 backdrop-blur-xl"
        >
          <iframe
            src={codolioUrl}
            title="Codolio Card"
            width="100%"
            height="800"
            className="w-full min-h-[800px] rounded-xl border-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

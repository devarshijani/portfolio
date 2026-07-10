"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Mirani Marketing",
    location: "Surat, Gujarat, India",
    role: "Full-Stack Developer Intern",
    date: "May 2026 – Jun 2026",
    bullets: [
      <>
        Built Solmarkt, a production B2B solar marketplace deployed at{" "}
        <a
          href="https://solmarkt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:underline"
        >
          solmarkt.com
        </a>
      </>,
      "Engineered the backend with Next.js 16 Server Actions and Firebase Admin SDK — multi-role JWT auth, OTP verification, password reset via Nodemailer.",
      "Designed 11 Firestore collections and a zero-polling real-time notification system."
    ]
  },
  {
    company: "Webito Infotech",
    location: "Surat, Gujarat, India",
    role: "Node.js Developer Intern",
    date: "Dec 2025 – Feb 2026",
    bullets: [
      "Built a production backend processing 500+ API requests daily at 99.5% uptime.",
      "Created and validated 15+ REST endpoints with comprehensive error handling.",
      "Optimized query performance ~25% through schema design.",
      "Collaborated with 5+ senior engineers on CI/CD pipeline."
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 w-full bg-gray-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey in building, hardening, and scaling software systems in production.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent opacity-40"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Icon / Dot */}
                <div className="absolute left-2.5 md:left-1/2 transform -translate-x-1/2 top-4 w-4.5 h-4.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 border-4 border-[#0a0a0a] z-10 shadow-lg pulse-glow"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="glass p-6 sm:p-8 rounded-2xl hover-lift border border-white/5 shadow-xl transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-pink-500/20 to-orange-400/20 rounded-full text-xs font-semibold border border-orange-400/30 text-orange-400 mb-4 shadow-sm">
                      <Calendar size={12} />
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-bold mb-1 text-white">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-400 text-sm mb-4 font-medium">
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} className="text-gray-500" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-gray-500" />
                        {exp.location}
                      </span>
                    </div>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed pl-4 list-disc marker:text-orange-400">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="hover:text-white transition-colors duration-200">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

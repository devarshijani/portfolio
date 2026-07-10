"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Zap,
      title: "Production First",
      description: "Two platforms deployed and serving real users. I design for the day after launch — security, fallbacks, and monitoring included.",
    },
    {
      icon: Code,
      title: "Real-Time Systems",
      description: "Authenticated sockets, live location streams, zero-polling notifications — I build things that update the moment the world does.",
    },
    {
      icon: Palette,
      title: "Clean Architecture",
      description: "Role-based auth, service layers, validated environments, consistent APIs. Code a teammate can pick up without a tour guide.",
    },
  ]

  const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "Express", 
    "MongoDB", "Firestore", "PostgreSQL", "Socket.io", "Tailwind", "Git"
  ]

  return (
    <section id="about" className="py-28 bg-gray-950/60 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Logic-first builder, production-first mindset. I measure my work by one thing: does it run reliably for real users?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 sm:p-10 rounded-2xl hover-lift shadow-xl">
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                I'm pursuing a B.Tech in <strong>Artificial Intelligence & Data Science</strong> at A.D. Patel Institute of Technology ('27), but most of my learning happens in production. As a full-stack intern I architected the backend of <strong>Solmarkt</strong> — a live B2B solar marketplace with 5 user roles, 11 Firestore collections, and 30+ server actions covering everything from RFQs to order fulfillment.
              </p>
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                Before that I built <strong>Sarthi</strong>, a real-time ride-sharing platform: JWT-authenticated sockets, geospatial captain matching with MongoDB 2dsphere, live location streaming onto Leaflet maps, and OTP-secured ride starts with expiry and lockout. I care about the unglamorous parts — auth, rate limiting, error handling — because that's what production means.
              </p>
              <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
                Outside code: <strong>NCC Army Attachment Training</strong> at Jamnagar military base taught me discipline and how to function in a team under pressure.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-6">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-3.5 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30 text-white"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Value Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl hover-lift transition-shadow shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl text-white shadow-sm flex-shrink-0">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

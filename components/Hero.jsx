"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Award, Zap, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = [
  "Full-Stack Developer",
  "Backend Architect",
  "Real-Time Systems Builder",
  "Production-First Engineer"
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const resumeUrl = process.env.NEXT_PUBLIC_CV || "/Devarshi_Jani_Resume.pdf"
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB || "https://github.com/devarshijani"
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/devarshi-jani-7074b52a0/"
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_EMAIL || "janidevarshi8@gmail.com"}`

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 md:py-28">
      {/* Background Floating Animation Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl float-animation"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Status Beacon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-green-400 mb-8 border-green-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>2 platforms live in production</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-center tracking-tight"
          >
            Hi, I'm <span className="gradient-text">Devarshi Jani</span>
          </motion.h1>

          {/* Rotating Role */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center mb-6 h-10 flex items-center justify-center"
          >
            <span className="text-gray-400 mr-2 font-medium">I'm a</span>
            <span className="gradient-text font-black min-w-[280px] text-left sm:text-center inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-center leading-relaxed"
          >
            I build platforms that run in the real world — a B2B solar marketplace serving live users and a real-time ride-sharing system with sockets, maps, and OTP-secured trips. From schema design to deployment, I ship the whole stack.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full sm:w-auto"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift pulse-glow w-full sm:w-auto"
            >
              <a href="#projects">
                See My Work
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(resumeUrl, "_blank")}
              className="border-gray-600 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift w-full sm:w-auto cursor-pointer"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Stats Cards Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full mb-16"
          >
            {[
              { num: "02", label: "Platforms in production", icon: Zap },
              { num: "02", label: "Internships completed", icon: Award },
              { num: "11", label: "Day hackathon build", icon: Code },
            ].map((stat, i) => (
              <div key={i} className="glass p-5 rounded-2xl flex flex-col items-center hover-lift border border-white/5 shadow-lg">
                <stat.icon className="text-orange-400 w-5 h-5 mb-2 opacity-80" />
                <span className="text-3xl font-extrabold gradient-text tracking-tight">{stat.num}</span>
                <span className="text-sm text-gray-400 text-center mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Socials Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center space-x-4 sm:space-x-6"
          >
            {[
              { icon: Github, href: githubUrl, label: "GitHub" },
              { icon: Linkedin, href: linkedinUrl, label: "LinkedIn" },
              { icon: Mail, href: emailUrl, label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-16"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <ArrowDown size={24} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

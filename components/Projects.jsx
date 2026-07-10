"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Solmarkt",
    description:
      "A live B2B solar marketplace connecting Customers, EPCs, Vendors, and Installers. Architected the full backend, featuring 5 distinct user roles, 11 Firestore collections, and 30+ Next.js Server Actions handling bids, milestones, and order fulfillment. Integrated a zero-polling notification system and a query-fallback layer for free-tier resilience.",
    image: "/projects/solmarkt.png",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Firestore", "JWT", "Tailwind CSS"],
    liveUrl: "https://solmarkt.com",
    githubUrl: "https://github.com/devarshijani/solmarkt",
  },
  {
    title: "Sarthi",
    description:
      "A MERN ride-sharing platform with separate rider and driver portals. Features JWT-authenticated Socket.io channels, geospatial captain matching with MongoDB 2dsphere, real-time driver tracking on Leaflet maps, 6-digit OTP ride starts with rate lockout, and dynamic fares — hardened with Helmet.js security and express rate-limit.",
    image: "/projects/sarthi-new.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Leaflet", "GSAP"],
    liveUrl: "https://sarthi-pied.vercel.app/",
    githubUrl: "https://github.com/devarshijani/sarthi",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent production systems and developer builds.
          </p>
        </motion.div>

        {/* 2-Column Responsive Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden hover-lift group flex flex-col md:flex-row lg:flex-col border border-white/5 shadow-xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden md:w-3/5 lg:w-full md:flex-shrink-0 min-h-[220px] bg-black/40">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={350}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ minHeight: "220px" }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm rounded-full transition-colors border border-white/10"
                    aria-label={`${project.title} live preview`}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm rounded-full transition-colors border border-white/10"
                    aria-label={`${project.title} source code`}
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow md:w-2/5 lg:w-full justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-200">{project.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-xs font-semibold border border-blue-500/20 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full w-full sm:w-auto font-bold shadow-md cursor-pointer border-transparent"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:text-white hover:border-white rounded-full w-full sm:w-auto font-bold cursor-pointer"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

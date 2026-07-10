"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: "/logos/react.png" },
      { name: "Next.js", logo: "/logos/next.png" },
      { name: "JavaScript", logo: "/logos/javascript.png" },
      { name: "HTML & CSS", logo: "/logos/html.png" },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Node.js & Express", logo: "/logos/node.png" },
      { name: "MongoDB & Firestore", logo: "/logos/mongodb.png" },
      { name: "SQL (Postgres/MySQL)", logo: "/logos/sql.png" },
    ],
  },
  {
    title: "Infrastructure & Tooling",
    skills: [
      { name: "Git & GitHub", logo: "/logos/git.png" },
      { name: "Vercel & Render", logo: "/logos/vercel.png" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 w-full bg-gray-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 md:mb-6">
            My Digital <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A curated collection of technologies and frameworks I use to build modern, high-performance web applications.
          </p>
        </motion.div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-8 rounded-2xl hover-lift border border-white/5 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center gradient-text">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 shadow-sm border border-white/5">
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        width={24}
                        height={24}
                        className="rounded object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-white hover:text-orange-400 transition-colors duration-200">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LeetCode stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl border border-white/5 shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 hover-lift"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white mb-1">LeetCode Dashboard</h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              <b>150+ problems solved</b> · arrays, strings, recursion, hashing, stacks, queues, linked lists.
            </p>
          </div>
          <motion.a
            href="https://leetcode.com/devarshijani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-pink-500/20 to-orange-400/20 text-orange-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 hover:border-transparent text-sm rounded-full font-bold transition-all duration-300 shadow-lg border border-orange-400/30 cursor-pointer flex-shrink-0"
          >
            View Profile →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

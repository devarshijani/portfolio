"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB || "https://github.com/devarshijani"
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/devarshi-jani-7074b52a0/"
  const emailUrl = `mailto:${process.env.NEXT_PUBLIC_EMAIL || "janidevarshi8@gmail.com"}`

  return (
    <footer className="border-t border-white/10 bg-black/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium text-center sm:text-left">
            © <span suppressHydrationWarning>{currentYear}</span> devarshi<span className="text-orange-400">.jani</span> — designed & built from scratch
          </p>
          
          <div className="flex space-x-4">
            {[
              { icon: Github, href: githubUrl, label: "GitHub" },
              { icon: Linkedin, href: linkedinUrl, label: "LinkedIn" },
              { icon: Mail, href: emailUrl, label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

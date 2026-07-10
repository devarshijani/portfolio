"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast"

export default function Contact() {
  const contactEmail = process.env.NEXT_PUBLIC_EMAIL || "janidevarshi8@gmail.com"
  const contactPhone = process.env.NEXT_PUBLIC_PHONE || "+91 91068 84503"
  const contactLocation = process.env.NEXT_PUBLIC_LOCATION || "Surat, Gujarat, India"

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: contactPhone,
      href: `tel:${contactPhone.replace(/\s+/g, "")}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: contactLocation,
      href: `https://maps.google.com/?q=${encodeURIComponent(contactLocation)}`,
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = {
      firstName: formData.get("firstName")?.trim(),
      lastName: formData.get("lastName")?.trim() || "",
      email: formData.get("email")?.trim(),
      message: formData.get("message")?.trim(),
      subject: formData.get("subject")?.trim(),
    }

    if (!data.firstName || !data.email || !data.message || !data.subject) {
      toast.error("Please fill in all required fields")
      return
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    const toastId = toast.loading("Sending message...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        toast.success("Message sent successfully!", { id: toastId })
        e.target.reset()
      } else {
        // Fallback to mailto if API endpoint fails (e.g. SMTP config missing)
        toast.dismiss(toastId)
        triggerMailtoRedirect(data)
      }
    } catch (err) {
      toast.dismiss(toastId)
      triggerMailtoRedirect(data)
    }
  }

  const triggerMailtoRedirect = (data) => {
    toast.success("Opening your local email client...")
    const subject = encodeURIComponent(data.subject)
    const body = encodeURIComponent(
      `Hi Devarshi,\n\n${data.message}\n\n— ${data.firstName} ${data.lastName}\nSender Email: ${data.email}`
    )
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 w-full bg-gray-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl h-full flex flex-col justify-between border border-white/5 shadow-xl">
              <div>
                <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 group cursor-pointer"
                    >
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300 text-white flex-shrink-0">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{info.title}</p>
                        <p className="font-semibold text-white group-hover:text-orange-400 transition-colors duration-200">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-4">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I'm always interested in hearing about new opportunities, internships, and full-stack development projects. Whether you have a specific role or just want to say hi, my inbox is open!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6 border border-white/5 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold mb-2 text-gray-300">First Name *</label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="Devarshi"
                    required
                    className="bg-white/5 border-gray-600 focus:border-orange-400 text-white rounded-lg px-4 py-2"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Last Name</label>
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Jani"
                    className="bg-white/5 border-gray-600 focus:border-orange-400 text-white rounded-lg px-4 py-2"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-300">Email *</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="devarshi@example.com"
                  required
                  className="bg-white/5 border-gray-600 focus:border-orange-400 text-white rounded-lg px-4 py-2"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-300">Subject *</label>
                <Input
                  name="subject"
                  type="text"
                  placeholder="Project Collaboration"
                  required
                  className="bg-white/5 border-gray-600 focus:border-orange-400 text-white rounded-lg px-4 py-2"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2 text-gray-300">Message *</label>
                <Textarea
                  name="message"  
                  placeholder="Let's build something that ships..."
                  rows={5}
                  required
                  className="bg-white/5 border-gray-600 focus:border-orange-400 text-white rounded-lg resize-none px-4 py-2"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-lg font-bold transition-all duration-300 hover-lift pulse-glow cursor-pointer border-transparent"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

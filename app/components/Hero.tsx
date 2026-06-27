'use client'

import astro3 from "../astro3.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, ArrowRight, Mail } from 'lucide-react'
import Image from 'next/image'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] mt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left — Headline + CTAs */}
          <div className="order-1 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-6"
            >
              Available for work
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
            >
              FULL-STACK<br />
              <span className="text-outline">DEVELOPER</span><br />
              & DESIGNER
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-text-secondary mt-8 text-base leading-relaxed max-w-sm"
            >
              Based in Ghana. I build fast, accessible web applications
              and design interfaces people actually enjoy using.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Link
                href="/#projects"
                className="group flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:scale-[1.02]"
              >
                View my work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="/resume.pdf"
                download
                className="group flex items-center gap-2 border-2 border-border hover:border-accent bg-transparent hover:bg-accent/5 text-text-secondary hover:text-accent px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end order-2 lg:order-2"
          >
            <div className="bg-surface border border-border rounded-3xl p-8 text-center w-80 hover:border-accent transition-colors duration-300">

              {/* Photo */}
              <div className="w-full h-72 rounded-2xl bg-surface-2 mb-6 overflow-hidden border border-border">
                <Image
                  src={astro3}
                  alt="Joseph Boafo Afful"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name */}
              <h2 className="text-text-primary font-black text-lg tracking-widest uppercase">
                Joseph Boafo Afful
              </h2>

              {/* Accent divider */}
              <div className="flex items-center justify-center gap-2 my-4">
                <div className="w-8 h-0.5 bg-border" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-8 h-0.5 bg-border" />
              </div>

              {/* Tagline */}
              <p className="text-text-secondary text-sm leading-relaxed px-2">
                Full-Stack Developer & Designer building clean digital experiences.
              </p>

              {/* Socials */}
              <div className="flex justify-center gap-3 mt-6">
                <a
                  href="https://github.com/astrolabscig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-surface-2 hover:bg-accent hover:text-white text-text-secondary border border-border hover:border-accent px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300"
                >
                  <SiGithub size={12} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-surface-2 hover:bg-accent hover:text-white text-text-secondary border border-border hover:border-accent px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300"
                >
                  <FaLinkedin size={12} />
                  LinkedIn
                </a>
                <a
                  href="mailto:you@email.com"
                  className="flex items-center gap-1.5 bg-surface-2 hover:bg-accent hover:text-white text-text-secondary border border-border hover:border-accent px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300"
                >
                  <Mail size={12} />
                  Email
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
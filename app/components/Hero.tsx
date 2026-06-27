'use client'

import astro3 from "../astro3.png";
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Download, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] mt-16 flex items-center">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Right — Headline + CTAs */}
          <div className="order-1 lg:order-2">
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
                className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors"
              >
                View my work <ArrowRight size={16} />
              </Link>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 border border-border hover:border-accent text-text-secondary hover:text-accent px-6 py-3 rounded-lg font-medium text-sm transition-colors"
              >
                <Download size={16} /> Download CV
              </a>
            </motion.div>
          </div>

                    {/* Left — Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start order-2 lg:order-2">

            <div className="bg-surface border border-border rounded-2xl p-6 text-center w-64">

              {/* Photo */}
              <div className="w-full h-56 rounded-xl bg-surface-2 mb-5 overflow-hidden border border-border flex items-center justify-center text-text-muted text-sm">


                <Image
                  src={astro3}
                  alt="My image"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h2 className="text-text-primary font-bold text-base tracking-widest uppercase">
                Your Name
              </h2>

              <div className="w-6 h-0.5 bg-accent mx-auto my-3" />

              <p className="text-text-secondary text-xs leading-relaxed">
                Full-Stack Developer & Designer building clean digital experiences.
              </p>

              <div className="flex justify-center gap-5 mt-5">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors text-xs">
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors text-xs">
                  LinkedIn
                </a>
                <a href="mailto:you@email.com"
                  className="text-text-muted hover:text-accent transition-colors text-xs">
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
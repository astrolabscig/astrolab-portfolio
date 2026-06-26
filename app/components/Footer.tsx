import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { Mail } from 'lucide-react'

const navLinks = [
  { label: 'About',    href: '/#about'    },
  { label: 'Skills',   href: '/#skills'   },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact',  href: '/#contact'  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl text-text-primary hover:text-accent transition-colors">
              Astrolab<span className="text-accent">.</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Full-Stack Developer & Designer based in Kumasi, Ghana.
              Building clean web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-text-muted text-xs font-semibold tracking-[0.25em] uppercase">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-text-muted text-xs font-semibold tracking-[0.25em] uppercase">
              Connect
            </p>
            <div className="space-y-3">
              <a
                href="https://github.com/astrolabscig"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text-secondary hover:text-accent text-sm transition-colors"
              >
                <SiGithub size={14} />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-text-secondary hover:text-accent text-sm transition-colors"
              >
                <FaLinkedin size={14} />
                LinkedIn
              </a>
              <a
                href="mailto:you@email.com"
                className="flex items-center gap-2.5 text-text-secondary hover:text-accent text-sm transition-colors"
              >
                <Mail size={14} />
                astrolabscig@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Astrolab. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}
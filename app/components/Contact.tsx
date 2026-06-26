'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Mail, MapPin, ArrowRight} from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [state, handleSubmit] = useForm('mbdedewr')

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
            LET'S WORK<br />
            <span className="text-outline">TOGETHER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Info */}
          <div className="space-y-10">
            <p className="text-text-secondary text-base leading-relaxed">
              Whether you have a project in mind, a job opportunity,
              or just want to connect — my inbox is open. I'll get
              back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-surface border border-border rounded-lg p-2.5">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-xs mb-0.5">Email</p>
                  <a
                    href="mailto:you@email.com"
                    className="text-text-primary text-sm hover:text-accent transition-colors"
                  >
                    astrolabscig@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-surface border border-border rounded-lg p-2.5">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-xs mb-0.5">Location</p>
                  <p className="text-text-primary text-sm">
                    Kumasi, Ghana
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-text-muted text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Find me on
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/astrolabscig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-surface border border-border hover:border-accent text-text-secondary hover:text-accent px-4 py-2.5 rounded-lg text-sm transition-colors"
                >
                  <SiGithub size={15} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/astrolabscig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-surface border border-border hover:border-accent text-text-secondary hover:text-accent px-4 py-2.5 rounded-lg text-sm transition-colors"
                >
                  <FaLinkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {state.succeeded ? (
              <div className="bg-surface border border-accent rounded-xl p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="bg-accent rounded-full p-3">
                  <ArrowRight size={20} className="text-white" />
                </div>
                <h3 className="text-text-primary font-bold text-lg">Message sent</h3>
                <p className="text-text-secondary text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-text-muted text-xs font-medium tracking-wide uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-text-muted text-xs font-medium tracking-wide uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} className="text-accent text-xs" />
                  </div>
                </div>

                {/* Inquiry type */}
                <div className="space-y-2">
                  <label htmlFor="inquiry" className="text-text-muted text-xs font-medium tracking-wide uppercase">
                    Inquiry type
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-secondary text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select...</option>
                    <option value="job">Job opportunity</option>
                    <option value="freelance">Freelance project</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-text-muted text-xs font-medium tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                  <ValidationError field="message" prefix="Message" errors={state.errors} className="text-accent text-xs" />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm py-3.5 rounded-lg transition-colors"
                >
                  {state.submitting ? 'Sending...' : 'Send message'}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
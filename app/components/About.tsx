import AnimateIn from './AnimateIn'
import { Code2, Palette, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with modern frameworks, clean architecture, and scalable backends.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing interfaces grounded in design theory — visual hierarchy, spacing, typography, and colour.',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Every project ships fast, accessible, and optimized. Good experience is non-negotiable.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Section header */}
        <AnimateIn className="mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Who I am
          </p>
          <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
            ABOUT<br />
            <span className="text-outline">ME</span>
          </h2>
        </AnimateIn>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Bio */}
          <div className="space-y-6">
            <AnimateIn delay={0.1}>
              <p className="text-text-primary text-lg leading-relaxed font-light">
                I'm a Full-Stack Developer and Designer based in Ghana,
                currently studying Computer Science. I work at the intersection
                of engineering and design — writing clean code and building
                interfaces that actually feel good to use.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>             
              <p className="text-text-secondary text-base leading-relaxed">
                My background spans web development, systems programming, and
                graphic design. That combination means I can own a product from
                architecture to final pixel — something most developers or
                designers can't do alone.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.3}>
              <p className="text-text-secondary text-base leading-relaxed">
                Outside of building things, I'm deepening my knowledge in
                application security — with a focus on Ghana's growing fintech
                ecosystem.
              </p>
            </AnimateIn>

            {/* Stats row */}
            <AnimateIn delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-3xl font-black text-text-primary">5+</p>
                  <p className="text-text-muted text-xs mt-1 leading-snug">Projects shipped</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-text-primary">3+</p>
                  <p className="text-text-muted text-xs mt-1 leading-snug">Years building</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-accent">∞</p>
                  <p className="text-text-muted text-xs mt-1 leading-snug">Things to learn</p>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Right — Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1} direction='left'>
                <div
                  className="bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors group"
                  >
                  <div className="flex items-start gap-4">
                    <div className="bg-surface-2 rounded-lg p-2.5 group-hover:bg-accent transition-colors">
                      <item.icon
                        size={18}
                        className="text-accent group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold text-sm mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
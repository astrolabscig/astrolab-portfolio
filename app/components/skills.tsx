import { IconType } from 'react-icons'
import AnimateIn from './AnimateIn'
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus, SiPhp,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiHtml5,
  SiNodedotjs, SiGit, SiDocker, SiLinux,
  SiFigma, SiCanva,
} from 'react-icons/si'
import { TbApi, TbLayout, TbTypography, TbComponents } from 'react-icons/tb'

type Skill = {
  name: string
  icon: IconType
  color: string
}

const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript',  icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript',  icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'Python',      icon: SiPython,      color: '#3776AB' },
      { name: 'C++',         icon: SiCplusplus,   color: '#00599C' },
      { name: 'PHP',         icon: SiPhp,         color: '#777BB4' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React',         icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',       icon: SiNextdotjs,   color: '#FFFFFF' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', icon: SiFramer,      color: '#0055FF' },
      { name: 'HTML & CSS',    icon: SiHtml5,       color: '#E34F26' },
    ],
  },
  {
    category: 'Backend & Tools',
    skills: [
      { name: 'Node.js',   icon: SiNodedotjs, color: '#339933' },
      { name: 'Git',       icon: SiGit,       color: '#F05032' },
      { name: 'Docker',    icon: SiDocker,    color: '#2496ED' },
      { name: 'Linux',     icon: SiLinux,     color: '#FCC624' },
      { name: 'REST APIs', icon: TbApi,       color: '#A0A0A0' },
    ],
  },
  {
    category: 'Design',
    skills: [
      { name: 'Figma',          icon: SiFigma,       color: '#F24E1E' },
      { name: 'Canva',          icon: SiCanva,       color: '#00C4CC' },
      { name: 'UI/UX Design',   icon: TbLayout,      color: '#A0A0A0' },
      { name: 'Typography',     icon: TbTypography,  color: '#A0A0A0' },
      { name: 'Design Systems', icon: TbComponents,  color: '#A0A0A0' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Section header */}
        <AnimateIn className="mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            What I work with
          </p>
          <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
            SKILLS &<br />
            <span className="text-outline">TOOLBOX</span>
          </h2>
        </AnimateIn>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <AnimateIn key={group.category} delay={index * 0.1}>
              <div
                className="bg-surface border border-border rounded-xl p-8 hover:border-accent transition-colors"
              >
                {/* Category label */}
                <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-8">
                  {group.category}
                </p>

                {/* Icon grid */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2.5 p-3 rounded-lg hover:bg-surface-2 transition-colors group cursor-default"
                    >
                      <skill.icon size={28} color={skill.color} />
                      <span className="text-text-muted text-xs text-center leading-tight group-hover:text-text-secondary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
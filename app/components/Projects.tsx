import { ArrowRight, ExternalLink } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/client'
import { FEATURED_PROJECTS_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

type SanityProject = {
  _id: string
  title: string
  description: string
  tags: string[]
  category: string
  image?: {
    asset: {
      _ref: string
    }
  }
  github?: string
  live?: string
}

export default async function Projects() {
  const projects = await sanityFetch<SanityProject[]>({
    query: FEATURED_PROJECTS_QUERY,
  })

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              What I've built
            </p>
            <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
              FEATURED<br />
              <span className="text-outline">PROJECTS</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-text-secondary hover:text-accent text-sm font-medium transition-colors group self-start md:self-auto"
          >
            View all projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects grid */}
        {projects.length === 0 ? (
          <p className="text-text-muted text-sm">No featured projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent transition-colors group flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-48 bg-surface-2 border-b border-border overflow-hidden">
                  {project.image ? (
                    <Image
                      src={urlFor(project.image).width(800).height(400).url()}
                      alt={project.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-muted text-sm">
                      No image
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="p-6 flex flex-col flex-1">

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-2 text-text-muted text-xs px-3 py-1 rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors text-xs font-medium"
                      >
                        <SiGithub size={14} />
                        Source code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-text-muted hover:text-accent transition-colors text-xs font-medium"
                      >
                        <ExternalLink size={14} />
                        Live site
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
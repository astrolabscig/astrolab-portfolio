'use client'

import { useState } from 'react'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'
import Masonry from 'react-masonry-css'

type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  category: string
  github: string
  live: string
  image: string | null
}

type Props = {
  projects: Project[]
  categories: string[]
}

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
}

export default function ProjectsClient({ projects, categories }: Props) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <div className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent text-sm transition-colors mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            All work
          </p>
          <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tight">
            ALL<br />
            <span className="text-outline">PROJECTS</span>
          </h1>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                active === category
                  ? 'bg-accent border-accent text-white'
                  : 'bg-surface border-border text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project count */}
        <p className="text-text-muted text-sm mb-8">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          {active !== 'All' && ` in ${active}`}
        </p>

        {/* Masonry grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-6"
          columnClassName="flex flex-col gap-6"
        >
          {filtered.map((project) => (
            <div key={project.id}>
              {project.category === 'Design' ? (

                /* Design card — full natural dimensions, no cropping */
                <div className="relative overflow-hidden border border-border hover:border-accent rounded-xl group transition-colors cursor-pointer">

                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ) : (
                    <div className="h-64 bg-surface-2 flex items-center justify-center text-text-muted text-sm">
                      No image
                    </div>
                  )}

                  {/* Overlay — reveals on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-white font-bold text-lg mb-1">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-white/70 hover:text-accent transition-colors text-xs font-medium"
                        >
                          <ExternalLink size={14} />
                          View design
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-xs font-medium"
                        >
                          <SiGithub size={14} />
                          Source
                        </a>
                      )}
                    </div>

                  </div>
                </div>

              ) : (

                /* Dev / Systems card — standard card with footer */
                <div className="bg-surface border border-border rounded-xl overflow-hidden hover:border-accent transition-colors group flex flex-col">

                  <div className="w-full h-48 bg-surface-2 border-b border-border overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
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

                  <div className="p-6 flex flex-col flex-1">

                    <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">
                      {project.category}
                    </span>

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

                    <h3 className="text-text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

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

              )}
            </div>
          ))}
        </Masonry>

      </div>
    </div>
  )
}
import ProjectsClient from '../components/ProjectsClient'
import { sanityFetch } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { PROJECTS_QUERY } from '@/sanity/lib/queries'

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
  github: string
  live: string
}

export default async function ProjectsPage() {
  const projects = await sanityFetch<SanityProject[]>({
    query: PROJECTS_QUERY,
  })

  const serialized = projects.map((p) => ({
    id: p._id,
    title: p.title,
    description: p.description,
    tags: p.tags ?? [],
    category: p.category,
    github: p.github ?? '',
    live: p.live ?? '',
    image: p.image
      ? p.category === 'Design'
        ? urlFor(p.image).url()
        : urlFor(p.image).width(800).height(400).url()
      : null,
  }))

  const categories = ['All', 'Web Development', 'Design', 'Systems']

  return <ProjectsClient projects={serialized} categories={categories} />
}
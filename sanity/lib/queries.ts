import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    title,
    description,
    tags,
    category,
    image,
    github,
    live,
    featured,
    order
  }
`)

export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && featured == true && !(_id in path("drafts.**"))] | order(order asc) [0...3] {
    _id,
    title,
    description,
    tags,
    category,
    image,
    github,
    live
  }
`)
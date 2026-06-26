import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
    *[_type == "projects"] | order(order asc) {
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
    }`)

export const FEATURED_PROJECTS_QUERY = defineQuery(`
    *[_type == "project" && featured == true] | order(order asc) [0...3] {
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
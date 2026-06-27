'use client'

import Masonry from 'react-masonry-css'

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
}

type Props = {
  children: React.ReactNode
}

export default function MasonryGrid({ children }: Props) {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex gap-6"
      columnClassName="flex flex-col gap-6"
    >
      {children}
    </Masonry>
  )
}
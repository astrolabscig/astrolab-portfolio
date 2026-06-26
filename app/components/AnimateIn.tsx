'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    delay?: number
    className?: string
    direction?: 'up' | 'down' |'left' | 'right'
}

export default function AnimateIn({
    children,
    delay = 0,
    className,
    direction = 'up',
}: Props) {
    const directionMap = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    }

    const offset = directionMap[direction]

    return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
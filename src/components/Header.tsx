import { motion } from 'framer-motion'

interface HeaderProps {
  title: string
  bio: string
}

export function Header({ title, bio }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h1>
      <p className="text-muted max-w-xl">{bio}</p>
    </motion.header>
  )
}


import { motion } from 'framer-motion'
import type { GalleryItem } from '../types'

interface GalleryCardProps {
  item: GalleryItem
  onClick: () => void
  index: number
}

export function GalleryCard({ item, onClick, index }: GalleryCardProps) {
  const formatCategory = (category: string) => category.replace('-', ' ')

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <div 
        className="relative overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-[250px] object-cover block transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-sm uppercase tracking-wider">View</span>
        </div>
      </div>
      <h3 className="italic mt-3 text-base font-medium">{item.title}</h3>
      <p className="text-sm mt-1.5 text-muted">{item.description}</p>
      <span className="inline-block text-[11px] uppercase text-subtle mt-2 tracking-wide">
        {formatCategory(item.category)}
      </span>
    </motion.article>
  )
}


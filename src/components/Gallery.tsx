import { AnimatePresence } from 'framer-motion'
import { GalleryCard } from './GalleryCard'
import type { GalleryItem } from '../types'

interface GalleryProps {
  items: GalleryItem[]
  onItemClick: (item: GalleryItem) => void
}

export function Gallery({ items, onItemClick }: GalleryProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            onClick={() => onItemClick(item)}
            index={index}
          />
        ))}
      </AnimatePresence>
    </section>
  )
}


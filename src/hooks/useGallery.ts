import { useState, useMemo } from 'react'
import type { GalleryItem, Category } from '../types'

export function useGallery(items: GalleryItem[]) {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return items
    }
    return items.filter((item) => item.category === activeCategory)
  }, [items, activeCategory])

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  return {
    activeCategory,
    setActiveCategory,
    filteredItems,
    selectedItem,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
  }
}


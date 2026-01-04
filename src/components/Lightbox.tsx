import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryItem } from '../types'

interface LightboxProps {
  item: GalleryItem | null
  isOpen: boolean
  onClose: () => void
}

export function Lightbox({ item, isOpen, onClose }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center flex-col"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-8 text-white text-4xl bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-gray-300"
          >
            ×
          </button>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={item.src}
            alt={item.title}
            className="max-w-[90%] max-h-[70vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-white text-center mt-5 max-w-xl px-5"
          >
            <h3 className="italic mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


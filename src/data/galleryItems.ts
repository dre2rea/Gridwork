import type { GalleryItem } from '../types'

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: '/photo1.png',
    title: 'Surrealism',
    description: 'Dither effect applied to ancient dome-shaped castle in a vast meadow',
    category: 'surrealism',
  },
  {
    id: '2',
    src: '/photo2.png',
    title: 'High Angle',
    description: 'Shot from above in Mondrian-like style',
    category: 'high-angle',
  },
  {
    id: '3',
    src: '/photo3.png',
    title: 'Painterly',
    description: 'Painterly feel. A boy playing a grand piano in a field at night. Moon lit creating a nostalgic mood',
    category: 'painterly',
  },
]

export const categories = ['all', 'surrealism', 'high-angle', 'painterly'] as const


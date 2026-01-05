import type { Category } from '../types'

interface FilterButtonsProps {
  categories: readonly string[]
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

export function FilterButtons({ categories, activeCategory, onCategoryChange }: FilterButtonsProps) {
  const formatLabel = (category: string) => {
    if (category === 'all') return 'All'
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <section className="flex flex-wrap gap-2.5 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 text-sm border border-ink cursor-pointer
            transition-all duration-200 ease-out
            ${activeCategory === category
              ? 'bg-ink text-cream'
              : 'bg-white text-ink hover:bg-ink hover:text-cream'
            }
          `}
        >
          {formatLabel(category)}
        </button>
      ))}
    </section>
  )
}


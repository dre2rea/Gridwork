import { Header, FilterButtons, Gallery, Lightbox, Footer } from './components'
import { galleryItems, categories } from './data/galleryItems'
import { useGallery } from './hooks/useGallery'

function App() {
  const {
    activeCategory,
    setActiveCategory,
    filteredItems,
    selectedItem,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
  } = useGallery(galleryItems)

  return (
    <div className="min-h-screen px-4 md:px-6 py-3">
      <Header
        title="Hi! I'm Wonjae from S.Korea"
        bio="Product designer looking to become a design engineer"
      />

      <FilterButtons
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <Gallery items={filteredItems} onItemClick={openLightbox} />

      <Lightbox
        item={selectedItem}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
      />

      <Footer />
    </div>
  )
}

export default App

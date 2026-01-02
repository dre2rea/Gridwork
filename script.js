// Gallery Data
const galleryItems = [
    {
        src: "images/photo1.png",
        title: "Surrealism",
        description: "Dither effect applied to ancient dome-shaped castle in a vast meadow",
        category: "surrealism"
    },
    {
        src: "images/photo2.png",
        title: "High Angle",
        description: "Shot from above in Mondrian-like style",
        category: "high-angle"
    },
    {
        src: "images/photo3.png",
        title: "Painterly",
        description: "Painterly feel. A boy playing a grand piano in a field at night. Moon lit creating a nostalgic mood",
        category: "painterly"
    }
];

// DOM Elements
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxClose = document.getElementById('lightbox-close');
const filterButtons = document.querySelectorAll('.filter-btn');
const feedbackForm = document.getElementById('feedback-form');
const feedbackInput = document.getElementById('feedback');
const formMessage = document.getElementById('form-message');

// Render Gallery
function renderGallery(items) {
    gallery.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <div class="image-container">
                <img src="${item.src}" alt="${item.title}">
                <div class="card-overlay">
                    <span>View</span>
                </div>
            </div>
            <h3>${item.title}</h3>
            <p class="description">${item.description}</p>
            <span class="category-tag">${item.category.replace('-', ' ')}</span>
        `;

        // Click to open lightbox
        card.querySelector('img').addEventListener('click', () => openLightbox(item));
        card.querySelector('.card-overlay').addEventListener('click', () => openLightbox(item));

        gallery.appendChild(card);
    });
}

// Filter Gallery
function filterGallery(category) {
    if (category === 'all') {
        renderGallery(galleryItems);
    } else {
        const filtered = galleryItems.filter(item => item.category === category);
        renderGallery(filtered);
    }
}

// Filter Button Event Listeners
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter gallery
        const category = btn.dataset.category;
        filterGallery(category);
    });
});

// Lightbox Functions
function openLightbox(item) {
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDescription.textContent = item.description;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Lightbox Event Listeners
lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Feedback Form
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const feedback = feedbackInput.value.trim();

    if (feedback.length < 3) {
        formMessage.textContent = 'Please enter at least 3 characters.';
        formMessage.className = 'form-message error';
        return;
    }

    // Simulate form submission
    formMessage.textContent = 'Thank you for your feedback!';
    formMessage.className = 'form-message success';
    feedbackInput.value = '';

    // Clear message after 3 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    }, 3000);
});

// Initial render
renderGallery(galleryItems);

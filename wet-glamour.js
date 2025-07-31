/**
 * WET by Lou - Glamorous Theme JavaScript
 * Handles animations, interactions, and enhanced functionality
 */

class WETGlamour {
  constructor() {
    this.init();
  }

  init() {
    this.setupAnimations();
    this.setupIntersectionObserver();
    this.setupSmoothScrolling();
    this.setupProductInteractions();
    this.setupCartFunctionality();
    this.setupNewsletterForm();
    this.setupSearchFunctionality();
  }

  // Animation setup
  setupAnimations() {
    // Add stagger animation to elements
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.1}s`;
    });

    // Floating elements animation
    this.setupFloatingElements();
    
    // Sparkle effects
    this.setupSparkleEffects();
  }

  setupFloatingElements() {
    const floatingElements = document.querySelectorAll('.float-element');
    floatingElements.forEach((element, index) => {
      const duration = 8 + (index * 2);
      const delay = index * 1;
      element.style.animation = `floatSlow ${duration}s ease-in-out infinite ${delay}s`;
    });
  }

  setupSparkleEffects() {
    const sparkleElements = document.querySelectorAll('.sparkle-animate');
    sparkleElements.forEach(element => {
      setInterval(() => {
        element.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.8 + Math.random() * 0.4})`;
      }, 2000);
    });
  }

  // Intersection Observer for scroll animations
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);

    document.querySelectorAll('.fade-in-up, .hover-lift, .glow-pulse').forEach(el => {
      observer.observe(el);
    });
  }

  // Smooth scrolling for navigation
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Product interactions
  setupProductInteractions() {
    // Product card hover effects
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        this.addGlowEffect(card);
      });

      card.addEventListener('mouseleave', () => {
        this.removeGlowEffect(card);
      });
    });

    // Product image gallery
    this.setupProductGallery();
    
    // Variant selection
    this.setupVariantSelection();
    
    // Quantity controls
    this.setupQuantityControls();
  }

  addGlowEffect(element) {
    element.style.boxShadow = '0 0 30px rgba(212, 165, 116, 0.4)';
    element.style.transform = 'translateY(-8px)';
  }

  removeGlowEffect(element) {
    element.style.boxShadow = '';
    element.style.transform = '';
  }

  setupProductGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail-item');
    const mainImage = document.getElementById('ProductMainImage');

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');
        
        // Update main image
        const newImageSrc = thumbnail.querySelector('img').getAttribute('src').replace('150', '600');
        if (mainImage) {
          mainImage.setAttribute('src', newImageSrc);
          this.addShineEffect(mainImage);
        }
      });
    });
  }

  addShineEffect(element) {
    element.classList.add('shine-effect');
    setTimeout(() => {
      element.classList.remove('shine-effect');
    }, 1000);
  }

  setupVariantSelection() {
    const variantInputs = document.querySelectorAll('.variant-input');
    const productSelect = document.getElementById('ProductSelect');
    const priceElement = document.querySelector('.price-current');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');

    variantInputs.forEach(input => {
      input.addEventListener('change', () => {
        this.updateSelectedVariant();
      });
    });
  }

  updateSelectedVariant() {
    // This would typically integrate with Shopify's variant selection
    // For now, we'll add visual feedback
    const selectedOptions = document.querySelectorAll('.variant-input:checked');
    console.log('Selected variants:', Array.from(selectedOptions).map(opt => opt.value));
  }

  setupQuantityControls() {
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const quantityInput = document.querySelector('.quantity-input');

    quantityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.quantity;
        let currentValue = parseInt(quantityInput.value) || 1;

        if (action === 'plus') {
          quantityInput.value = currentValue + 1;
        } else if (action === 'minus' && currentValue > 1) {
          quantityInput.value = currentValue - 1;
        }

        // Add visual feedback
        this.addPulseEffect(quantityInput);
      });
    });
  }

  addPulseEffect(element) {
    element.style.transform = 'scale(1.05)';
    setTimeout(() => {
      element.style.transform = '';
    }, 150);
  }

  // Cart functionality
  setupCartFunctionality() {
    const addToCartForms = document.querySelectorAll('form[action*="/cart/add"]');
    
    addToCartForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.addToCart(form);
      });
    });
  }

  async addToCart(form) {
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Adding...</span>';

    try {
      const formData = new FormData(form);
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const item = await response.json();
        this.updateCartCount();
        this.showCartSuccess(item);
      } else {
        throw new Error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Cart error:', error);
      this.showCartError();
    } finally {
      // Reset button state
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const cartCountElement = document.getElementById('cart-count');
      
      if (cartCountElement) {
        cartCountElement.textContent = cart.item_count;
        this.addPulseEffect(cartCountElement);
      }
    } catch (error) {
      console.error('Failed to update cart count:', error);
    }
  }

  showCartSuccess(item) {
    // Create and show success notification
    const notification = this.createNotification(
      `✨ ${item.product_title} added to cart!`,
      'success'
    );
    this.showNotification(notification);
  }

  showCartError() {
    const notification = this.createNotification(
      'Sorry, there was an error adding the item to your cart.',
      'error'
    );
    this.showNotification(notification);
  }

  createNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} glass-card`;
    notification.innerHTML = `
      <p>${message}</p>
      <button class="notification-close" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;

    // Add close functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
      this.hideNotification(notification);
    });

    return notification;
  }

  showNotification(notification) {
    // Create notification container if it doesn't exist
    let container = document.getElementById('notification-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'notification-container';
      container.className = 'notification-container';
      document.body.appendChild(container);
    }

    container.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.hideNotification(notification);
    }, 5000);
  }

  hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  // Newsletter form functionality
  setupNewsletterForm() {
    const newsletterForms = document.querySelectorAll('form[action*="/contact"]');
    
    newsletterForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span>Subscribing...</span>';
        submitBtn.disabled = true;
        
        // Add sparkle effect
        this.addSparkleAnimation(form);
      });
    });
  }

  addSparkleAnimation(element) {
    const sparkles = ['✨', '⭐', '💫'];
    
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('span');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.className = 'floating-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 1 + 's';
        
        element.appendChild(sparkle);
        
        setTimeout(() => {
          if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
          }
        }, 2000);
      }, i * 200);
    }
  }

  // Search functionality
  setupSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      
      searchTimeout = setTimeout(() => {
        const query = e.target.value.trim();
        if (query.length > 2) {
          this.performSearch(query);
        } else {
          this.clearSearchResults();
        }
      }, 300);
    });
  }

  async performSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;

    try {
      const response = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=6`);
      const data = await response.json();
      
      this.displaySearchResults(data.resources.results.products || [], resultsContainer);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displaySearchResults(products, container) {
    if (products.length === 0) {
      container.innerHTML = '<p class="search-no-results">No products found.</p>';
      return;
    }

    const resultsHTML = products.map(product => `
      <a href="${product.url}" class="search-result-item glass-card">
        <div class="search-result-image">
          <img src="${product.featured_image || ''}" alt="${product.title}" />
        </div>
        <div class="search-result-content">
          <h4 class="search-result-title">${product.title}</h4>
          <p class="search-result-price">${this.formatMoney(product.price)}</p>
        </div>
      </a>
    `).join('');

    container.innerHTML = `<div class="search-results-grid">${resultsHTML}</div>`;
  }

  clearSearchResults() {
    const resultsContainer = document.getElementById('search-results');
    if (resultsContainer) {
      resultsContainer.innerHTML = '';
    }
  }

  formatMoney(cents) {
    return '$' + (cents / 100).toFixed(2);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WETGlamour();
});

// Additional CSS for JavaScript-generated elements
const additionalStyles = `
  <style>
    .notification-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .notification {
      background: var(--gradient-glass);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(212, 165, 116, 0.3);
      border-radius: 12px;
      padding: 16px 20px;
      max-width: 350px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      transform: translateX(100%);
      opacity: 0;
      transition: all 0.3s ease;
    }

    .notification.show {
      transform: translateX(0);
      opacity: 1;
    }

    .notification-success {
      border-color: rgba(76, 175, 80, 0.3);
      background: linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, var(--gradient-glass) 100%);
    }

    .notification-error {
      border-color: rgba(244, 67, 54, 0.3);
      background: linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, var(--gradient-glass) 100%);
    }

    .notification p {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-primary);
    }

    .notification-close {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--text-secondary);
      padding: 4px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .notification-close:hover {
      color: var(--text-primary);
      background: rgba(0, 0, 0, 0.1);
    }

    .floating-sparkle {
      position: absolute;
      font-size: 16px;
      animation: floatSparkle 2s ease-out forwards;
      pointer-events: none;
      z-index: 10;
    }

    @keyframes floatSparkle {
      0% {
        transform: translateY(0) scale(0);
        opacity: 1;
      }
      50% {
        transform: translateY(-30px) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-60px) scale(0);
        opacity: 0;
      }
    }

    .search-results-grid {
      display: grid;
      gap: 12px;
      margin-top: 20px;
    }

    .search-result-item {
      display: flex;
      gap: 12px;
      padding: 16px;
      text-decoration: none;
      color: var(--text-primary);
      transition: all 0.3s ease;
    }

    .search-result-item:hover {
      transform: translateY(-2px);
    }

    .search-result-image {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      overflow: hidden;
      flex-shrink: 0;
    }

    .search-result-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .search-result-content {
      flex: 1;
    }

    .search-result-title {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 4px;
      line-height: 1.3;
    }

    .search-result-price {
      font-size: 14px;
      color: var(--rose-gold);
      font-weight: 600;
      margin: 0;
    }

    .search-no-results {
      text-align: center;
      padding: 40px 20px;
      color: var(--text-secondary);
      font-style: italic;
    }

    @media (max-width: 640px) {
      .notification-container {
        top: 10px;
        right: 10px;
        left: 10px;
      }

      .notification {
        max-width: none;
      }
    }
  </style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);
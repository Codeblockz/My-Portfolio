// Smooth scrolling utility functions

/**
 * Smooth scroll to a target element with offset for fixed header
 * @param {string} targetId - ID of the target element
 * @param {number} offset - Optional offset in pixels (default: 80px for header)
 */
export const smoothScrollTo = (targetId, offset = 80) => {
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    console.warn(`Element with ID "${targetId}" not found`);
    return;
  }

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};

/**
 * Handle navigation click events for smooth scrolling
 * @param {Event} event - Click event
 * @param {string} targetId - ID of the target element
 * @param {Function} callback - Optional callback function to execute after scroll
 */
export const handleSmoothScroll = (event, targetId, callback) => {
  event.preventDefault();
  
  smoothScrollTo(targetId);
  
  if (callback) {
    // Execute callback after scroll animation completes
    setTimeout(callback, 800);
  }
};

/**
 * Get the currently active section based on scroll position
 * @param {Array} sectionIds - Array of section IDs to check
 * @param {number} offset - Offset for header height
 * @returns {string} - ID of the active section
 */
export const getActiveSection = (sectionIds, offset = 100) => {
  const scrollPosition = window.pageYOffset + offset;
  
  let activeSection = sectionIds[0]; // Default to first section
  
  sectionIds.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      
      if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
        activeSection = sectionId;
      }
    }
  });
  
  return activeSection;
};

/**
 * Scroll to top of page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Debounce function for scroll events
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

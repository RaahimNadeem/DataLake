"use client"

/**
 * Smoothly scrolls to the specified element
 * @param targetId - The ID of the element to scroll to
 * @param duration - The duration of the scroll animation in milliseconds
 * @param offset - Additional offset from the top of the element in pixels
 */
export function smoothScrollTo(
  targetId: string,
  duration: number = 800,
  offset: number = 0
): void {
  const targetElement = document.getElementById(targetId)
  if (!targetElement) return

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    
    // Easing function for smooth acceleration and deceleration
    const easeInOutCubic = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2
    
    window.scrollTo(0, startPosition + distance * easeInOutCubic)
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

/**
 * Adds smooth scroll behavior to all anchor links with hash
 */
export function initSmoothScroll(offset: number = 0): void {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a')
    
    if (!anchor) return
    
    const href = anchor.getAttribute('href')
    if (!href || !href.startsWith('#')) return
    
    e.preventDefault()
    const targetId = href.substring(1)
    smoothScrollTo(targetId, 800, offset)
  })
} 
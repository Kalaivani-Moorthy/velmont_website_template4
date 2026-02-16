import { useEffect } from 'react'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-10', '-translate-x-10')
          target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0')
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    document.querySelectorAll('[data-reveal="true"]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default useReveal
"use client"

import { useEffect } from "react"

export function useRevealOnScroll() {
  useEffect(() => {
    document.body.classList.add("js-enabled")

    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible")
            // Once revealed, stop observing (once: true behavior)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    )

    elements.forEach((el) => observer.observe(el))

    // Cleanup
    return () => {
      document.body.classList.remove("js-enabled")
      observer.disconnect()
    }
  }, [])
}

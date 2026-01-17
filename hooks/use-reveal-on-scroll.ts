"use client"

import { useEffect } from "react"

export function useRevealOnScroll() {
  useEffect(() => {
    // Enable animations by adding js-enabled class
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
        threshold: 0.15,
        rootMargin: "0px",
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

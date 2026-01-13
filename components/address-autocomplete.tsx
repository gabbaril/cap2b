"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import type { google } from "googlemaps"

interface AddressAutocompleteProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  required?: boolean
  id?: string
  name?: string
}

declare global {
  interface Window {
    google: typeof google
    initGooglePlaces: () => void
  }
}

export default function AddressAutocomplete({
  value,
  onChange,
  placeholder = "123 Rue Exemple, Trois-Rivières",
  className = "",
  required = false,
  id = "address",
  name = "address",
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<any | null>(null)
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false)

  useEffect(() => {
    // Check if Google Maps is loaded (script is loaded via layout.tsx)
    if (window.google?.maps?.places) {
      setIsGoogleLoaded(true)
      return
    }

    // Wait for Google Maps to load
    const checkGoogle = setInterval(() => {
      if (window.google?.maps?.places) {
        setIsGoogleLoaded(true)
        clearInterval(checkGoogle)
      }
    }, 100)

    // Cleanup interval after 10 seconds if not loaded
    const timeout = setTimeout(() => {
      clearInterval(checkGoogle)
    }, 10000)

    return () => {
      clearInterval(checkGoogle)
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    if (!isGoogleLoaded || !inputRef.current || autocompleteRef.current) return

    // Initialize autocomplete
    autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["address"],
      componentRestrictions: { country: "ca" },
      fields: ["formatted_address", "address_components"],
    })

    // Bias results to Quebec
    const quebecBounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(45.0, -79.5), // SW corner
      new window.google.maps.LatLng(62.0, -57.0), // NE corner
    )
    autocompleteRef.current.setBounds(quebecBounds)

    // Handle place selection
    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace()
      if (place?.formatted_address) {
        onChange(place.formatted_address)
      }
    })
  }, [isGoogleLoaded, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <input
      ref={inputRef}
      type="text"
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
      className={className}
      autoComplete="off"
    />
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 h-[100%]">
            <img src="/cap2b.png" alt="Cap2B" className="h-[100%] py-4"/>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#problemes" className="text-sm text-primary-foreground hover:text-secondary transition-colors">
              Problèmes
            </a>
            <a href="#methode" className="text-sm text-primary-foreground hover:text-secondary transition-colors">
              Méthode
            </a>
            <a href="#industries" className="text-sm text-primary-foreground hover:text-secondary transition-colors">
              Industries
            </a>
            <a href="#pourquoi" className="text-sm text-primary-foreground hover:text-secondary transition-colors">
              Pourquoi nous
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3 text-primary-foreground">
            <Button variant="ghost" size="sm">
              <a href="/client/login">
                Connexion
              </a>
            </Button>
            <Button size="sm" variant="primary">
              <a
                  href="mailto:info@cap2b.ca"
                >
                Recevoir des leads
              </a>
            </Button>
          </div>

          <button className="md:hidden p-2 text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#problemes" className="text-sm text-primary-foreground hover:text-accent">
                Problèmes
              </a>
              <a href="#methode" className="text-sm text-primary-foreground hover:text-accent">
                Méthode
              </a>
              <a href="#industries" className="text-sm text-primary-foreground hover:text-accent">
                Industries
              </a>
              <a href="#pourquoi" className="text-sm text-primary-foreground hover:text-accent">
                Pourquoi nous
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border text-primary-foreground">
                <Button variant="ghost" size="sm">
                  Connexion
                </Button>
                <Button size="sm" variant="primary">Recevoir des leads</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

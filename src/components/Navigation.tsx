import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from './ui/navigation-menu'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-brand font-bold text-gray-900">
            The Ingredient List
          </a>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleLinkClick(item.href)
                    }}
                    className={`${navigationMenuTriggerStyle()} text-gray-600 hover:text-gray-900 transition-colors`}
                  >
                    {item.label}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Menu (Fallback for smaller screens) */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {navItems.map((item) => (
              
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(item.href)
                }}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-2 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(item.href)
                }}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

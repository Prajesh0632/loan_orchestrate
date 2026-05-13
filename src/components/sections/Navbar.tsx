'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggleWrapper } from '@/components/ui'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'AI Agents', href: '#agents' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact Us', href: '#contact' },
]

const mainAppUrl = 'https://loan-orchestrate-app.vercel.app'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center">
              <span className="font-bold text-navy text-xs">A</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              ACLO
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggleWrapper />
            <a
              href={mainAppUrl}
              className="font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 px-4 py-2 text-sm border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
            >
              Sign In
            </a>
            <a
              href={mainAppUrl}
              className="font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-cyan-500 to-emerald-500 text-navy hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggleWrapper />
            <button
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700/30 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-700/30">
                <a
                  href={mainAppUrl}
                  className="w-full font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 px-6 py-3 text-base border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                >
                  Sign In
                </a>
                <a
                  href={mainAppUrl}
                  className="w-full font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 px-6 py-3 text-base bg-gradient-to-r from-cyan-500 to-emerald-500 text-navy hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

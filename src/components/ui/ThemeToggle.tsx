'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600 transition-colors duration-300 border border-slate-600/50 hover:border-slate-500 flex items-center justify-center"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-slate-300" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </button>
  )
}

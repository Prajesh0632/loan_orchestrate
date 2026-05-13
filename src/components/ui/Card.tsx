import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  glow?: 'cyan' | 'emerald' | 'indigo' | 'none'
  hoverable?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glow = 'cyan',
  hoverable = false,
}) => {
  const glowStyles = {
    cyan: 'glow-cyan',
    emerald: 'glow-emerald',
    indigo: 'glow-indigo',
    none: '',
  }

  const hoverStyles = hoverable ? 'hover:scale-105 hover:shadow-2xl' : ''

  return (
    <div
      className={`
        glass rounded-2xl p-6 transition-all duration-300 ${glowStyles[glow]} ${hoverStyles} ${className}
      `}
    >
      {children}
    </div>
  )
}

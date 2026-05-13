import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'info' | 'error'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'info',
  className = '',
}) => {
  const variantStyles = {
    success: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    info: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    error: 'bg-red-500/20 text-red-300 border-red-500/30',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold
        border ${variantStyles[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}

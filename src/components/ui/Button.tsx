import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  children,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 flex items-center gap-2'

  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-navy hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105',
    secondary: 'bg-slate-700 text-gray-100 hover:bg-slate-600 hover:shadow-lg',
    outline: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

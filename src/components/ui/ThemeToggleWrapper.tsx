'use client'

import React, { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/ui'

export const ThemeToggleWrapper: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="p-2 rounded-lg bg-slate-700/50 w-10 h-10" />
  }

  return <ThemeToggle />
}

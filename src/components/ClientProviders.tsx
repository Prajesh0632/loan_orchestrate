'use client'

import React from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { ChatWidget } from '@/components/ui'

interface ClientProvidersProps {
  children: React.ReactNode
}

export const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
      <ChatWidget />
    </ThemeProvider>
  )
}

'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'

interface AppShellProps {
  children: React.ReactNode
}

const authRoutes = new Set(['/get-started'])

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname()
  const showChrome = !authRoutes.has(pathname)

  return (
    <>
      {showChrome ? <Navbar /> : null}
      <main>{children}</main>
      {showChrome ? <Footer /> : null}
    </>
  )
}

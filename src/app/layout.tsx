import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Platform } from '@/components/sections/Platform'
import { Features } from '@/components/sections/Features'
import { Agents } from '@/components/sections/Agents'
import { Compliance } from '@/components/sections/Compliance'
import { Impact } from '@/components/sections/Impact'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { ClientProviders } from '@/components/ClientProviders'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACLO - AI Credit & Lending Orchestrator',
  description: 'AI-powered lending platform for financial inclusion. Autonomous credit orchestration with advanced compliance automation.',
  keywords: ['AI', 'Lending', 'FinTech', 'Credit Scoring', 'Nepal', 'Financial Inclusion'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-gray-100 antialiased">
        <Navbar />
        <main>
          <Hero />
          <Platform />
          <Features />
          <Agents />
          <Compliance />
          <Impact />
          <Contact />
        </main>
        <Footer />
        <ClientProviders />
      </body>
    </html>
  )
}

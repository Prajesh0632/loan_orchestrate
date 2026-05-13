import type { Metadata } from 'next'
import { ClientProviders } from '@/components/ClientProviders'
import { AppShell } from '@/components/AppShell'
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
        <ClientProviders>
          <AppShell>{children}</AppShell>
        </ClientProviders>
      </body>
    </html>
  )
}

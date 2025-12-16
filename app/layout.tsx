import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Venda Experience | Premium Takealot Personal Shopper',
  description: 'Tech-driven shopping with personal perfection. Your trusted personal shopper for Takealot with exclusive deals, free delivery, and no extra costs.',
  keywords: 'Takealot, personal shopper, South Africa, free delivery, online shopping, Venda Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-ubuntu">{children}</body>
    </html>
  )
}
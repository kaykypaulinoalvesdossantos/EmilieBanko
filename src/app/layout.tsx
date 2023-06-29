import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Espaço Emilie Banko',
  description: 'SuperHost Airbnb',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-bodyBg">{children}</body>
    </html>
  )
}

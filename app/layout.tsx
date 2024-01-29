import './globals.css'
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import { Providers } from './providers'
import { Link } from "@nextui-org/link"
import NextHead from "next/head"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={''}>
        <div className="relative flex flex-col h-screen">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}



import './globals.css'
import { Providers } from './providers'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={''}>
        <div className="relative flex flex-col h-screen">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}

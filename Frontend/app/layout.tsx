import { Footer, Navbar } from '@/components'
import './globals.css'

type metadata = {
  title: string;
  description: string;
};

export const metadata: metadata = {
  title: 'Car Hub',
  description: 'Discover best car in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

"use client"
import NavBar from '@/src/components/NavBar'
import '@/src/styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
          <NavBar />
          {children}
          <Footer/>
        </body>
    </html>
  )
}
import NavBar from '@/src/components/NavBar'
import '@/src/styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'

export const metadata = {
  title: 'CBGDP',
  description: '14º Congresso Brasileiro de Inovação e Gestão do Desenvolvimento de Produto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body> 
          <NavBar />
          {children}
          <Footer/>
      </body>
    </html>
  )
}
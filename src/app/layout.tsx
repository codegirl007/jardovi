import ResponsiveProvider from '@/providers/ResponsiveProvider'
import {theme} from '@/theme/theme'
import {ThemeProvider} from '@mui/material'
import {Metadata, Viewport} from 'next'
import {headers} from 'next/headers'
import {UAParser} from 'ua-parser-js'
import './globals.css'
import NotificationContainer from './components/notification/NotificationContainer'

export const metadata: Metadata = {
  title: 'Jardovi k narozeninám',
  description: 'Kratochvilná narozeninová aplikace, která není jen na chvíli :)'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersObj = headers()
  const userAgent = (await headersObj).get('user-agent')
  const deviceType = new UAParser(userAgent || '').getDevice()?.type
  const isMobile = deviceType === 'mobile'

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <ResponsiveProvider isMobile={isMobile}>{children}</ResponsiveProvider>
          <NotificationContainer />
        </body>
      </ThemeProvider>
    </html>
  )
}

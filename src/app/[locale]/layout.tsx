import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import { Roboto_Flex, Manrope } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Header } from './components/Header'
import './globals.css'
import localFont from 'next/font/local'
import TheFooter from './components/TheFooter'

// const roboto = Roboto_Flex({
//   subsets: ['latin', 'cyrillic'],
//   variable: '--roboto',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// })

const magnetTrial = localFont({
  src: [
    {
      path: '../fonts/MagnetTrial/MagnetTrial-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/MagnetTrial/MagnetTrial-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/MagnetTrial/MagnetTrial-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../fonts/MagnetTrial/MagnetTrial-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--magnet-trial'
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'ISFT',
  description: 'ISFT - Институт Современных Финансовых Технологий'
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      className={`${manrope.variable} ${magnetTrial.variable} scroll-smooth`}
      lang={locale}
      dir={'ltr'}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={[
            'light',
            'dark'
            // 'instagram',
            // 'facebook',
            // 'discord',
            // 'netflix',
            // 'twilight',
            // 'reddit'
          ]}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color='var(--primary)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className='mx-auto max-w-screen-2xl'>{children}</main>
            <TheFooter />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

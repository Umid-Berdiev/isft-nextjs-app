'use client'
import AppNavbar from '@/src/components/globals/AppNavbar'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const pathname = usePathname()
  const isHomePage = pathname === `/${locale}`

  return (
    <header className={`bg-cover bg-no-repeat pb-6`}>
      <div className='container flex flex-row items-center justify-between py-5 text-contentPrimary'>
        <AppNavbar locale={locale} />
      </div>
    </header>
  )
}

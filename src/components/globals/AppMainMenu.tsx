import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function AppMainMenu({
  locale,
  mode = 'light'
}: {
  locale: string
  mode: 'light' | 'dark'
}) {
  const t = useTranslations('')
  const pathname = usePathname()
  console.log({ pathname })

  const setClasses = (path: string) => {
    let isActive = false

    if (path === '/' && pathname === `/${locale}`) isActive = true
    else if (pathname.includes(path) && path !== `/`) isActive = true

    console.log({ pathname })

    if (isActive) {
      return `${mode === 'light' ? 'text-mainRed' : 'text-white'}`
    } else {
      return `${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300 hover:text-white'}`
    }
  }

  return (
    <nav className={`inline-flex gap-5 font-semibold`}>
      <Link
        // className={`${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300'}`}
        className={setClasses('/')}
        lang={locale}
        href={`/`}
      >
        {t('ISFT haqida')}
      </Link>
      <Link
        // className={`${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300'}`}
        className={setClasses('/activity')}
        lang={locale}
        href='/activity'
      >
        {t('Faoliyat')}
      </Link>
      <Link
        // className={`${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300'}`}
        className={setClasses('/applicants')}
        lang={locale}
        href='/applicants'
      >
        {t('Abiturientlarga')}
      </Link>
      <Link
        className={`${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300'}`}
        className={setClasses('/students')}
        lang={locale}
        href='/students'
      >
        {t('Talabalarga')}
      </Link>
      <Link
        // className={`${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300'}`}
        className={setClasses('/news')}
        lang={locale}
        href='/news'
      >
        {t('Yangiliklar')}
      </Link>
      <Link
        // className={`${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300'}`}
        className={setClasses('/faq')}
        lang={locale}
        href='/faq'
      >
        {t('FAQ')}
      </Link>
      <Link
        // className={`${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300'}`}
        className={setClasses('/contacts')}
        lang={locale}
        href='/contacts'
      >
        {t('Aloqa')}
      </Link>
    </nav>
  )
}

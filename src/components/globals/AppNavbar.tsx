import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import AppLogo from './AppLogo'
import LangSwitcher from '@/src/app/[locale]/components/LangSwitcher'
import AppMainMenu from './AppMainMenu'
import AppMobileMenu from './AppMobileMenu'

export default function AppNavbar({
  locale,
  mode = 'light'
}: {
  locale: string
  mode?: 'light' | 'dark'
}) {
  const t = useTranslations('')
  const pathname = usePathname()
  console.log({ mode })

  return (
    <div className='navbar p-0'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <AppMobileMenu locale={locale} mode={mode} />
        </div>
        <AppLogo className={mode === 'dark' ? 'text-white' : 'text-mainRed'} />
      </div>
      <div className='navbar-center hidden lg:flex'>
        <AppMainMenu locale={locale} mode={mode} />
        <div
          className={`mx-6 h-3 w-px ${mode === 'dark' ? 'bg-white' : 'bg-black'}`}
        ></div>
        <LangSwitcher mode={mode} />
      </div>
      <div className='navbar-end'>
        <button
          className={`btn rounded-3xl text-base font-medium ${mode === 'dark' ? 'bg-white' : 'bg-mainRed text-white'}`}
        >
          {t('Onlayn qabul')}
        </button>
      </div>
    </div>
  )
}

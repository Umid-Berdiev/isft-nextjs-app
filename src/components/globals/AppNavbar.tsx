import Button from '@/src/app/[locale]/components/Button'
import { useTranslations } from 'next-intl'
import AppInput from '../forms/AppInput'

export default function AppNavbar({ locale }: { locale: string }) {
  const t = useTranslations('')

  return (
    <div className='navbar p-4'>
      <div className='flex-grow gap-2'>
        {/*  */}
        <Button>{t('Bemor qo’shish')}</Button>
        <AppInput placeholder={t('Bemor IDsi')} />
        <AppInput placeholder={t('№ karta')} />
      </div>
      <div className='ml-auto flex'>
        {/* user dropdown */}
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn-ghost text-right hover:bg-transparent'
          >
            <p className='text-sm font-semibold'>John Doe</p>
            <p className='text-xs opacity-50'>Administrator</p>
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content z-[1] rounded-box p-2 shadow'
          >
            <li>
              <a href={`/${locale}/profile`} className='text-black'>
                {t('Profil')}
              </a>
            </li>
            <li>
              <a href={`/${locale}/logout`} className='text-black'>
                {t('Chiqish')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

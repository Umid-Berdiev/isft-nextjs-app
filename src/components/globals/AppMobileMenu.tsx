import { Link, locations } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function AppMobileMenu({
  locale,
  mode = 'light'
}: {
  locale: string
  mode?: 'light' | 'dark'
}) {
  const t = useTranslations('')
  const pathname = usePathname()

  const setClasses = (path: string) => {
    let isActive = false

    if (path === '/' && pathname === `/${locale}`) isActive = true
    else if (pathname.includes(path) && path !== `/`) isActive = true

    if (isActive) {
      return `${mode === 'light' ? 'text-mainRed' : 'text-white'}`
    } else {
      return `${mode === 'light' ? 'text-contentPrimary hover:text-mainRed' : 'text-gray-300 hover:text-white'}`
    }
  }

  return (
    <ul
      tabIndex={0}
      className='menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-contentPrimary shadow'
    >
      {locations.map(location => (
        <li key={location.name}>
          <Link
            className={setClasses(location.path)}
            lang={locale}
            href={location.path}
          >
            {t(location.label)}
            {location.children.length > 0 && (
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}

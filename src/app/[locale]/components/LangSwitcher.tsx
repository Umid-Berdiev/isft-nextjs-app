'use client'

import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import { FiChevronDown } from 'react-icons/fi'

interface Option {
  label: string
  code: string
}

export default function LangSwitcher() {
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const options: Option[] = [
    { label: 'Eng', code: 'en' }, // Native name is the same
    { label: 'Рус', code: 'ru' },
    { label: "O'zb", code: 'uz' }
  ]

  const currentLocale = options.find(
    option => option.code === pathname.split('/')[1]
  )?.label

  return (
    <div className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className={`btn-link flex items-center gap-2`}
      >
        <span>{currentLocale}</span>
        <FiChevronDown />
      </div>
      <ul
        tabIndex={0}
        className='menu dropdown-content z-[1] rounded-box p-2 shadow'
      >
        {options.map(lang => {
          return (
            <li key={lang.code}>
              <a
                href={`/${lang.code}/${urlSegments.join('/')}`}
                className='text-black'
              >
                {lang.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

'use client'

import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

const LangSwitcher: React.FC = () => {
  interface Option {
    label: string
    code: string
  }
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()

  const options: Option[] = [
    { label: 'Eng', code: 'en' }, // Native name is the same
    { label: 'Рус', code: 'ru' },
    { label: "O'zb", code: 'uz' },
    { label: 'Ўзб', code: 'uzс' }
  ]

  const currentLocale = options.find(
    option => option.code === pathname.split('/')[1]
  )?.label

  return (
    <div className='dropdown dropdown-end'>
      <div
        tabIndex={0}
        role='button'
        className='btn-link flex items-center gap-2 text-white'
      >
        <span>{currentLocale}</span>
        <FiChevronDown />
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow'
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

export default LangSwitcher
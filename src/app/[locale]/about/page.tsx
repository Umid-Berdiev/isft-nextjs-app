'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

export default function About() {
  const t = useTranslations('')

  useEffect(() => {
    console.log('About page is mounted')
    return () => {
      console.log('About page is unmounted')
    }
  })

  return (
    <div className='px-32 py-24 text-center text-2xl'>
      {t(
        'This_is_a_simple_about_page_just_to_show_how_you_can_use_the_internationalization_in_different_pages'
      )}
    </div>
  )
}

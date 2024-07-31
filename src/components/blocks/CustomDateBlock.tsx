import { useTranslations, useLocale } from 'next-intl'
import Heading2 from '../typography/Heading2'
import dayjs from 'dayjs'
import * as uzLatn from 'dayjs/locale/uz-latn' // import locale uz-latn
import * as ru from 'dayjs/locale/ru' // import locale ru
import * as en from 'dayjs/locale/en' // import locale en
import * as uz from 'dayjs/locale/uz' // import locale uz

export default function CustomDateBlock({
  date,
  className
}: {
  date: string
  className?: string
}) {
  const t = useTranslations('')
  const locale = useLocale()
  const _locale =
    locale === 'uz' ? uzLatn : locale === 'uzc' ? uz : locale === 'ru' ? ru : en
  const [day, month, year] = dayjs(date)
    .locale(_locale)
    .format('DD MMMM YYYY')
    .split(' ')

  return (
    <div className={`flex items-center gap-x-2 ${className}`}>
      <Heading2 className='text-contentPrimary'>{day}</Heading2>
      <div className='inline-flex flex-col items-start justify-center gap-0.5'>
        <span className='text-xs'>{month}</span>
        <span className='text-xs'>{year}</span>
      </div>
    </div>
  )
}

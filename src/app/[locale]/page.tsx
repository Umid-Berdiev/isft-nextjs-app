import { useTranslations } from 'next-intl'
import Heading2 from '@/src/components/typography/Heading2'
import BeautyTab from '@/src/components/tabs/BeautyTab'
import { $request } from '@/src/utils/api/request'
import BeautyTabItem from '@/src/components/tabs/BeautyTabItem'
import { GiGlobe } from 'react-icons/gi'
import { FiBook } from 'react-icons/fi'

export default function DashboardPage() {
  const t = useTranslations('')

  const data = [
    {
      title: t('Bakalavriat'),
      content: [
        {
          title: t('Xalqaro dasturlar'),
          content: [
            'Moliya sohasida boshqaruv',
            'Xalqaro munosabatlar',
            'Buxgalteriya hisobi va moliya',
            'Moliya tahlil va audit',
            'Moliya va bank ishlari'
          ],
          icon: <GiGlobe />
        },
        {
          title: t('Gumanitar dasturlar'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            'Boshlang’ich ta’lim',
            'Maktabgacha ta’lim'
          ],
          icon: <FiBook />
        }
      ]
    },
    {
      title: t('Magistratura'),
      content: t(
        'Web dasturlash sohasida o’qishingiz va web dasturlash sohasida professional bo’lishingiz mumkin'
      )
    },
    {
      title: t('Ikkinchi oliy ta’lim'),
      content: t(
        'Mobil dasturlash sohasida o’qishingiz va mobil dasturlash sohasida professional bo’lishingiz mumkin'
      )
    }
  ]

  return (
    <div className='container pb-10'>
      <section className='flex flex-col items-center justify-center py-16'>
        <Heading2>{t('ISFT talabasi bo’ling')}</Heading2>
        <p>
          {t(
            'ISFT da quyidagi sohalardan birida o’qishingiz va haqiqiy professionallardan ta’lim olishingiz mumkin'
          )}
        </p>
      </section>
      <BeautyTab data={data} />
    </div>
  )
}

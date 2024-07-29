import { useTranslations } from 'next-intl'
import Heading2 from '@/src/components/typography/Heading2'
import BeautyTab from '@/src/components/tabs/BeautyTab'
import { GiLaptop, GiMoneyStack, GiOpenBook } from 'react-icons/gi'
import { FiBook, FiGlobe, FiInfo } from 'react-icons/fi'
import { PiCodeBold, PiLaptop } from 'react-icons/pi'
import { FaBookOpenReader } from 'react-icons/fa6'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Image from 'next/image'
import Heading3 from '@/src/components/typography/Heading3'
import RewardsIcon from '../icons/RewardsIcon'
import Heading4 from '@/src/components/typography/Heading4'
import DoubleDegreeIcon from '../icons/DoubleDegreeIcon'
import SuitcaseIcon from '../icons/SuitcaseIcon'
import BanknoteHandshakeIcon from '../icons/BanknoteHandshakeIcon'

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
            'Moliya tahlil va audit'
          ],
          icon: <FiGlobe />
        },
        {
          title: t('Gumanitar dasturlar'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: <FiBook />
        },
        {
          title: t('Moliyaviy-iqdisodiy dasturlar'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: <GiMoneyStack />
        },
        {
          title: t('Axborot texnologiyalari'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: <PiCodeBold />
        },
        {
          title: t('Sirtqi'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: <FaBookOpenReader />
        },
        {
          title: (
            <span className='flex items-center'>
              {t('Masofaviy*')}
              <FiInfo className='ml-2 text-gray-500' />
            </span>
          ),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: <PiLaptop />
        }
      ]
    },
    {
      title: t('Magistratura'),
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
          icon: <FiGlobe />
        },
        {
          title: t('Gumanitar dasturlar'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: <FiBook />
        }
      ]
    },
    {
      title: t("Ikkinchi oliy ta'lim"),
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
          icon: <FiGlobe />
        },
        {
          title: t('Gumanitar dasturlar'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: <FiBook />
        }
      ]
    }
  ]

  return (
    <div className='container pb-10'>
      <section className='flex flex-col items-center justify-center py-16'>
        <Heading2>{t("ISFT talabasi bo'ling")}</Heading2>
        <p>
          {t(
            "ISFT da quyidagi sohalardan birida o'qishingiz va haqiqiy professionallardan ta'lim olishingiz mumkin"
          )}
        </p>
      </section>
      <BeautyTab data={data} />
      <section className='mt-20 text-center'>
        <Heading2>{t('Imkoniyatlar va Afzalliklar')}</Heading2>
        <div className='mt-8 flex w-full gap-4'>
          <RoundedBlock className='flex-shrink-0 flex-grow !p-0'>
            <Image
              className='rounded-3xl object-cover'
              src='/images/image27.png'
              width={632}
              height={632}
              alt='1'
            />
          </RoundedBlock>
          <RoundedBlock className='flex flex-col gap-8 !bg-background-secondary !p-14 text-left'>
            <Heading3>{t('ISFT sizga quyidagilarni taqdim etadi')}</Heading3>
            <ul className='flex flex-col gap-8 pb-5'>
              <li className='flex items-center gap-4'>
                <RewardsIcon />
                <p className='font-serif text-[22px] font-medium leading-7'>
                  {t("Yuqori sifatli ta'lim")}
                </p>
              </li>
              <li className='flex items-center gap-4 pl-1'>
                <DoubleDegreeIcon />
                <p className='font-serif text-[22px] font-medium leading-7'>
                  {t(
                    '"Double Degree" dasturi asosida 2ta diplomni qo\'lga kiriting'
                  )}
                </p>
              </li>
              <li className='flex items-center gap-4 pl-1'>
                <SuitcaseIcon />
                <p className='font-serif text-[22px] font-medium leading-7'>
                  {t(
                    "Tanlagan yo'nalishingizda yetuk mutaxassis bo'lib yetishing"
                  )}
                </p>
              </li>
              <li className='flex items-center gap-4 pl-1'>
                <BanknoteHandshakeIcon />
                <p className='font-serif text-[22px] font-medium leading-7'>
                  {t(
                    "Universitetda o'qish davrida ishlash imkoniyati (Coworking)"
                  )}
                </p>
              </li>
            </ul>
            <div>
              <button className='rounded-full bg-mainRed px-8 py-2.5 text-white transition-colors delay-100 hover:bg-mainRedLight hover:text-mainRed'>
                {t('Hoziroq ariza qoldiring')}
              </button>
            </div>
          </RoundedBlock>
        </div>
      </section>
      <section className='mt-20 text-center'>
        <div className='mx-auto w-1/2 leading-tight'>
          <Heading2>
            {t("Biz haqimizda talaba va o'qituvchilarning fikri")}
          </Heading2>
          <p className='mt-2'>
            {t(
              "Ko'pchilik bizning sifatli ta'limimiz va institut binosida yaratilgan qulayliklardan mamnun"
            )}
          </p>
        </div>
      </section>
    </div>
  )
}

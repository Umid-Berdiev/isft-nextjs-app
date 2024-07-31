'use client'
import { useState } from 'react'
import BeautyTabItem from './BeautyTabItem'
import RoundedBlock from '../blocks/RoundedBlock'
import Heading5 from '../typography/Heading5'
import { useTranslations } from 'next-intl'
import GlobeIcon from '@/src/app/icons/GlobeIcon'
import { FiBook } from 'react-icons/fi'
import { GiMoneyStack } from 'react-icons/gi'
import { PiCodeBold, PiLaptop } from 'react-icons/pi'
import { FaBookOpenReader } from 'react-icons/fa6'
import { FiInfo } from 'react-icons/fi'
import { FiGlobe } from 'react-icons/fi'
import BookIcon from '@/src/app/icons/BookIcon'
import BanknoteHandIcon from '@/src/app/icons/BanknoteHandIcon'
import CodeSlashIcon from '@/src/app/icons/CodeSlashIcon'
import BookUserIcon from '@/src/app/icons/BookUserIcon'
import LaptopIcon from '@/src/app/icons/LaptopIcon'

export default function BeautyTab() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [selectedBlock, setSelectedBlock] = useState(null)
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
          icon: (className: string) => <GlobeIcon className={className} />
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
          icon: (className: string) => <BookIcon className={className} />
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
          icon: (className: string) => (
            <BanknoteHandIcon className={className} />
          )
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
          icon: (className: string) => <CodeSlashIcon className={className} />
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
          icon: (className: string) => <BookUserIcon className={className} />
        },
        {
          title: t('Masofaviy*'),
          content: [
            'Xorijiy til va adabiyoti',
            'Pedagogika',
            'Psixologiya',
            "Boshlang'ich ta'lim",
            "Maktabgacha ta'lim"
          ],
          icon: (className: string) => <LaptopIcon className={className} />,
          info: t('Masofaviy ta`lim')
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

  const selectTabHandler = (index: number) => {
    console.log({ index })

    setSelectedTab(index)
  }

  return (
    <>
      <div role='tablist' className='flex w-full gap-4'>
        {data.map((item: any, index: number) => (
          <div key={index} className='flex-grow basis-0'>
            <BeautyTabItem
              key={index}
              onClick={() => selectTabHandler(index)}
              className={[selectedTab === index ? 'selected' : '']}
              selected={selectedTab === index}
            >
              {item.title}
            </BeautyTabItem>
          </div>
        ))}
      </div>
      <RoundedBlock className='mt-6 flex-grow !bg-background-secondary'>
        <div className='grid gap-4 lg:grid-cols-3'>
          {data[selectedTab].content?.map((item: any, index: number) => (
            <RoundedBlock
              key={index}
              className={`${selectedBlock === item.title ? '!bg-gradient-to-r from-[#00575B] to-[#00969D] text-white' : 'bg-white'} cursor-pointer`}
              onClick={() => setSelectedBlock(item.title)}
            >
              <Heading5
                className={`flex items-center gap-1 ${selectedBlock === item.title ? 'text-white' : 'text-mainGreen'}`}
              >
                {typeof item.icon === 'function'
                  ? item.icon(
                      selectedBlock === item.title ? 'white' : '#00575B'
                    )
                  : item.icon}
                <span>{item.title}</span>
              </Heading5>
              <div className='mt-14 line-clamp-2 inline-flex flex-wrap gap-2'>
                {item.content.map((i: string) => (
                  <span
                    key={i}
                    className='rounded-2xl border px-3 py-1.5 text-xs'
                  >
                    {i}
                  </span>
                ))}
              </div>
            </RoundedBlock>
          ))}
        </div>
      </RoundedBlock>
    </>
  )
}

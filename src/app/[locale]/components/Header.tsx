'use client'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import AppLogo from '@/src/components/globals/AppLogo'
import AppMainMenu from '@/src/components/globals/AppMainMenu'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import { HiOutlineChat } from 'react-icons/hi'
import { GiGraduateCap, GiWideArrowDunk } from 'react-icons/gi'
import Image from 'next/image'
import { FiArrowUpRight, FiVolumeX } from 'react-icons/fi'
import Heading1 from '@/src/components/typography/Heading1'
import Heading5 from '@/src/components/typography/Heading5'
import FullScreenIcon from '../../icons/FullScreen'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <header className='bg-[url(/images/Hero.svg)] bg-cover bg-no-repeat pb-20'>
      <div className='container flex flex-row items-center justify-between py-5 text-white'>
        <AppLogo locale={locale} />
        <div className='flex flex-row items-center gap-6'>
          <AppMainMenu locale={locale} />
          {/* <ThemeSwitch /> */}
          |
          <LangSwitcher />
          <button className='btn ml-20 rounded-3xl bg-white text-base font-medium'>
            {t('Onlayn qabul')}
          </button>
        </div>
      </div>
      <section className='hero-section container mt-6 flex gap-6 text-white'>
        {/* left block */}
        <div className='left flex-grow'>
          <Heading1>
            <span className='text-[#F9C94D]'>300 ta</span> budjet o‘rni
            2024-2025 yilning qabuli uchun!
          </Heading1>
          <p className='mt-4'>
            {t(
              'Bizning institutimizda BЕPUL o‘qish imkoniyatini qo‘lga kiriting!'
            )}
          </p>
          <div className='mt-6 grid w-full grid-cols-3 gap-6'>
            <RoundedBlock className='!p-0 lg:col-span-3'>
              <Image
                className='max-h-[322px] rounded-3xl object-cover'
                src='/images/51d4a1ad7c132ca66394c7e0cde9f905.png'
                width={836}
                height={322}
                alt='1'
              />
            </RoundedBlock>
            <RoundedBlock
              className={
                'bg-[url(/images/Shapes.svg)] bg-right-top bg-no-repeat lg:col-span-2'
              }
            >
              <div className='btn btn-circle bg-mainRedLight'>
                <GiGraduateCap className='text-3xl text-mainRed' />
              </div>
              <div className='mt-7 flex items-end gap-4'>
                <div>
                  <Heading5>
                    {t('Hoziroq ISFT instituti talabasi bo’ling')}
                  </Heading5>
                  <p className='mt-2'>
                    {t(
                      'Va bizning institutimizda BЕPUL o‘qish imkoniyatini qo‘lga kiriting!'
                    )}
                  </p>
                </div>

                <button className='btn btn-circle border-mainRed bg-white'>
                  <FiArrowUpRight className='text-2xl text-mainRed' />
                </button>
              </div>
            </RoundedBlock>
            <RoundedBlock>
              <p className='text-4xl font-semibold text-mainRed'>20 000+</p>
              <div className='mt-7'>
                <Heading5>{t('Talabalar')}</Heading5>
                <p className='mt-2'>
                  {t('20 mingdan ko’p inson aynan bizni talnadi!')}
                </p>
              </div>
            </RoundedBlock>
          </div>
        </div>

        {/* right block */}
        <div className='right flex w-full max-w-[420px] flex-col gap-6'>
          <RoundedBlock>
            <div className='flex gap-2'>
              <div className='mb-3 flex-grow'>
                <Heading5>{t('Hoziroq biz bilan bog’laning')}</Heading5>
                <p className='mt-2'>
                  {t(
                    'O’zingiz istagan savollarga 5 daqiqa ichida javob oling va o’z o’rningizni band qiling.'
                  )}
                </p>
              </div>
              <div className='flex items-end'>
                <button className='btn btn-circle border-mainRed bg-white'>
                  <HiOutlineChat className='text-3xl text-mainRed' />
                </button>
              </div>
            </div>
          </RoundedBlock>
          <div>
            <Heading5>{t('ISFTning missiyasi va falsafasi')}</Heading5>
            <p className='mt-2'>
              {t(
                'Bizning missiyamiz - talabalarga karyera uchun zarur ko‘nikmalarni berish, ularni turli xil professional muhitlarda muvaffaqiyat qozonishga tayyorlashdir.'
              )}
            </p>
          </div>
          <RoundedBlock className='relative !p-0'>
            <Image
              className='max-h-[404px] rounded-3xl object-cover'
              src='/images/6ef1cf4cacae6bb1b18ab9ed316e33aa.png'
              width={420}
              height={404}
              alt='1'
              // style={{ width: '100%', maxHeight: '322px' }} // optional
            />
            <div className='absolute bottom-6 right-6 flex gap-4'>
              <button className='btn btn-circle'>
                <FiVolumeX className='text-2xl' />
              </button>
              <button className='btn btn-circle'>
                <FullScreenIcon />
              </button>
            </div>
          </RoundedBlock>
        </div>
      </section>
    </header>
  )
}

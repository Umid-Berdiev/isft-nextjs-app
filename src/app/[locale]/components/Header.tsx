'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import AppLogo from '@/src/components/globals/AppLogo'
import AppMainMenu from '@/src/components/globals/AppMainMenu'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import { HiOutlineChat } from 'react-icons/hi'
import { GiGraduateCap } from 'react-icons/gi'
import Image from 'next/image'
import { FiArrowUpRight, FiCornerRightUp } from 'react-icons/fi'

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
          {/* <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a> */}
          <button className='btn ml-20 rounded-3xl bg-white'>
            {t('Onlayn qabul')}
          </button>
        </div>
      </div>
      <section className='hero-section container mt-6 flex gap-6 text-white'>
        {/* left block */}
        <div className='left flex-grow'>
          <h2 className='text-5xl font-semibold '>
            <span className='text-[#F9C94D]'>300 ta</span> budjet o‘rni
            2024-2025 yilning qabuli uchun!
          </h2>
          <p className='mt-4'>
            Bizning institutimizda BЕPUL o‘qish imkoniyatini qo‘lga kiriting!
          </p>
          <div className='mt-6 grid w-full grid-cols-3 gap-6'>
            <RoundedBlock className='p-0 lg:col-span-3'>
              <img
                className='max-h-[322px] rounded-3xl object-cover'
                src='/images/51d4a1ad7c132ca66394c7e0cde9f905.png'
                width={836}
                height={322}
                alt='1'
                // style={{ width: '100%', maxHeight: '322px' }} // optional
              />
            </RoundedBlock>
            <RoundedBlock
              className={
                'bg-[url(/images/Shapes.svg)] bg-right-top bg-no-repeat lg:col-span-2'
              }
            >
              <div className='bg-mainRedLight flex size-12 items-center justify-center rounded-full'>
                <GiGraduateCap className='text-3xl text-mainRed' />
              </div>
              <div className='flex items-end gap-4'>
                <div>
                  <p className='mt-7 text-xl font-semibold'>
                    {t('Hoziroq ISFT instituti talabasi bo’ling')}
                  </p>
                  <p className='mt-2'>
                    {t(
                      'Va bizning institutimizda BЕPUL o‘qish imkoniyatini qo‘lga kiriting!'
                    )}
                  </p>
                </div>

                <button className='flex size-10 items-center justify-center rounded-full border border-mainRed'>
                  <FiArrowUpRight className='text-mainRed' />
                </button>
              </div>
            </RoundedBlock>
            <RoundedBlock>
              <p className='text-4xl font-semibold text-mainRed'>20 000+</p>
              <div className='mt-auto'>
                <p className='mt-7 text-xl font-semibold'>{t('Talabalar')}</p>
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
            <p className='text-xl font-bold'>
              {t('Hoziroq biz bilan bog’laning')}
            </p>
            <p className='mt-2'>
              {t(
                'O’zingiz istagan savollarga 5 daqiqa ichida javob oling va o’z o’rningizni band qiling.'
              )}
            </p>
            <div className='p2.5 ml-auto flex size-11 items-center justify-center rounded-full border border-mainRed'>
              <HiOutlineChat className='text-3xl text-mainRed' />
            </div>
          </RoundedBlock>
          <div>
            <p className='text-xl font-semibold'>
              {t('ISFTning missiyasi va falsafasi')}
            </p>
            <p className='mt-2'>
              {t(
                'Bizning missiyamiz - talabalarga karyera uchun zarur ko‘nikmalarni berish, ularni turli xil professional muhitlarda muvaffaqiyat qozonishga tayyorlashdir.'
              )}
            </p>
          </div>
          <RoundedBlock className='p-0'>
            <img
              className='max-h-[404px] rounded-3xl object-cover'
              src='/images/6ef1cf4cacae6bb1b18ab9ed316e33aa.png'
              width={420}
              height={404}
              alt='1'
              // style={{ width: '100%', maxHeight: '322px' }} // optional
            />
          </RoundedBlock>
        </div>
      </section>
    </header>
  )
}

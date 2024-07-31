import { useTranslations } from 'next-intl'
import Heading2 from '@/src/components/typography/Heading2'
import BeautyTab from '@/src/components/tabs/BeautyTab'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Image from 'next/image'
import Heading3 from '@/src/components/typography/Heading3'
import RewardsIcon from '../icons/RewardsIcon'
import DoubleDegreeIcon from '../icons/DoubleDegreeIcon'
import SuitcaseIcon from '../icons/SuitcaseIcon'
import BanknoteHandshakeIcon from '../icons/BanknoteHandshakeIcon'
import Heading4 from '@/src/components/typography/Heading4'
import { FiArrowUpRight, FiCornerRightUp } from 'react-icons/fi'
import Heading6 from '@/src/components/typography/Heading6'
import CustomDateBlock from '@/src/components/blocks/CustomDateBlock'
import Heading5 from '@/src/components/typography/Heading5'

export default function DashboardPage() {
  const t = useTranslations('')
  const addresses = [
    {
      name: 'toshkent1',
      addresses: [
        {
          title: t('ISFT instituti'),
          address: t(
            "Toshkent viloyati, Qibray tumani, Universitet ko'chasi, 2 uy"
          ),
          tel: '+998 71 289-99-99',
          email: 'info@isft.uz'
        },
        {
          title: t('Markaziy qabul ofisi'),
          address: t(
            "Toshkent shahar, Mirzo Ulug'bek tumani, Temur Malik ko'chasi 18 uy"
          ),
          tel: '+998 71 289-88-88',
          email: 'info@isft.uz'
        }
      ]
    },
    {
      name: 'toshkent2',
      addresses: [
        {
          title: t('ISFT instituti2'),
          address: t(
            "Toshkent viloyati, Qibray tumani, Universitet ko'chasi, 2 uy"
          ),
          tel: '+998 71 289-99-99',
          email: 'info@isft.uz'
        },
        {
          title: t('Markaziy qabul ofisi2'),
          address: t(
            "Toshkent shahar, Mirzo Ulug'bek tumani, Temur Malik ko'chasi 18 uy"
          ),
          tel: '+998 71 289-88-88',
          email: 'info@isft.uz'
        }
      ]
    },
    {
      name: 'samarkand',
      addresses: [
        {
          title: t('ISFT instituti3'),
          address: t(
            "Samarqand viloyati, Qibray tumani, Universitet ko'chasi, 3 uy"
          ),
          tel: '+998 71 389-99-99',
          email: 'info@isft.uz'
        },
        {
          title: t('Markaziy qabul ofisi3'),
          address: t(
            "Samarqand shahar, Mirzo Ulug'bek tumani, Temur Malik ko'chasi 18 uy"
          ),
          tel: '+998 71 289-88-88',
          email: 'info@isft.uz'
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
      <BeautyTab />
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
          <RoundedBlock className='flex flex-col gap-8 bg-background-secondary !p-14 text-left'>
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
              <button className='rounded-full bg-mainRed px-8 py-2.5 text-white transition-colors delay-75 hover:bg-mainRedLight hover:text-mainRed'>
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

      {/* news block */}
      <section className='mt-20 text-center'>
        <div className='mx-auto w-1/2 leading-tight'>
          <Heading2>{t('Yangiliklar')}</Heading2>
          <p className='mt-2'>
            {t("Institutimizdagi eng so'ngi yangiliklarni kuzatib boring")}
          </p>
        </div>
        <div className='mt-8 grid grid-cols-3 items-center gap-6'>
          <div className='left col-span-2 flex flex-shrink-0 flex-col items-start gap-6 self-stretch'>
            <RoundedBlock
              shadow
              className='flex flex-col items-start gap-2 self-stretch bg-background-secondary'
            >
              <Image
                className='w-full rounded-3xl object-cover'
                src='/images/Image_box.png'
                width={788}
                height={360}
                alt='1'
              />
              <div className='flex items-center gap-2 self-stretch pb-0.5 pt-2'>
                <button className='rounded-full bg-gradient-to-r from-[#870037] to-[#C30050] px-2 py-1 text-xs font-extrabold text-white'>
                  {t('KONFERENSIYA')}
                </button>
                <span className='ml-auto text-sm font-extrabold'>00:12:32</span>
              </div>
              <div className='mt-2 text-left'>
                <Heading4>
                  {t(
                    "Yangi O'zbekiston istiqbollari: Iqtisodiyot, ta'lim, menejment va biznes"
                  )}
                </Heading4>
                <p className='text-contentSecondary'>
                  {t(
                    "Bizning institutimizda BЕPUL o'qish imkoniyatini qo'lga kiriting!"
                  )}
                </p>
              </div>
              <div className='flex items-end justify-between self-stretch'>
                <CustomDateBlock date='2024-07-26' />
                <div className='ml-auto inline-flex gap-4'>
                  <button className='btn rounded-full border-mainRed font-medium text-mainRed'>
                    {t('Ishtirok etish')}
                  </button>
                  <button className='btn rounded-full border-mainGreen font-medium text-mainGreen'>
                    <span>{t('Batafsil')}</span>
                    <FiArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </RoundedBlock>
            <div className='flex h-full w-full items-center gap-6'>
              <RoundedBlock
                shadow
                className='flex flex-1 flex-col items-start gap-2 self-stretch bg-background-secondary'
              >
                <button className='mt-2 rounded-full bg-gradient-to-r from-[#00575B] to-[#00969D] px-2 py-1 text-xs font-extrabold text-white'>
                  {t('YANGILIK')}
                </button>
                <Heading6 className='text-left'>
                  {t('Teacher Azam ISFT ga tashrif buyurdi')}
                </Heading6>
                <div className='mt-auto flex w-full items-end justify-between gap-6'>
                  <CustomDateBlock date='2024-07-21' />
                  <button className='rounded-full border border-mainGreen bg-transparent p-1.5 text-mainGreen'>
                    <FiArrowUpRight size={28} />
                  </button>
                </div>
              </RoundedBlock>
              <RoundedBlock
                shadow
                className='flex flex-1 flex-col items-start gap-2 self-stretch bg-background-secondary'
              >
                <button className='mt-2 rounded-full bg-gradient-to-r from-[#00575B] to-[#00969D] px-2 py-1 text-xs font-extrabold text-white'>
                  {t('YANGILIK')}
                </button>
                <Heading6 className='text-left'>
                  {t('ISFT institutining top talabalari')}
                </Heading6>
                <div className='mt-auto flex w-full items-end justify-between gap-6'>
                  <CustomDateBlock date='2024-07-21' />
                  <button className='rounded-full border border-mainGreen bg-transparent p-1.5 text-mainGreen'>
                    <FiArrowUpRight size={28} />
                  </button>
                </div>
              </RoundedBlock>
            </div>
          </div>
          <div className='right flex flex-shrink-0 flex-col items-start gap-6 self-stretch'>
            <RoundedBlock
              shadow
              className='flex flex-col items-start gap-2 self-stretch bg-background-secondary'
            >
              <Image
                className='rounded-3xl object-cover'
                src='/images/image_9.png'
                width={372}
                height={220}
                alt='1'
              />
              <button className='mt-2 rounded-full bg-gradient-to-r from-[#00575B] to-[#00969D] px-2 py-1 text-xs font-extrabold text-white'>
                {t('YANGILIK')}
              </button>
              <Heading6 className='text-left'>
                {t("Hamkor universitet bitiruvchisi Abbosxon Jo'rayev")}
              </Heading6>
              <div className='flex w-full items-end justify-between gap-6'>
                <CustomDateBlock date='2024-07-21' />
                <button className='rounded-full border border-mainGreen bg-transparent p-1.5 text-mainGreen'>
                  <FiArrowUpRight size={28} />
                </button>
              </div>
            </RoundedBlock>
            <RoundedBlock
              shadow
              className='flex flex-col items-start gap-2 self-stretch bg-background-secondary'
            >
              <Image
                className='rounded-3xl object-cover'
                src='/images/image9.png'
                width={372}
                height={220}
                alt='1'
              />
              <button className='mt-2 rounded-full bg-gradient-to-r from-[#00575B] to-[#00969D] px-2 py-1 text-xs font-extrabold text-white'>
                {t('YANGILIK')}
              </button>
              <Heading6 className='text-left'>
                {t("Hamkor universitet bitiruvchisi Abbosxon Jo'rayev")}
              </Heading6>
              <div className='flex w-full items-end justify-between gap-6'>
                <CustomDateBlock date='2024-07-21' />
                <button className='rounded-full border border-mainGreen bg-transparent p-1.5 text-mainGreen'>
                  <FiArrowUpRight size={28} />
                </button>
              </div>
            </RoundedBlock>
          </div>
        </div>
      </section>

      {/* location block */}
      <section className='mt-20 flex items-start gap-4'>
        <RoundedBlock className='flex-1 space-y-6 bg-background-secondary p-10'>
          <Heading3>{t('Joylashuv')}</Heading3>
          <div
            role='tablist'
            className='tabs-boxed tabs tabs-sm space-x-2 bg-transparent'
          >
            {addresses.map((address, index) => (
              <>
                <input
                  type='radio'
                  name='my_tabs_2'
                  role='tab'
                  className='tab !rounded-full bg-white text-sm'
                  aria-label={address.name}
                />
                <div
                  role='tabpanel'
                  className='tab-content mt-6 rounded-box border-base-300 bg-base-100 p-6'
                >
                  Tab content 1
                </div>
              </>
            ))}
          </div>
        </RoundedBlock>
        <RoundedBlock className='flex-1 p-0'>
          <Image
            className='rounded-3xl object-cover'
            src='/images/Map.png'
            width={632}
            height={632}
            alt='1'
          />
        </RoundedBlock>
      </section>
    </div>
  )
}

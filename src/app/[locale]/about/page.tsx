'use client'

import { useTranslations } from 'next-intl'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Image from 'next/image'
import Heading2 from '@/src/components/typography/Heading2'
import Heading3 from '@/src/components/typography/Heading3'
import Heading4 from '@/src/components/typography/Heading4'
import Heading5 from '@/src/components/typography/Heading5'
import BookIcon from '@/src/app/icons/BookIcon'
import BookUserIcon from '@/src/app/icons/BookUserIcon'
import LightningIcon from '@/src/app/icons/LightningIcon'
import RewardsIcon from '@/src/app/icons/RewardsIcon'
import SuitcaseIcon from '@/src/app/icons/SuitcaseIcon'
import UserHeartIcon from '@/src/app/icons/UserHeartIcon'

export default function Applicants() {
  const t = useTranslations('')
  const data = [
    {
      title:
        "ISFT Instituti: O'zbekistondagi Eng Ilg'or Innovatsion O'quv Yurti",
      description:
        "2016 yilda tashkil topgan MChJ «International School of Finance Technology and Science» O'zbekistondagi eng ilg'or innovatsion va istiqbolli o'quv yurtlaridan biri hisoblanadi.2021 yildan boshlab, MChJ «International School of Finance Technology and Science» o'z faoliyatini O'zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Ta'lim sifatini nazorat qilish davlat inspeksiyasi tomonidan berilgan litsenziya bo'yicha “ISFT instituti” brend nomi orqali oliygoh sifatida yuritadi.",
      image: '/images/Image11.png'
    },
    {
      title: "Ta'lim muhiti",
      description:
        "ISFT instituti o'quv dasturining asosiy fanlari milliy va global tadqiqotlarning ustuvor yo'nalishlarini aks ettiradi. Talabalar zamonaviy auditoriyalar, kutubxonalar va elektron resurslarga ega kompyuter xonalarida ta'lim olishadi. ISFT instituti o'z maqsadini nafaqat O'zbekistonda, balki dunyoda tan olinadigan bitiruvchilarni tayyorlashga yo'naltirilgan. Talabalar samarali ta'lim muhitida o'qituvchilar tomonidan dolzarb va amaliy ahamiyatga ega bo'lgan yangi ma'lumotlarga ega bo'ladilar.",
      image: '/images/Image12.png'
    },
    {
      title: "O'ziga xos o'qitish uslubi",
      description:
        "ISFT instituti jahon amaliy tajribasini ta'lim sohasiga singdirgan holda xalqaro darajadagi mutaxassislarni tayyorlashga intiladi. Bizning talabalarimiz yetakchi mutahassislar rahbarligida o'qish imkoniyatlariga egadirlar. Shuningdek, tadqiqotlar hamjamiyatida bo'la turib , ular o'quv dasturlarining dastlabki kunlaridanoq samarali tadqiqot usullarini o'rgana boshlaydilar. Talabalar keng ta'lim olishlarida va ishga joylashishida tengi yo'q bo'lgan turli masalalarni yechish ko'nikmalarini va malakalarini yaxshilash qobiliyatlarini rivojlantiradilar.",
      image: '/images/Image13.png'
    },
    {
      title: 'Kichik guruhlar samaradorligi',
      description:
        "ISFT instituti barcha talabalariga kichik guruhlarda, maxsus ishchi jamoalarida, tajribali o'qituvchilar va akademiklar qo'l ostida ta'lim olish imkoniyatini taqdim qilish samaradorligi g'oyasi tarafdoridir. Bu uslub talabalarning ijodkorligi va tashabbuskorligini rivojlantiradi va faol-tadqiqotlar olib boriladigan o'quv muhitida bilim olishning foydaliligini oshiradi.",
      image: '/images/Image14.png'
    }
  ]

  return (
    <div className='container pb-16'>
      <RoundedBlock className='h-[528px] bg-[url(/images/Head.svg)] bg-cover bg-no-repeat !p-12 !text-white'>
        <Heading2 className=''>{t('Biz haqimizda')}</Heading2>
        <p className='w-1/2'>
          {t(
            "ISFT instituti moslashuvchan g'arb ta'lim tizimini uyg'unlashtirgan holda zamonaviy ta'lim amaliyotidan foydalanadi. Bizning asosiy o'ziga hos tomonlarimiz shundan iboratki, samarali o'qitishning xalqaro e'tirof etilgan tamoyillari to'g'ridan to'g'ri emas, balki O'zbekistondagi ta'lim darajasi va xalq dunyoqarashiga moslashtirilgan holda tadbiq etiladi."
          )}
        </p>
      </RoundedBlock>
      <div className='mt-6 flex flex-col gap-6'>
        {data.map((item, index) => (
          <div
            className={`flex flex-col gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            key={item.title}
          >
            <RoundedBlock className='w-1/2 bg-background-secondary !p-14'>
              <Heading4>{item.title}</Heading4>
              <p className='mt-6'>{item.description}</p>
            </RoundedBlock>
            <RoundedBlock className='w-1/2 !p-0'>
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                layout='responsive'
              />
            </RoundedBlock>
          </div>
        ))}
      </div>
      <div className='mt-20'>
        <Heading2 className='text-center'>
          {t("Bizning bitiruvchilarimizdagi afzalliklar va o'ziga xosliklar")}
        </Heading2>
        <RoundedBlock className='mt-8 grid gap-4 bg-background-secondary !p-6 md:grid-cols-2'>
          <RoundedBlock className='flex flex-col justify-between bg-white !p-6 text-mainGreen md:h-[184px]'>
            <button className='bg-mainGreenLight btn btn-circle btn-md border-transparent'>
              <BookIcon />
            </button>
            <Heading5 className='!text-[22px]'>
              {t("O'z sohasida mukammal kompleks bilimlarga egaligi")}
            </Heading5>
          </RoundedBlock>
          <RoundedBlock className='flex flex-col justify-between bg-white !p-6 text-mainGreen md:h-[184px]'>
            <button className='bg-mainGreenLight btn btn-circle btn-md border-transparent'>
              <LightningIcon />
            </button>
            <Heading5 className='!text-[22px]'>
              {t(
                "Tanqidiy fikrlash va qo'yilgan masalalarni yechish ko'nikmasiga egaligi"
              )}
            </Heading5>
          </RoundedBlock>
          <RoundedBlock className='flex flex-col justify-between bg-white !p-6 text-mainGreen md:h-[184px]'>
            <button className='bg-mainGreenLight btn btn-circle btn-md border-transparent'>
              <SuitcaseIcon />
            </button>
            <Heading5 className='!text-[22px]'>
              {t('Biznes savodxonligi va kirishuvchanligi')}
            </Heading5>
          </RoundedBlock>
          <RoundedBlock className='flex flex-col justify-between bg-white !p-6 text-mainGreen md:h-[184px]'>
            <button className='bg-mainGreenLight btn btn-circle btn-md border-transparent'>
              <RewardsIcon />
            </button>
            <Heading5 className='!text-[22px]'>
              {t(
                "Yetakchilik sifatlari, jamoat bo'lib ishlash va rivojlanish ko'nikmalari"
              )}
            </Heading5>
          </RoundedBlock>
          <RoundedBlock className='flex flex-col justify-between bg-white !p-6 text-mainGreen md:h-[184px]'>
            <button className='bg-mainGreenLight btn btn-circle btn-md border-transparent'>
              <BookUserIcon />
            </button>
            <Heading5 className='!text-[22px]'>
              {t("Ahloqiy kompetensiyaga egaligi va xalqaro bag'rikengligi")}
            </Heading5>
          </RoundedBlock>
          <RoundedBlock className='flex flex-col justify-between bg-white !p-6 text-mainGreen md:h-[184px]'>
            <button className='bg-mainGreenLight btn btn-circle btn-md border-transparent'>
              <UserHeartIcon />
            </button>
            <Heading5 className='!text-[22px]'>
              {t(
                "O'z ishiga sadoqat, hissiyotni jilovlay olish sabr bardoshli bo'lish."
              )}
            </Heading5>
          </RoundedBlock>
        </RoundedBlock>
      </div>
      <RoundedBlock className='mt-20 flex items-center gap-10 bg-mainGreen !p-12 text-white'>
        <div className='space-y-4'>
          <Heading3 className=''>{t("Rektor bilan bog'laning")}</Heading3>
          <p>
            {t(
              "Rektor uchun taklif yoki shikoyatlaringiz bo'lsa tugmani bosish orqali rektor bilan bog'lanishingiz va o'z taklif, shikoyat, e'tirozlaringizni bildirishingiz mumkin"
            )}
          </p>
        </div>
        <div
          className='divider divider-vertical h-auto w-px bg-gray-300'
          // style={{
          //   background:
          //     'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 10.5%, #FFF 50%, rgba(255, 255, 255, 0.00) 90%)'
          // }}
        ></div>
        <div>
          <button className='btn whitespace-nowrap rounded-full bg-white px-5'>
            {t('Elektron qabulxona')}
          </button>
        </div>
      </RoundedBlock>
      <div className='mt-20 text-center'>
        <Heading2>{t('Litsenziya va sertifikatlar')}</Heading2>
        <div className='flex-start mt-8 flex justify-center gap-4'>
          <RoundedBlock className='w-full max-w-80 bg-background-secondary !p-6'>
            <Image
              src='/images/Image15.png'
              alt='1'
              width={260}
              height={367}
              layout='responsive'
            />
          </RoundedBlock>
          <RoundedBlock className='w-full max-w-80 bg-background-secondary !p-6'>
            <Image
              src='/images/Image16.png'
              alt='1'
              width={260}
              height={367}
              layout='responsive'
            />
          </RoundedBlock>
        </div>
      </div>
    </div>
  )
}

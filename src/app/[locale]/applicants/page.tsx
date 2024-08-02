'use client'

import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Heading2 from '@/src/components/typography/Heading2'
import Heading4 from '@/src/components/typography/Heading4'
import Heading6 from '@/src/components/typography/Heading6'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect } from 'react'
import BookIcon from '../../icons/BookIcon'
import Heading3 from '@/src/components/typography/Heading3'
import Heading5 from '@/src/components/typography/Heading5'

export default function About() {
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
        "ISFT instituti jahon amaliy tajribasini ta'lim sohasiga singdirgan holda xalqaro darajadagi mutaxassislarni tayyorlashga intiladi. Bizning talabalarimiz yetakchi mutahassislar rahbarligida o‘qish imkoniyatlariga egadirlar. Shuningdek, tadqiqotlar hamjamiyatida bo‘la turib , ular o‘quv dasturlarining dastlabki kunlaridanoq samarali tadqiqot usullarini o‘rgana boshlaydilar. Talabalar keng ta'lim olishlarida va ishga joylashishida tengi yo‘q bo‘lgan turli masalalarni yechish ko‘nikmalarini va malakalarini yaxshilash qobiliyatlarini rivojlantiradilar.",
      image: '/images/Image13.png'
    },
    {
      title: 'Kichik guruhlar samaradorligi',
      description:
        "ISFT instituti barcha talabalariga kichik guruhlarda, maxsus ishchi jamoalarida, tajribali o‘qituvchilar va akademiklar qo‘l ostida ta'lim olish imkoniyatini taqdim qilish samaradorligi g‘oyasi tarafdoridir. Bu uslub talabalarning ijodkorligi va tashabbuskorligini rivojlantiradi va faol-tadqiqotlar olib boriladigan o‘quv muhitida bilim olishning foydaliligini oshiradi.",
      image: '/images/Image14.png'
    }
  ]

  return (
    <div className='container'>
      <RoundedBlock className='h-[528px] bg-[url(/images/Head.svg)] bg-cover bg-no-repeat !p-12 !text-white'>
        <Heading2 className=''>{t('Biz haqimizda')}</Heading2>
        <p className='w-1/2'>
          {t(
            "ISFT instituti moslashuvchan g‘arb ta'lim tizimini uyg‘unlashtirgan holda zamonaviy ta'lim amaliyotidan foydalanadi. Bizning asosiy o‘ziga hos tomonlarimiz shundan iboratki, samarali o'qitishning xalqaro e'tirof etilgan tamoyillari to‘g‘ridan to‘g‘ri emas, balki O‘zbekistondagi ta'lim darajasi va xalq dunyoqarashiga moslashtirilgan holda tadbiq etiladi."
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
      <div className=''>
        <Heading2 className='text-center'>
          {t('Bizning bitiruvchilarimizdagi afzalliklar va o’ziga xosliklar')}
        </Heading2>
        <RoundedBlock className='mt-8 grid gap-4 bg-background-secondary !p-6 md:grid-cols-2'>
          <RoundedBlock className='flex flex-col justify-between bg-white !p-6 text-mainGreen md:h-[184px]'>
            <button className='btn btn-circle btn-md bg-background-secondary'>
              <BookIcon />
            </button>
            <Heading5 className='!text-[22px]'>
              {t("O'z sohasida mukammal kompleks bilimlarga egaligi")}
            </Heading5>
          </RoundedBlock>
        </RoundedBlock>
      </div>
    </div>
  )
}

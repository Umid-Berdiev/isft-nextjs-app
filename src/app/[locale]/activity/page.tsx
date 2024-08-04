import CustomDateBlock from '@/src/components/blocks/CustomDateBlock'
import RoundedBlock from '@/src/components/blocks/RoundedBlock'
import Heading1 from '@/src/components/typography/Heading1'
import Heading2 from '@/src/components/typography/Heading2'
import Heading4 from '@/src/components/typography/Heading4'
import Heading5 from '@/src/components/typography/Heading5'
import Heading6 from '@/src/components/typography/Heading6'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import DownloadArrowIcon from '../../icons/DownloadArrowIcon'

export default function Activity() {
  const t = useTranslations('')

  return (
    <div className='container pb-4'>
      <div className='grid gap-x-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <Heading1>{t('Activity')}</Heading1>
          <p className='mt-4'>
            {t(
              "ISFT institutining olib borayotgan faoliyatlarini ko'rishingiz mumkin"
            )}
          </p>
          <RoundedBlock
            shadow
            className='mt-6 flex flex-col items-start gap-2 self-stretch bg-background-secondary'
          >
            <Image
              className='w-full rounded-3xl object-cover'
              src='/images/Image_box.png'
              width={788}
              height={291}
              alt='1'
              layout='responsive'
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
                <button className='btn btn-sm h-10 rounded-full border-mainRed font-medium text-mainRed'>
                  {t('Ishtirok etish')}
                </button>
                <button className='btn btn-sm h-10 rounded-full border-mainGreen font-medium text-mainGreen'>
                  <span>{t('Batafsil')}</span>
                  <FiArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </RoundedBlock>
        </div>
        <RoundedBlock className='flex flex-col gap-y-2 bg-background-secondary'>
          <div className='space-y-2'>
            <Heading5>{t('Ilmiy jurnal')}</Heading5>
            <p>
              Har chorakda bir marotaba elektron shaklda nashr qilinuvchi
              ilmiy-uslubiy jurnal sahifalarida biznes, boshqaruv, pedagogika
              sohalari yutuq va muammolariga oid ilmiy maqolalar, tezislar,
              ilmiy tadqiqot faoliyatini samarali olib borish bo\'yicha
              tavsiyalar chop etiladi hamda sohaga tegishli me\'yoriy hujjatlar,
              qonunlar, farmonlar, farmoyishlar, qarorlar, buyruqlar, nizomlar,
              yo\'riqnoma va shunga o\'xshash materillarga sharhlar berib
              boriladi.
            </p>
          </div>
          <div className='mt-auto space-y-2'>
            <div className='flex gap-x-2 rounded-3xl bg-white p-5 font-medium'>
              <span className=''>{t('ISFT jurnal')}</span>
              <button className='ml-auto flex items-center text-sm text-mainGreen'>
                <span className='mr-2'>{t('Batafsil')}</span>
                <FiArrowUpRight size={20} />
              </button>
            </div>
            <div className='flex gap-x-2 rounded-3xl bg-white p-5 font-medium'>
              <span className=''>{t('Elektron kutubxona')}</span>
              <button className='ml-auto flex items-center text-sm text-mainGreen'>
                <span className='mr-2'>{t('Batafsil')}</span>
                <FiArrowUpRight size={20} />
              </button>
            </div>
            <div className='flex gap-x-2 rounded-3xl bg-white p-5 font-medium'>
              <span className=''>{t('Biznes inkubator')}</span>
              <button className='ml-auto flex items-center text-sm text-mainGreen'>
                <span className='mr-2'>{t('Batafsil')}</span>
                <FiArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </RoundedBlock>
      </div>
      <div className='mt-20 text-center'>
        <Heading2 className=''>{t('Ilmiy tadqiqot')}</Heading2>
        <p className='mt-2'>{t('ISFT ning ilmiy tadqiqotlar markazi')}</p>
        <div className='mt-8 grid gap-6 lg:grid-cols-3'>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <Heading4>{t('Tadqiqotlar')}</Heading4>
              <button className='ml-auto flex items-center text-sm text-mainGreen'>
                <span className='mr-2'>{t("Barchasini ko'rish")}</span>
                <FiArrowUpRight size={20} />
              </button>
            </div>
            <RoundedBlock className='flex h-[188px] flex-col bg-background-secondary text-left'>
              <div>
                <button className='rounded-full bg-gradient-to-r from-[#00575B] to-[#00969D] px-2 py-1 text-xs font-extrabold text-white'>
                  {t('Tadqiqot')}
                </button>
              </div>
              <Heading6 className='mt-auto'>
                {t('Azizov Shohsuvor Yuldashevich')}
              </Heading6>
              <p className='text-contentTertiary text-sm'>
                {t(
                  'International school of finance technology and science instituti aniq fanlar kafedrasi dotsenti v.b., i.f.b.f.doktori (PhD)'
                )}
              </p>
            </RoundedBlock>
            <RoundedBlock className='flex h-[188px] flex-col bg-background-secondary text-left'>
              <div>
                <button className='rounded-full bg-gradient-to-r from-[#00575B] to-[#00969D] px-2 py-1 text-xs font-extrabold text-white'>
                  {t('Tadqiqot')}
                </button>
              </div>
              <Heading6 className='mt-auto'>
                {t('Maxkamova Munisaxon Abdumannopovna')}
              </Heading6>
              <p className='text-contentTertiary text-sm'>
                {t(
                  "International school of finance technology and science instituti ingliz tili o'qituvchisi"
                )}
              </p>
            </RoundedBlock>
            <RoundedBlock className='flex h-[188px] flex-col bg-background-secondary text-left'>
              <div>
                <button className='rounded-full bg-gradient-to-r from-[#00575B] to-[#00969D] px-2 py-1 text-xs font-extrabold text-white'>
                  {t('Tadqiqot')}
                </button>
              </div>
              <Heading6 className='mt-auto'>
                {t('Yusupova Gulizebo Yangiboyevna')}
              </Heading6>
              <p className='text-contentTertiary text-sm'>
                {t(
                  "International school of finance technology and science instituti ingliz tili o'qituvchisi"
                )}
              </p>
            </RoundedBlock>
          </div>
          <RoundedBlock className='space-y-6 bg-background-secondary lg:col-span-2'>
            <div className='flex items-center'>
              <Heading4>{t('Konferensiyalar')}</Heading4>
              <button className='ml-auto flex items-center text-sm text-mainGreen'>
                <span className='mr-2'>{t("Barchasini ko'rish")}</span>
                <FiArrowUpRight size={20} />
              </button>
            </div>
            <RoundedBlock className='flex h-[258px] gap-4 bg-white'>
              <Image
                className='rounded-3xl object-cover'
                src='/images/Image_box.png'
                width={344}
                height={210}
                alt='1'
              />
              <div className='flex flex-col'>
                <div className='flex items-center gap-2 self-stretch pb-0.5 pt-2'>
                  <button className='rounded-full bg-gradient-to-r from-[#870037] to-[#C30050] px-2 py-1 text-xs font-extrabold text-white'>
                    {t('KONFERENSIYA')}
                  </button>
                  <span className='ml-auto text-sm font-extrabold'>
                    00:12:32
                  </span>
                </div>
                <div className='mt-2 text-left'>
                  <Heading5>
                    {t(
                      "Yangi O'zbekiston istiqbollari: Iqtisodiyot, ta'lim, menejment va biznes"
                    )}
                  </Heading5>
                </div>
                <div className='mt-auto flex items-center justify-between self-stretch'>
                  <CustomDateBlock date='2024-07-26' />
                  <div className='ml-auto inline-flex gap-4'>
                    <button className='btn btn-sm h-10 rounded-full border-mainRed bg-white font-medium text-mainRed'>
                      {t('Ishtirok etish')}
                    </button>
                    <button className='btn btn-sm h-10 rounded-full border-mainGreen bg-white font-medium text-mainGreen'>
                      <span>{t('Batafsil')}</span>
                      <FiArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </RoundedBlock>
            <RoundedBlock className='flex h-[258px] gap-4 bg-white'>
              <Image
                className='rounded-3xl object-cover'
                src='/images/Image_box2.png'
                width={344}
                height={210}
                alt='1'
              />
              <div className='flex flex-col'>
                <div className='flex items-center gap-2 self-stretch pb-0.5 pt-2'>
                  <button className='rounded-full bg-gradient-to-r from-[#870037] to-[#C30050] px-2 py-1 text-xs font-extrabold text-white'>
                    {t('KONFERENSIYA')}
                  </button>
                  <span className='ml-auto text-sm font-extrabold'>
                    00:12:32
                  </span>
                </div>
                <div className='mt-2 text-left'>
                  <Heading5>
                    {t("“TILLARNI O'QITISHDA ZAMONAVIY YONDASHUVLAR”")}
                  </Heading5>
                </div>
                <div className='mt-auto flex items-center justify-between self-stretch'>
                  <CustomDateBlock date='2024-8-4' />
                  <div className='ml-auto inline-flex gap-4'>
                    <button className='btn btn-sm h-10 rounded-full border-mainRed bg-white font-medium text-mainRed'>
                      {t('Ishtirok etish')}
                    </button>
                    <button className='btn btn-sm h-10 rounded-full border-mainGreen bg-white font-medium text-mainGreen'>
                      <span>{t('Batafsil')}</span>
                      <FiArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </RoundedBlock>
          </RoundedBlock>
        </div>
        <RoundedBlock className='mt-6 bg-background-secondary'>
          <div className='flex items-center'>
            <Heading4>{t('Maqolalar')}</Heading4>
            <button className='ml-auto flex items-center text-sm text-mainGreen'>
              <span className='mr-2'>{t("Barchasini ko'rish")}</span>
              <FiArrowUpRight size={20} />
            </button>
          </div>
          <div className='mt-6 grid grid-cols-3 gap-6'>
            <RoundedBlock className='bg-white text-left'>
              <Image
                className='rounded-3xl object-cover'
                src='/images/Image17.png'
                width={347}
                height={220}
                alt='1'
                layout='responsive'
              />
              <Heading6 className='mt-4'>
                {t('“Umidsizlik — halokat, buning ustiga, hatto — gunoh”')}
              </Heading6>
              <p className='text-contentTertiary mt-2 text-sm'>
                {t(
                  "Bu yil iyulda amerikalik taniqli yozuvchi, Nobel mukofoti sohibi Ernest Heminguey tavalludiga 125 yil to'ldi. Uning bir qator qissa va romanlari, shuningdek, ayrim hikoyalari o'zbek tiliga o'girilgan. Sana munosabati bilan “Gazeta.uz” Hemingueyning “Chol va dengiz” qissasidan parchalar keltiradi."
                )}
              </p>
            </RoundedBlock>
            <RoundedBlock className='bg-white text-left'>
              <Image
                className='rounded-3xl object-cover'
                src='/images/Image18.png'
                width={347}
                height={220}
                alt='1'
                layout='responsive'
              />
              <Heading6 className='mt-4'>
                {t(
                  "Nima o'qiymiz? Manbashunos tarixchi Hilola Nazirova tavsiya qiladi"
                )}
              </Heading6>
              <p className='text-contentTertiary mt-2 text-sm'>
                {t(
                  "Sara asarlar, o'qilishi maqsadga muvofiq hisoblangan kitoblar ro'yxati haqida olim, tadqiqotchi, yozuvchi-shoir, tarjimon, jurnalist va jamoat faollarining tavsiyalarini sizga yetkazamiz."
                )}
              </p>
            </RoundedBlock>
            <RoundedBlock className='bg-white text-left'>
              <Image
                className='rounded-3xl object-cover'
                src='/images/Image19.png'
                width={347}
                height={220}
                alt='1'
                layout='responsive'
              />
              <Heading6 className='mt-4'>
                {t(
                  "Ko'chmas mulkdan keladigan daromadni qanday hisoblash kerak?"
                )}
              </Heading6>
              <p className='text-contentTertiary mt-2 text-sm'>
                {t(
                  "Deylik, ko'chmas mulkka investitsiya kiritmoqchisiz. Toshkentda uy-joy narxlari o'sishi hisobga olinsa, xarajatingiz 5−7 yil ichida o'zini oqlashi kerak. Bu qanchalik haqiqatga yaqin? Denis Sokolovning navbatdagi maqolasi — ko'chmas mulkka investitsiyadan daromad olish va haqiqiy daromadni to'g'ri hisoblash haqida."
                )}
              </p>
            </RoundedBlock>
          </div>
        </RoundedBlock>
      </div>
      <div className='mt-20 text-center'>
        <Heading2 className=''>{t("O'quv faoliyati")}</Heading2>
        <p className='mt-2'>
          {t(
            "Institutimizning o'quv rajalari va o'quv grafigini ko'rishingiz mumkin"
          )}
        </p>
        <div className='mt-8 grid gap-6 text-left lg:grid-cols-2'>
          <RoundedBlock className='bg-background-secondary'>
            <Heading4>{t("O'quv rejalari")}</Heading4>
            <div className='mt-6 flex gap-6'>
              <RoundedBlock className='bg-white'>
                <Heading5>{t('Bakalavr')}</Heading5>
                <p className='text-contentTertiary mt-2'>
                  {t("Bakalavr bosqichi uchun o'quv rejalari")}
                </p>
                <div className='mt-auto flex w-full items-end justify-end'>
                  <button className='rounded-full border border-mainGreen bg-transparent p-1.5 text-mainGreen'>
                    <FiArrowUpRight size={28} />
                  </button>
                </div>
              </RoundedBlock>
              <RoundedBlock className='bg-white'>
                <Heading5>{t('Magistratura')}</Heading5>
                <p className='text-contentTertiary mt-2'>
                  {t("Magistratura bosqichi uchun o'quv rejalari ")}
                </p>
                <div className='mt-auto flex w-full items-end justify-end'>
                  <button className='rounded-full border border-mainGreen bg-transparent p-1.5 text-mainGreen'>
                    <FiArrowUpRight size={28} />
                  </button>
                </div>
              </RoundedBlock>
            </div>
          </RoundedBlock>
          <RoundedBlock className='bg-background-secondary'>
            <Heading4>{t("O'quv grafigi")}</Heading4>
            <RoundedBlock className='mt-6 flex flex-col bg-white'>
              <Heading5>{t("O'quv jarayonlari grafiglari")}</Heading5>
              <p className='text-contentTertiary mt-2'>
                {t("2023-2024 o'quv yiliga o'quv jarayoni grafigi")}
              </p>
              <div className='mt-6 inline-flex w-full items-end justify-end'>
                <button className='btn btn-sm h-10 rounded-full border border-mainGreen bg-transparent px-4 text-mainGreen'>
                  <span>{t('Grafigni yuklab olish')}</span>
                  <DownloadArrowIcon />
                </button>
              </div>
            </RoundedBlock>
          </RoundedBlock>
        </div>
      </div>
      <div className='mt-20'>
        <Heading2 className='text-center'>{t('Xalqaro faoliyat')}</Heading2>
        <p className='mt-2 text-center'>
          {t(
            'Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc urna magna gravida '
          )}
        </p>
        <div className='mt-8 grid gap-6 lg:grid-cols-2'>
          <RoundedBlock className='flex flex-col gap-6 bg-background-secondary'>
            <Heading4>{t('Xalqaro hamkor institutlar')}</Heading4>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc
              urna magna gravida lorem odio porttitor sed. Commodo orci in
              aliquam ut laoreet. Vel fermentum vestibulum mollis quam neque. Id
              urna leo suspendisse etiam pharetra ut sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc
              urna magna gravida lorem odio porttitor sed. Commodo orci in
              aliquam ut laoreet. Vel fermentum vestibulum mollis quam neque. Id
              urna leo suspendisse etiam pharetra ut sed.
            </p>
            <div className='flex'>
              <button className='btn btn-sm ml-auto h-10 rounded-full border-transparent bg-white font-medium'>
                <span>{t('PDF shaklida yuklab oling')}</span>
                <DownloadArrowIcon color='#0D0D0D' />
              </button>
            </div>
          </RoundedBlock>
          <RoundedBlock className='flex flex-col gap-6 bg-background-secondary'>
            <Heading4>{t("Chet el fuqarolari uchun ta'lim")}</Heading4>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc
              urna magna gravida lorem odio porttitor sed. Commodo orci in
              aliquam ut laoreet. Vel fermentum vestibulum mollis quam neque. Id
              urna leo suspendisse etiam pharetra ut sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc
              urna magna gravida lorem odio porttitor sed. Commodo orci in
              aliquam ut laoreet. Vel fermentum vestibulum mollis quam neque. Id
              urna leo suspendisse etiam pharetra ut sed.
            </p>
            <div className='flex'>
              <button className='btn btn-sm ml-auto h-10 rounded-full border-transparent bg-white font-medium'>
                <span>{t('PDF shaklida yuklab oling')}</span>
                <DownloadArrowIcon color='#0D0D0D' />
              </button>
            </div>
          </RoundedBlock>
        </div>
      </div>
      <div className='mt-20'>
        <Heading2 className='text-center'>{t('Ijtimoiy faoliyat')}</Heading2>
        <p className='mt-2 text-center'>
          {t(
            'Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc urna magna gravida '
          )}
        </p>
        <div className='mt-8 grid gap-6 lg:grid-cols-3'>
          <RoundedBlock className='col-span-2 space-y-4 bg-background-secondary'>
            <div className='flex items-center'>
              <Heading4>{t('ISFT faollar klubi')}</Heading4>
              <button className='ml-auto flex items-center text-sm text-mainGreen'>
                <span className='mr-2'>{t("Barchasini ko'rish")}</span>
                <FiArrowUpRight size={20} />
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc
              urna magna gravida lorem odio porttitor sed.
            </p>
            <div className='grid grid-flow-col grid-cols-2 grid-rows-3  gap-4'>
              <div className='row-span-2'>
                <img
                  className='h-full w-full rounded-3xl object-cover'
                  src='/images/Image20.png'
                  alt='1'
                />
              </div>
              <div className=''>
                <img
                  className='h-full w-full rounded-3xl object-cover'
                  src='/images/Image22.png'
                  alt='1'
                />
              </div>
              <div className=''>
                <img
                  className='h-full w-full rounded-3xl object-cover'
                  src='/images/Image21.png'
                  alt='1'
                />
              </div>
              <div className='row-span-2'>
                <img
                  className='h-full w-full rounded-3xl object-cover'
                  src='/images/Image23.png'
                  alt='1'
                />
              </div>
            </div>
          </RoundedBlock>
          <RoundedBlock className='space-y-4 bg-background-secondary'>
            <Heading4>{t('Bitiruvchilar uyushmasi')}</Heading4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc
              urna magna gravida lorem odio porttitor sed. Commodo orci in
              aliquam ut laoreet. Vel fermentum vestibulum mollis quam neque. Id
              urna leo suspendisse etiam pharetra ut sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Posuere tincidunt nunc
              urna magna gravida lorem odio porttitor sed. Commodo orci in
              aliquam ut laoreet. Vel fermentum vestibulum mollis quam neque. Id
              urna leo suspendisse etiam pharetra ut sed.
            </p>
          </RoundedBlock>
        </div>
      </div>
    </div>
  )
}

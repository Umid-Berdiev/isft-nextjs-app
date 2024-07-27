import { Link } from '@/src/navigation'

export default function AppLogo({ locale }: { locale: string }) {
  return (
    <Link lang={locale} href='/'>
      {/* <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>Template</strong> */}
      <span className='select-none text-5xl font-extrabold'>ISFT</span>
    </Link>
  )
}

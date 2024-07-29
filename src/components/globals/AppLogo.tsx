import { Link } from '@/src/navigation'

export default function AppLogo({ locale }: { locale: string }) {
  return (
    <Link lang={locale} href='/' className='font-serif text-5xl font-bold'>
      {/* <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>Template</strong> */}
      <span className='select-none'>ISFT</span>
    </Link>
  )
}

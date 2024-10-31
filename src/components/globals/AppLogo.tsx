import Link from 'next/link'

export default function AppLogo({ className }: { className?: string }) {
  return (
    <Link href='/' className={`font-serif text-5xl font-bold ${className}`}>
      <span className='select-none'>LOGO</span>
    </Link>
  )
}

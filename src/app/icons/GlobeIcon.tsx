export default function GlobeIcon({
  className = '#00575B'
}: {
  className?: string
}) {
  return (
    <svg
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 24.5C8.2005 24.5 3.5 19.7995 3.5 14C3.5 8.2005 8.2005 3.5 14 3.5C19.7995 3.5 24.5 8.2005 24.5 14'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.09497 10.5H23.7766'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.09497 17.5H14'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.6667 14C18.6667 10.7753 17.8232 7.55062 16.1386 4.73662C15.1504 3.08812 12.8497 3.08812 11.8627 4.73662C8.49107 10.3658 8.49107 17.6353 11.8627 23.2645C12.3562 24.0881 13.1787 24.5011 14.0012 24.5011'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.3649 22.365L25.2874 21.196C25.8019 20.9907 25.7902 20.258 25.2699 20.0678L18.3095 17.5373C17.8289 17.3623 17.3634 17.829 17.5372 18.3097L20.0677 25.27C20.2567 25.7915 20.9894 25.802 21.1959 25.2875L22.3649 22.365Z'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

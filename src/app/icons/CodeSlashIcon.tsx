export default function CodeSlashIcon({
  className = '#00575B'
}: {
  className?: string
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      viewBox='0 0 28 28'
      fill='none'
    >
      <path
        d='M16.0767 4.66663L11.9233 23.3333'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 9.33337L25.6667 14L21 18.6667'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.99992 18.6667L2.33325 14L6.99992 9.33337'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

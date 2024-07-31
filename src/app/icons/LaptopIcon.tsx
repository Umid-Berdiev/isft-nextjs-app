export default function LaptopIcon({
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.04171 18.9584H25.9584C26.6027 18.9584 27.1251 19.4807 27.1251 20.125L27.1251 20.9811C27.1343 22.619 25.9031 23.9985 24.2659 24.1756C24.048 24.1969 23.8459 24.2084 23.6834 24.2084L4.30352 24.2083C4.09556 24.2051 3.88793 24.1908 3.68196 24.1652C2.07419 23.9669 0.868576 22.5978 0.875026 20.9814V20.125C0.875026 19.4807 1.39739 18.9584 2.04171 18.9584ZM25.375 20.7084H2.62388L2.62502 20.9849C2.62229 21.6696 3.09775 22.2554 3.75352 22.4035L3.89669 22.4285C4.04045 22.4463 4.18506 22.4563 4.31671 22.4584H23.6834C23.7837 22.4584 23.9304 22.45 24.0865 22.4348C24.8227 22.3551 25.3793 21.7315 25.3751 20.986L25.375 20.7084Z'
        fill={className}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.25016 3.79163H22.7502C23.8777 3.79163 24.7918 4.70571 24.7918 5.83329V19.8333C24.7918 20.3165 24.4001 20.7083 23.9168 20.7083H4.0835C3.60025 20.7083 3.2085 20.3165 3.2085 19.8333V5.83329C3.2085 4.70571 4.12258 3.79163 5.25016 3.79163ZM22.817 5.54933L22.7502 5.54163H5.25016C5.08908 5.54163 4.9585 5.67221 4.9585 5.83329V18.9583H23.0418V5.83329C23.0418 5.69522 22.9459 5.57956 22.817 5.54933Z'
        fill={className}
      />
    </svg>
  )
}
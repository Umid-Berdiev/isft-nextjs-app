export default function LightningIcon({
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
        d='M15.128 3.5L5.5415 16.3333H13.9998L12.8717 24.5L22.4582 11.6667H13.9998L15.128 3.5Z'
        stroke={className}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

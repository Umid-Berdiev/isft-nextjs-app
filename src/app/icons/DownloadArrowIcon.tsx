export default function DownloadArrowIcon({
  color = '#00575B',
  size = 24
}: {
  color?: string
  size?: number
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M15.5578 11.1104L12.0004 14.6678L8.44287 11.1104'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.0002 3.99707L12.0002 14.6685'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.0032 16.4463C20.0032 18.411 18.4105 20.0038 16.4458 20.0038H7.55406C5.58932 20.0038 3.99658 18.411 3.99658 16.4463'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default function BookUserIcon({
  color = '#00575B',
  size = 28
}: {
  color?: string
  size?: number
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 28 28'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M24.5044 13.4221V21.4161C24.5061 22.0493 24.0006 22.5672 23.3676 22.5809C20.0716 22.5199 16.825 23.3888 14 25.088C11.1751 23.3888 7.92853 22.5199 4.63247 22.5809C3.99946 22.5672 3.49394 22.0493 3.49564 21.4161V13.4221C3.49281 12.9391 3.69006 12.4765 4.04056 12.1443C4.39106 11.812 4.8635 11.6397 5.3456 11.6684C8.38834 11.7653 11.3605 12.6093 14 14.126C16.6396 12.6093 19.6117 11.7653 22.6545 11.6684C23.1366 11.6397 23.609 11.812 23.9595 12.1443C24.31 12.4765 24.5073 12.9391 24.5044 13.4221V13.4221Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.0001 14.126V25.0879'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='14'
        cy='6.41345'
        r='3.50146'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

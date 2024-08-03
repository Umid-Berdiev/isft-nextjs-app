export default function UserHeartIcon({
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
        d='M4.66264 22.1701C4.65751 20.937 5.14237 19.7525 6.01061 18.8769C6.87884 18.0014 8.05931 17.5066 9.29234 17.5015C9.30531 17.5015 9.3183 17.5015 9.33129 17.5015H12.0287'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.1669 19.241C15.2235 20.4089 15.6891 21.5197 16.4823 22.3788C17.1158 23.1146 17.8717 23.7354 18.7167 24.2138C19.4525 24.6243 20.3543 24.5977 21.0646 24.1446C21.8305 23.6551 22.5191 23.0541 23.1078 22.3615C23.9156 21.5111 24.4083 20.41 24.5042 19.241C24.5097 18.5455 24.2497 17.8741 23.7771 17.3639C23.323 16.869 22.6838 16.585 22.0122 16.5795C21.1689 16.5205 20.354 16.8966 19.8516 17.5765L19.8356 17.5999L19.8194 17.5765C19.3623 16.9332 18.6152 16.5595 17.8263 16.5795C17.117 16.5675 16.4333 16.8441 15.9318 17.3459C15.4304 17.8477 15.1543 18.5317 15.1669 19.241Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle
        cx='14'
        cy='8.45601'
        r='4.9604'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

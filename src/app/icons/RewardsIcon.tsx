export default function RewardsIcon({
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
      viewBox='0 0 32 32'
      fill='none'
    >
      <path
        d='M8.168 18.3999L4 22.6666L7.33333 24.6666L9.33333 27.9999L14.532 22.5399'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.4678 22.5399L22.6664 27.9999L24.6664 24.6666L27.9998 22.6666L23.8318 18.3999'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22.5995 6.73367C26.2444 10.3786 26.2444 16.2881 22.5995 19.933C18.9546 23.5779 13.0451 23.5779 9.40017 19.933C5.75528 16.2881 5.75528 10.3786 9.40017 6.73367C13.0451 3.08878 18.9546 3.08878 22.5995 6.73367'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.9989 16.7786L18.3949 18.0373C18.8615 18.2826 19.4069 17.8866 19.3175 17.3666L18.8602 14.6986L20.7989 12.8106C21.1762 12.4426 20.9682 11.8013 20.4469 11.7253L17.7682 11.336L16.5709 8.90798C16.3375 8.43465 15.6642 8.43465 15.4309 8.90798L14.2335 11.336L11.5535 11.7266C11.0322 11.8026 10.8242 12.444 11.2015 12.812L13.1402 14.7L12.6829 17.368C12.5935 17.888 13.1389 18.284 13.6055 18.0386L16.0015 16.78H15.9989V16.7786Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

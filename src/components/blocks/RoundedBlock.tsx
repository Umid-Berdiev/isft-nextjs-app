import styles from './RoundedBlock.module.scss'

export default function RoundedBlock({
  children,
  className,
  shadow,
  onClick
}: {
  children?: React.ReactNode
  className?: string
  shadow?: boolean
  onClick?: () => void
}) {
  return (
    <div
      className={`text-contentPrimary rounded-3xl p-6 ${className} ${shadow ? styles.shadow : ''} hover:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default function RoundedBlock({
  children,
  className,
  onClick
}: {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <div
      className={`rounded-3xl bg-white p-6 text-black ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default function RoundedBlock({ children, className }: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-3xl bg-white p-6 text-black ${className}`}>
      {children}
    </div>
  )
}

export default function Heading6({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h6 className={`font-serif text-lg font-semibold ${className}`}>
      {children}
    </h6>
  )
}

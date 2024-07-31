export default function Heading1({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1 className={`font-serif text-5xl font-semibold ${className}`}>
      {children}
    </h1>
  )
}

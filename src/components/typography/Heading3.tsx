export default function Heading3({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3 className={`font-serif text-[32px] font-semibold ${className}`}>
      {children}
    </h3>
  )
}

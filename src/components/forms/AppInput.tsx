interface IProps {
  placeholder?: string
  className?: string
}

export default function AppInput(props: IProps) {
  return (
    <input
      type='text'
      placeholder={props.placeholder}
      className={`w-full max-w-xs rounded-lg border px-3 py-2 ${props.className}`}
    />
  )
}

import { ReactNode } from "react"

interface ButtonProps {
  type: "button" | "submit" | undefined
  icon?: ReactNode
  text?: string
  className?: string
  handleClick?: () => void
}

export default function Button({ type, icon, text, className, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick} type={type} className={className}>
      {icon}
      {text}
    </button>
  )
}

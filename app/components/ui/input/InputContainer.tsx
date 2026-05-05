import { InputContainerProps } from '@/types/inputTypes'

export default function InputContainer({containerClassName, className, children, ...props}:InputContainerProps) {
  return (
    <div className={containerClassName}>
      <input type="text" {...props} className={className} />
      {children}
    </div>
  )
}

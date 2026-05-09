import { InputHTMLAttributes, ReactNode } from "react";

export interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string
  children?: ReactNode
}



export interface Options {
  title: string
  category: string
}

export interface DropDownProps {
  options: Options[]
  onSelect: (value: Options) => void
  placeholder?: string
  className?: string
  iconClassName: string
  iconColor: string
  dropDownClassName: string
}

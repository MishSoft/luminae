"use client"
import { DropDownProps, Options } from '@/types/dropDownTypes'
import  {  useEffect, useRef, useState } from 'react'
import ArrowIcon from '../icons/ArrowIcon'

export default function DropDown({ className, options, onSelect, placeholder, iconClassName, iconColor, dropDownClassName }: DropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<Options | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleSelect = (option: Options) => {
    setSelected(option)
    onSelect(option)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleRef = (e: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleRef)

    return () => {
      document.removeEventListener('mousedown', handleRef)
    }
  }, [])

  return (
    <div ref={menuRef} className={` ${className}`}>
      <button type="button"
        className='flex items-center gap-1 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='capitalize font-normal whitespace-nowrap leading-5 tracking-normal flex items-center'>{selected ? selected.title : placeholder}</span>
        <ArrowIcon className={`transition-transform  ${isOpen ? "rotate-180" : ""} ${iconClassName}`} color={iconColor} />
      </button>

      {
        isOpen && (
          <ul className={`absolute z-50 left-0 w-full p-5 bg-background border border-border-light rounded-md  ${dropDownClassName}`}>
            {
              options.map(option => (
                <li
                  onClick={() => handleSelect(option)}
                  key={option.category} className='p-2 hover:bg-bg-secondary text-black capitalize rounded-md cursor-pointer'>
                  {
                    option.title
                  }
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

// -top-32

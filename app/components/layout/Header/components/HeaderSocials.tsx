"use client"
import { FacebookIcon, InstagramIcon, TelegramIcon } from '@/app/components/ui/icons'

export default function HeaderSocials() {
  return (
    <div className='md:flex items-center flex-1 justify-end  gap-4 hidden'>
      <InstagramIcon className={'cursor-pointer fill-icon-muted hover:fill-foreground/70 duration-200'} color={""} />
      <FacebookIcon className={'cursor-pointer fill-icon-muted hover:fill-foreground/70 duration-200'} color={''} />
      <TelegramIcon className={'cursor-pointer fill-icon-muted hover:fill-foreground/70 duration-200'} color={''} />
    </div>
  )
}

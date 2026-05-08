import FooterLinks from './FooterLinks'
import NewsletterBox from './NewsletterBox'

export default function MainFooter() {
  return (
    <div className='bg-[#D1E2EB] flex items-center justify-center '>
      <NewsletterBox/>
      <FooterLinks/>
    </div>
  )
}

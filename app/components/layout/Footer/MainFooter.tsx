import FooterLinks from './FooterLinks'
import NewsletterBox from './NewsletterBox'

export default function MainFooter() {
  return (
    <div className='bg-bg-footer-light flex items-center justify-center '>
      <NewsletterBox/>
      <FooterLinks/>
    </div>
  )
}

import HeroNav from './HeroNav'
import HeroBanner from './HeroBanner'

export default function Hero() {
  return (
    <section className='flex items-center justify-center flex-col'>
      <div className="container ">
        <HeroNav />
      </div>
      <HeroBanner />
    </section>
  )
}

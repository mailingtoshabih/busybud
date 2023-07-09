import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Colour } from '../components/Colour'
import { Snake } from '../components/Snake'
import { Testimonials } from '../components/Testimonials'
import { Partners } from '../components/PArtners'
import { Footer } from '../components/Footer'








export const Landing = () => {
  return (

    <div className='px-3 sm:px-10' >
        
        <Navbar/>

        <Hero/>

        <About/>

        <Colour/>
        
        <Snake/>

        <Testimonials/>

        <Partners/>
        
        

    </div>

  )
}

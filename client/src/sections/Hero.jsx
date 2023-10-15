import Carousel from "../components/Carousel"
import { heroImg1, heroImg2,heroImg3,heroImg4, heroImg5, heroImg6, heroImg7 } from "../components"

const Hero = () => {

  let slides = [
    {
      id:1,
      src:heroImg1,
      alt:"Hero Image 1"
    },
    {
      id:2,
      src:heroImg2,
      alt:"Hero Image 2"
    },
    {
      id:3,
      src:heroImg3,
      alt:"Hero Image 3"
    },
    {
      id:4,
      src:heroImg4,
      alt:"Hero Image 4"
    },
    {
      id:5,
      src:heroImg5,
      alt:"Hero Image 5"
    },
    {
      id:6,
      src:heroImg6,
      alt:"Hero Image 6"
    },
    {
      id:7,
      src:heroImg7,
      alt:"Hero Image 7"
    }
  ]

  return (
   <section>
    <div>
      <Carousel slides={slides}/>
    </div>
   </section>
  )
}

export default Hero
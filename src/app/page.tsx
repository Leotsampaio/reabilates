
import HeroSection from "./home/heroSection"
import Sobre from "./home/sobre"
import Serviços from "./home/serviços"
import Local from "./home/localização"
import Contato from "./home/contato"

export default function HomePage() {  

  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <HeroSection/>

      {/* About Simone Section */}
      <Sobre/>

      {/* Services Section */}
      <Serviços/>

      {/* Location Section */}
      <Local/>

      {/* Contact Section */}
      <Contato/>


    </div>
  )
}

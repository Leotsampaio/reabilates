"use client"
import Image from "next/image"
import { Star} from "lucide-react"


//todo: foto do local para colocar
export default function HeroSection(){

    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
    return(
        <section id="herosection" className="pt-20 pb-16 px-4 bg-pink-100">
                <div className="container mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                        <span className="text-pink-500">Reabilates</span>
                        <br />
                        <span className="text-gray-800">Fisioterapia em Brasília</span>
                      </h1>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        Cuidado especializado em fisioterapia pélvica, ginástica holística, RPG e Pilates. Mais de 20 anos de
                        experiência dedicados ao seu bem-estar.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => scrollToSection("contato")}
                          className="bg-pink-600 hover:bg-pink-500 text-white hover:scale-105 hover:transition-all text-lg px-8 py-3 border rounded-xl"
                        >
                          Marcar Consulta
                        </button>
                        <button
                          onClick={() => scrollToSection("serviços")}
                          className="border-pink-300 border-2 hover:scale-105 hover:transition-all rounded-xl text-pink-600 hover:bg-pink-100 text-lg px-8 py-3"
                        >
                          Nossos Serviços
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-custom-pink-500 rounded-3xl"></div>
                      <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                        <Image
                          src="/foto.jpeg"
                          alt="Clínica Reabilates"
                          width={400}
                          height={400}
                          className="w-full h-96 object-cover rounded-2xl"
                        />
                        <div className="mt-6 space-y-2">
                          <div className="flex items-center text-custom-pink-600">
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <span className="ml-2 text-gray-600">5.0 (20+ avaliações)</span>
                          </div>
                          <p className="text-gray-600">Aceitamos convênios</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    )
}
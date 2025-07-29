"use client"


import { Phone, MapPin, Clock, Star, Heart, User, Activity, Zap } from "lucide-react"
import Image from "next/image"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { useState } from "react"

export default function HomePage() {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: "Fisioterapia Pélvica",
      description: "Tratamento especializado para disfunções do assoalho pélvico",
      icon: Heart,
    },
    {
      title: "Ginástica Holística",
      description: "Abordagem integrativa para o bem-estar corporal",
      icon: User,
    },
    {
      title: "RPG",
      description: "Reeducação Postural Global para correção postural",
      icon: Activity,
    },
    {
      title: "Pilates",
      description: "Fortalecimento e flexibilidade através do método Pilates",
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen bg-custom-pink-50">
      

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-pink-50">
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
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-8 py-3"
                >
                  Marcar Consulta
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="border-pink-300 text-pink-600 hover:bg-custom-pink-50 text-lg px-8 py-3"
                >
                  Nossos Serviços
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-custom-pink-500 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Clínica Reabilates"
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-custom-pink-600">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-2 text-gray-600">5.0 (120+ avaliações)</span>
                  </div>
                  <p className="text-gray-600">Aceitamos convênios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Simone Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-custom-pink-400 rounded-3xl"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Dra. Simone Sampaio"
                  width={400}
                  height={500}
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Conheça a<span className="text-custom-pink-600"> Dra. Simone Sampaio</span>
                </h2>
                <div className="w-20 h-1 bg-custom-pink-600 rounded"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com mais de 20 anos de experiência em fisioterapia, a Dra. Simone Sampaio é especialista em fisioterapia
                pélvica e métodos holísticos de tratamento. Sua abordagem integra técnicas modernas com cuidado
                humanizado.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Especialista em Fisioterapia Pélvica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-pink-700 rounded-full"></div>
                  <span className="text-gray-700">Certificada em RPG e Pilates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Mais de 20 anos de experiência</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-custom-pink-700 rounded-full"></div>
                  <span className="text-gray-700">Abordagem holística e humanizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-custom-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nossos
              <span className="text-custom-pink-600"> Serviços</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos tratamentos especializados com foco no seu bem-estar e qualidade de vida
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border border-custom-pink-200 bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <IconComponent className="w-12 h-12 text-custom-pink-500 stroke-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nossa
              <span className="text-custom-pink-600"> Localização</span>
            </h2>
            <p className="text-lg text-gray-600">Venha nos visitar em nossa clínica moderna e acolhedora</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-custom-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Brasília, DF
                    <br />
                    Fácil acesso e estacionamento disponível
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-custom-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Horário de Funcionamento</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-custom-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Contato</h3>
                  <p className="text-gray-600">
                    is.gd/fisiobrasilia e mais 1<br />
                    Aceitamos convênios
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Recepção da clínica"
                width={250}
                height={250}
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Sala de tratamento"
                width={250}
                height={250}
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Estúdio de Pilates"
                width={250}
                height={250}
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/placeholder.svg?height=250&width=250"
                alt="Área de espera"
                width={250}
                height={250}
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-custom-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Pronta para cuidar da sua saúde?</h2>
            <p className="text-xl text-custom-pink-100 mb-8">
              Agende sua consulta e dê o primeiro passo para uma vida mais saudável e equilibrada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-custom-pink-600 hover:bg-custom-pink-50 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-custom-pink-600 text-lg px-8 py-3 bg-transparent"
              >
                WhatsApp
              </Button>
            </div>
            <p className="text-custom-pink-100 mt-6">
              Aceitamos convênios • Atendimento personalizado • Mais de 20 anos de experiência
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-custom-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-xl font-bold">Reabilates</span>
          </div>
          <p className="text-gray-400 mb-4">Fisioterapia especializada em Brasília • Dra. Simone Sampaio</p>
          <p className="text-gray-500 text-sm">© 2024 Reabilates. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

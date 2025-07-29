import { Card, CardContent } from "~/components/ui/card"
import {Heart, User, Activity, Zap } from "lucide-react"

export default function Serviços(){

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


    return(
        <section id="serviços" className="py-20 bg-pink-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nossos
              <span className="text-pink-500"> Serviços</span>
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
                  className="group hover:shadow-xl transition-all duration-300 border border-pink-200 bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <IconComponent className="w-12 h-12 text-pink-500 stroke-1" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    )
}
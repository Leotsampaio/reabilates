import Image from "next/image"
import {MapPin, Clock, Phone} from "lucide-react"

export default function Local(){
    return(
        <section id="localização" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Nossa
              <span className="text-pink-500"> Localização</span>
            </h2>
            <p className="text-lg text-gray-600">Venha nos visitar em nossa clínica moderna e acolhedora</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    SEPS 714/914, Bloco E, sala 309 - <span className="text-pink-500">Edifício Talento</span>
                    <br />
                    Asa Sul, Brasília - DF, 70390-145
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Horário de Funcionamento</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Contato</h3>
                  <p className="text-gray-600">
                    (61) 98231-3720<br />
                    Email: reabilatespelvicapostural@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/foto1.jpeg"
                alt="Recepção da clínica"
                width={250}
                height={350}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/foto2.jpeg"
                alt="Sala de tratamento"
                width={250}
                height={350}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/foto3.jpeg"
                alt="Estúdio de Pilates"
                width={250}
                height={350}
                className="w-full h-64  object-cover rounded-2xl shadow-lg"
              />
              <Image
                src="/foto4.jpeg"
                alt="Área de espera"
                width={250}
                height={350}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    )
}
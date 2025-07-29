import Image from "next/image"

export default function Sobre(){
    return(
        <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-custom-pink-400 rounded-3xl"></div>
              <div className="relative">
                <Image
                  src="/image.png"
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
                  Conheça a<span className="text-pink-500"> Dra. Simone Sampaio</span>
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
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Especialista em Fisioterapia Pélvica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-700 rounded-full"></div>
                  <span className="text-gray-700">Certificada em RPG e Pilates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Mais de 20 anos de experiência</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-700 rounded-full"></div>
                  <span className="text-gray-700">Abordagem holística e humanizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
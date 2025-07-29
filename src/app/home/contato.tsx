import Link from "next/link"

export default function Contato(){
    return(
        <section id="contato" className="py-20 bg-pink-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Pronto para cuidar da sua saúde?</h2>
            <p className="text-xl text-pink-100 mb-8">
              Agende sua consulta e dê o primeiro passo para uma vida mais saudável e equilibrada!
            </p>
            <div className="justify-center py-5">
              <Link
                href={"https://wa.me/5561982313720"}
                className="border-white border rounded-lg text-lg text-white hover:bg-white hover:text-pink-600 px-10 py-4 bg-transparent"
              >
                WhatsApp
              </Link>
            </div>
            <p className="text-pink-100 mt-6">
              Aceitamos convênios • Atendimento personalizado • Mais de 20 anos de experiência
            </p>
          </div>
        </div>
      </section>
    )
}
import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-custom-pink-500 rounded-full flex items-center justify-center">
              <Image
              src={"/logo-branca.png"}
              height={40}
              width={40}
              alt="logo"
              />
            
            </div>
            <span className="text-xl font-bold">Reabilates</span>
          </div>
          <p className="text-gray-400 mb-4">Fisioterapia especializada em Brasília • Dra. Simone Sampaio</p>
          <Link className="justify-center flex gap-2 pb-4 ml-2 hover:scale-105 hover:transition-all" href={"https://www.instagram.com/reabilates/"}>
            <Instagram/>
            <h2>Instagram</h2>
          </Link>
          <p className="text-gray-500 text-sm">© 2024 Reabilates. Todos os direitos reservados.</p>
        </div>
      </footer>
    )
}
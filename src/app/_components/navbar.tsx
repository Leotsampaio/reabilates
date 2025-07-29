"use client"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "~/components/ui/button"


///////////////////////////////////////////
//TO-DO:
// pedir foto com resolução melhor
//////////////////////////////////////////
export default function Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }
    return(
        <>
        {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
            className="flex items-center space-x-2 bg-transparent hover:bg-transparent hover:transition-all hover:scale-105"
            onClick={() => scrollToSection("herosection")}>
              <Image
              className="font-semibold"
              src={"/logo.png"}
              alt="logo"
              width={70}
              height={70}
              />
             
              <span className="text-xl font-bold text-pink-500">Reabilates</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Button
                onClick={() => scrollToSection("sobre")}
                className="text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white transition-colors"
              >
                Sobre
              </Button>
              <Button
                onClick={() => scrollToSection("serviços")}
                className="text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white transition-colors"
              >
                Serviços
              </Button>
              <Button
                onClick={() => scrollToSection("localização")}
                className="text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white transition-colors"
              >
                Localização
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="hover:bg-pink-700 bg-pink-600 text-white"
              >
                Marcar Consulta
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-6 mt-8">
                  <Button
                    onClick={() => scrollToSection("sobre")}
                    className="text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    Sobre
                  </Button>
                  <Button
                    onClick={() => scrollToSection("serviços")}
                    className="text-gray-700 hover:text-custom-pink-600 transition-colors"
                  >
                    Serviços
                  </Button>
                  <Button
                    onClick={() => scrollToSection("localização")}
                    className="text-gray-700 hover:text-custom-pink-600 transition-colors"
                  >
                    Localização
                  </Button>
                  <Button
                    onClick={() => scrollToSection("contato")}
                    className="hover:bg-pink-700 bg-pink-600 text-white"
                  >
                    Marcar Consulta
                  </Button>
                    </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      </>
    )
}
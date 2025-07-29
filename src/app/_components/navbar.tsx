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
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-custom-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <Image
              className="font-semibold"
              src={"/logo.png"}
              alt="logo"
              width={60}
              height={60}
              />
             
              <span className="text-xl font-bold text-pink-400">Reabilates</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-custom-pink-600 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-custom-pink-600 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-700 hover:text-custom-pink-600 transition-colors"
              >
                Localização
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
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
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-lg text-gray-700 hover:text-custom-pink-600 transition-colors"
                  >
                    Sobre Simone
                  </button>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-left text-lg text-gray-700 hover:text-custom-pink-600 transition-colors"
                  >
                    Serviços
                  </button>
                  <button
                    onClick={() => scrollToSection("location")}
                    className="text-left text-lg text-gray-700 hover:text-custom-pink-600 transition-colors"
                  >
                    Localização
                  </button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bgpink-600 hover:bg-pink-700 text-white w-full"
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
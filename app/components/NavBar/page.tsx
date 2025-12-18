'use client'
import { Link, Menu } from "lucide-react";
import { useState } from "react";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', path: '#' },
    { name: 'O Professor', path: '#sobre' },
    { name: 'Cursos', path: '#cursos' },
    { name: 'Depoimentos', path: '#depoimentos' },
    { name: 'Contato', path: '#contato' },
  ];

  const isActive = false

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100  shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-black font-black text-xl shadow-md shadow-primary/20">
              FE
            </div>
            <div className="flex flex-col">
              <h2 className="text-neutral-900  text-base font-bold leading-tight">Fernando Entratice</h2>
              <span className="text-[10px] font-medium text-primary uppercase tracking-widest">Português • CACD</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-neutral-600  hover:text-primary'
                    // className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-primary' : 'text-neutral-600 dark:text-neutral-300 hover:text-primary'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="h-6 w-px bg-neutral-200"></div>
            <button className="flex items-center gap-2 bg-primary text-white font-bold text-sm hover:bg-primary/60 px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-primary/20">
              <span>Área do Aluno</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-neutral-900  p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
            {/* <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span> */}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100  px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-sm font-medium ${isActive ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full text-center py-3 bg-primary text-black font-bold rounded-lg mt-2">
              Login
            </button>
          </div>
        )}
      </header>

    </div>
  )
}

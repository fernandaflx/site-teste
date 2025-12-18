/* eslint-disable @next/next/no-img-element */

import { GraduationCap, CalendarCheck, Users, CheckCircle2, Ruler, BookOpen, Sword, BadgeCheck, ChessKnight } from "lucide-react";

export default function About() {
  return (

    <section className="animate-fade-in py-12 px-6 lg:px-40" id='sobre'>
      <div className="max-w-300 mx-auto flex flex-col gap-16">
        {/* Professor Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 aspect-4/3 rounded-2xl overflow-hidden shadow-2xl relative group">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Professor Fernando Entratice"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-bold uppercase tracking-wide">
                Especialista em CACD
              </span>
            </div>
            <h1 className="text-neutral-900 text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Sobre o Professor <br />
              Fernando Entratice
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Com mais de uma década dedicada à preparação de diplomatas, Fernando une técnica rigorosa e repertório cultural profundo. Sua missão é desmistificar a prova de Língua Portuguesa do CACD através de uma metodologia clara baseada em <strong>Forma, Conteúdo e Estratégia</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cursos"
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-black font-bold shadow-lg transition-all"
              >
                Ver Cursos Disponíveis
              </a>
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold transition-all">
                Ler Biografia Completa
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: CalendarCheck, value: "12+", label: "Anos de Experiência" },
            { icon: Users, value: "1000+", label: "Alunos Aprovados" },
            { icon: BadgeCheck, value: "95%", label: "Satisfação" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-8 rounded-2xl border border-neutral-100 bg-neutral-50 shadow-sm"
              >
                <Icon className="text-primary w-10 h-10 mb-4" />
                <span className="text-3xl font-black text-neutral-900">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Methodology */}
        <div className="flex flex-col gap-10 py-10">
          <div className="text-center md:text-left flex flex-col gap-4">
            <h2 className="text-neutral-900 text-3xl font-bold tracking-tight lg:text-4xl">
              Metodologia de Ensino
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl">
              A preparação para a prova discursiva exige mais que gramática. Três pilares fundamentais guiam nossa jornada rumo à aprovação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Ruler,
                title: "Forma",
                desc: "Domínio absoluto da norma culta, coesão textual e estrutura rígida.",
              },
              {
                icon: BookOpen,
                title: "Conteúdo",
                desc: "Desenvolvimento de repertório denso e argumentação consistente.",
              },
              {
                icon: ChessKnight,
                title: "Estratégia",
                desc: "Gestão inteligente de tempo e análise de tendências da banca.",
              },
            ].map((pilar, i) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={i}
                  className="group p-8 rounded-2xl border border-neutral-200 hover:border-primary transition-all flex flex-col gap-4"
                >
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {pilar.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {pilar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-primary hover:bg-primary-hover text-black px-10 py-4 rounded-lg font-bold shadow-lg">
              Saiba mais sobre o método
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */

import { BookOpen, CheckCircle2, GraduationCap, Target } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Correção Individualizada",
      desc: "Receba análises detalhadas, linha a linha, de cada redação produzida.",
    },
    {
      icon: Target,
      title: "Foco no CACD",
      desc: "Aulas desenhadas especificamente para o formato da prova do CACD.",
    },
    {
      icon: BookOpen,
      title: "Material Atualizado",
      desc: "Conteúdo alinhado com as últimas tendências e temas contemporâneos.",
    },
  ];

  return (
    <section className="animate-fade-in" id='#'>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative flex min-h-150 flex-col justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-20 lg:px-20"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop")` }}>
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-6 max-w-160">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary border border-primary/30 backdrop-blur-sm">
                <GraduationCap />
                Especialista em CACD
              </div>
              <h1 className="text-white text-5xl font-black leading-[1.1] tracking-[-0.033em] lg:text-6xl">
                Redação em <br /><span className="text-primary">Língua Portuguesa</span>
              </h1>
              <h2 className="text-neutral-300 text-lg font-light leading-relaxed max-w-135">
                Preparação de excelência para o Concurso de Admissão à Carreira de Diplomata. Aprimore sua escrita e argumentação com foco estratégico e feedbacks detalhados.
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="/cursos" className="flex min-w-40 items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-hover text-black text-base font-bold transition-all shadow-lg">
                  Conheça os Cursos
                </Link>
                <Link href="/sobre" className="flex min-w-40 items-center justify-center rounded-lg h-12 px-6 bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md text-white text-base font-bold transition-all">
                  Sobre a Metodologia
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-neutral-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="size-8 rounded-full border-2 border-black" alt="Aluno" />
                  ))}
                  <div className="flex items-center justify-center size-8 rounded-full bg-neutral-800 border-2 border-black text-[10px] text-white font-bold">+2k</div>
                </div>
                <p>Alunos aprovados na carreira diplomática</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-6 ">
        <div className="max-w-275 mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className=" text-3xl font-bold tracking-tight lg:text-4xl">
              Por que estudar comigo?
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-neutral-600 text-lg max-w-175">
              Metodologia focada na banca examinadora e correção personalizada para garantir sua aprovação no CACD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-start gap-4 rounded-xl border border-neutral-200 bg-background-light p-8 transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="rounded-full bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <Icon className="w-8 h-8" /> {/* 32px */}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-neutral-900 text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900 text-white border-y border-neutral-800">
        <div className="max-w-275 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-black tracking-tight text-primary">12+</span>
            <span className="text-sm font-medium opacity-80 text-neutral-300">Anos de Experiência</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-black tracking-tight text-primary">5k+</span>
            <span className="text-sm font-medium opacity-80 text-neutral-300">Redações Corrigidas</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-black tracking-tight text-primary">850+</span>
            <span className="text-sm font-medium opacity-80 text-neutral-300">Alunos Aprovados</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl font-black tracking-tight text-primary">100%</span>
            <span className="text-sm font-medium opacity-80 text-neutral-300">Foco no Edital</span>
          </div>
        </div>
      </section>
    </section>
  )
}

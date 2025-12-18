/* eslint-disable @next/next/no-img-element */
import {
  Verified,
  Star,
  CheckCircle2,
  Target,
} from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ana Silva",
      year: "Aprovada 2023",
      content:
        "Ter encontrado o Fernando foi fundamental para a minha preparação. A clareza nas explicações e o feedback detalhado nas discursivas transformaram minha escrita.",
      image: "https://picsum.photos/seed/diplomat1/100/100",
    },
    {
      name: "Carlos Mendes",
      year: "Aprovado 2022",
      content:
        "A didática é impecável e o foco na banca faz toda a diferença. O curso me deu a segurança que eu precisava para enfrentar a prova de Português sem medo.",
      image: "https://picsum.photos/seed/diplomat2/100/100",
    },
    {
      name: "Mariana Costa",
      year: "Aprovada 2024",
      content:
        "O curso de discursivas elevou meu nível de escrita. As correções pontuais e o material de apoio foram decisivos para minha nota final.",
      image: "https://picsum.photos/seed/diplomat3/100/100",
    },
  ];

  return (
    <section className="animate-fade-in bg-white py-20 px-6" id='depoimentos'>
      <div className="max-w-300 mx-auto flex flex-col gap-16">
        <div className="text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest border border-gold/20">
            <Verified className="w-4 h-4" />
            Aprovados CACD
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900">
            O que dizem os <span className="text-gold">Diplomatas</span>
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl">
            Histórias reais de quem transformou o sonho da carreira diplomática
            em realidade com a nossa metodologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-sm transition-all hover:border-gold hover:shadow-xl hover:-translate-y-2"
            >
              <span className="absolute top-6 right-6 text-6xl text-gold/20 font-serif">
                &quot;
              </span>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={r.image}
                  className="size-14 rounded-full border-2 border-gold object-cover"
                  alt={r.name}
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-neutral-900 text-lg">
                    {r.name}
                  </h3>
                  <span className="text-[10px] font-black uppercase text-gold bg-gold/5 px-2 py-0.5 rounded w-fit mt-1">
                    {r.year}
                  </span>
                </div>
              </div>
              <p className="text-neutral-600 italic leading-relaxed mb-6">
                &quot;{r.content}&quot;
              </p>
              <div className="flex gap-1 text-gold">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

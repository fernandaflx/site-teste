
import {
  BookText,
  Film,
  FileText,
  GraduationCap,
  Users,
  FileSearch,
} from "lucide-react";

export default function Courses() {
  const courses = [
    {
      title: "CURSO EXTENSIVO PARTICULAR - FUNDAMENTAL",
      category: "Iniciantes",
      desc: "Ideal para quem está começando a preparação para o CACD. Foco na construção de base gramatical sólida.",
      premium: false,
      features: [
        { icon: BookText, title: "Aulas Teóricas", desc: "Gramática normativa simplificada." },
        { icon: Film, title: "Correções Semanais", desc: "Feedback em vídeo e texto." },
        { icon: FileText, title: "Material Exclusivo", desc: "PDFs e exercícios comentados." },
      ],
    },
    {
      title: "CURSO EXTENSIVO PARTICULAR - AVANÇADO",
      category: "Avançado",
      desc: "Para candidatos que já possuem base sólida e buscam excelência. Foco em refinamento estilístico.",
      premium: true,
      features: [
        { icon: GraduationCap, title: "Simulados Nível Hard", desc: "Provas no formato exato da banca." },
        { icon: Users, title: "Mentoria Individual", desc: "Acompanhamento estratégico." },
        { icon: FileSearch, title: "Banco de Questões", desc: "Acervo histórico comentado." },
      ],
    },
  ];

  return (
    <section className="animate-fade-in bg-neutral-50 py-16 px-6" id='cursos'>
      <div className="max-w-250 mx-auto flex flex-col gap-12">
        <div className="text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Preparação CACD
          </span>
          <h1 className="text-4xl lg:text-5xl font-black mt-2 text-neutral-900">
            Cursos Oferecidos
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1  gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col gap-8 p-8 md:p-12 rounded-3xl border shadow-sm transition-all hover:shadow-xl ${course.premium
                ? "bg-linear-to-b from-white to-gold-light border-gold/30"
                : "bg-white border-neutral-100"
                }`}
            >
              {course.premium && (
                <div className="absolute top-0 right-10 bg-gold text-black px-6 py-1 rounded-b-xl text-[10px] font-black tracking-widest uppercase shadow-sm">
                  PREMIUM
                </div>
              )}

              <div className="flex flex-col gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider w-fit ${course.premium
                    ? "bg-gold/10 text-gold border border-gold/20"
                    : "bg-neutral-100 text-neutral-600"
                    }`}
                >
                  {course.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-neutral-900">
                  {course.title}
                </h2>
                <p className="text-neutral-600 max-w-2xl leading-relaxed">
                  {course.desc}
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <button
                    className={`h-11 px-8 rounded-lg font-bold transition-all ${course.premium
                      ? "bg-gold text-black hover:bg-gold/90"
                      : "bg-black text-white hover:bg-neutral-800"
                      }`}
                  >
                    Quero me matricular
                  </button>
                  <button className="h-11 px-8 rounded-lg font-bold border border-neutral-200 hover:bg-neutral-100 transition-all text-neutral-900">
                    {course.premium ? "Ver Cronograma" : "Baixar Ementa"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {course.features.map((feature, fidx) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={fidx}
                      className="p-6 rounded-2xl bg-white/50 border border-black/5 flex flex-col gap-2 hover:bg-white transition-colors"
                    >
                      <Icon
                        className={`w-8 h-8 ${course.premium ? "text-gold" : "text-primary"
                          }`}
                      />
                      <h4 className="font-bold text-neutral-900">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-2xl font-bold">
              Dúvidas sobre qual curso escolher?
            </h3>
            <p className="text-neutral-400">
              Fale diretamente com nossa equipe pedagógica para uma avaliação.
            </p>
          </div>
          <button className="bg-gold text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

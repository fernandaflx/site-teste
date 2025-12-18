/* eslint-disable @next/next/no-img-element */
import {
  Mail,
  Phone,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="animate-fade-in bg-neutral-50 py-16 px-6 lg:px-40" id='contato'>
      <div className="max-w-300 mx-auto flex flex-col lg:flex-row gap-16">
        {/* Info Column */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
              Contato
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-neutral-900">
              Vamos conversar sobre sua preparação?
            </h1>
            <p className="text-neutral-600">
              Estou à disposição para tirar dúvidas sobre o curso, mentorias e
              correção de redações.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-neutral-100 transition-all hover:scale-[1.02]">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-neutral-400">
                  Email
                </span>
                <span className="font-bold text-neutral-900">
                  contato@fernandoentratice.com.br
                </span>
              </div>
            </div>

            <div className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-neutral-100 transition-all hover:scale-[1.02]">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-neutral-400">
                  WhatsApp
                </span>
                <span className="font-bold text-neutral-900">
                  (11) 99999-9999
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-4xl border border-neutral-100 shadow-2xl">
          <h3 className="text-2xl font-black mb-8 text-neutral-900">
            Envie sua mensagem
          </h3>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  Nome completo
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary transition-all outline-none text-neutral-900"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary transition-all outline-none text-neutral-900"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary transition-all outline-none text-neutral-900"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Assunto
              </label>
              <select className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary transition-all outline-none text-neutral-900">
                <option>Selecione um assunto</option>
                <option>Curso Extensivo Fundamental</option>
                <option>Curso Extensivo Avançado</option>
                <option>Mentoria Individual</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                Mensagem
              </label>
              <textarea
                placeholder="Escreva sua mensagem aqui..."
                rows={4}
                className="bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:ring-primary focus:border-primary transition-all outline-none text-neutral-900 resize-none"
              />
            </div>

            <button className="bg-primary hover:bg-primary-hover text-black py-4 rounded-xl font-black text-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
              Enviar Mensagem
              <Send className="w-4.5 h-4.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

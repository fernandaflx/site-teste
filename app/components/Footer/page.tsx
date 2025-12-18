
import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-neutral-500 text-sm">
            © 2025 Fernando Entratice. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-4">
              <Instagram className="text-neutral-400 hover:text-primary transition-colors cursor-pointer w-5 h-5" />
              <Youtube className="text-neutral-400 hover:text-primary transition-colors cursor-pointer w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

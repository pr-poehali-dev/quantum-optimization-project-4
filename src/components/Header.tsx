interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold tracking-widest uppercase">SEMok</div>
        <nav className="flex gap-8">
          <a
            href="#features"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Возможности
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Тарифы
          </a>
          <a
            href="#download"
            className="text-white bg-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm px-4 py-1.5 border border-white/50"
          >
            Скачать
          </a>
        </nav>
      </div>
    </header>
  );
}
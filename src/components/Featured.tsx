import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Надёжная защита",
    desc: "Военное шифрование AES-256. Ваши данные под защитой 24/7.",
  },
  {
    icon: "Zap",
    title: "Высокая скорость",
    desc: "Серверы по всему миру — стриминг и игры без задержек.",
  },
  {
    icon: "Globe",
    title: "Без ограничений",
    desc: "Разблокируйте любые сайты и сервисы из любой точки планеты.",
  },
];

export default function Featured() {
  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/63bb09cf-37cf-4141-8138-62a990ebcd9a/files/24b91cea-3f8d-4854-bbc3-a4ac1526cbd8.jpg"
          alt="SEMok VPN — свобода без границ"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="pricing" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему SEMok</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Простой VPN для каждого — запустите за 30 секунд и забудьте об ограничениях.
        </p>

        <div className="flex flex-col gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-black flex items-center justify-center">
                <Icon name={f.icon} size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">{f.title}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="border border-neutral-200 p-5 flex-1">
            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Неделя</p>
            <p className="text-3xl font-bold text-neutral-900">20 ₽</p>
          </div>
          <div className="border border-black bg-black p-5 flex-1">
            <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Навсегда</p>
            <p className="text-3xl font-bold text-white">560 ₽</p>
          </div>
        </div>
      </div>
    </div>
  );
}
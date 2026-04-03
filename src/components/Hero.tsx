import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[5]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 opacity-70">VPN-сервис нового поколения</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          SEMOK
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
          Свобода в интернете без ограничений.<br/>3 недели бесплатно после скачивания.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#download"
            className="bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
          >
            Скачать бесплатно
          </a>
          <a
            href="#pricing"
            className="border border-white text-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-white/10 transition-colors duration-300"
          >
            Тарифы
          </a>
        </div>
      </div>
    </div>
  );
}
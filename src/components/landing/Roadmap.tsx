import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import modules from '@/modules';
import { Badge, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: lineRef.current.closest('section'),
        start: 'top center+=100px',
        end: 'bottom center',
        scrub: 1.2,
        markers: false,
      },
    });
  }, []);

  return (
    <section id="trilha" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Sua trilha de aprendizado</h2>
          <p className="mt-2 text-slate-400">Aprenda passo a passo, do básico ao avançado</p>
        </div>

        <div className="relative">
          <svg
            className="absolute left-0 top-0 h-full w-full"
            style={{ viewBox: '0 0 1 5', preserveAspectRatio: 'none' }}
            aria-hidden="true"
          >
            <line
              ref={lineRef}
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="1"
              stroke="url(#gradient)"
              strokeWidth="0.002"
              strokeDasharray="1"
              strokeDashoffset="1"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative space-y-12">
            {modules.map((module, idx) => (
              <motion.div
                key={module.id}
                className="ml-12 sm:ml-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="absolute -left-[52px] top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-900 sm:-left-[76px]">
                  {module.status === 'available' ? (
                    <CheckCircle2 className="h-6 w-6 text-cyan-400" />
                  ) : (
                    <Clock className="h-5 w-5 text-slate-400" />
                  )}
                </div>

                <div
                  className={`rounded-2xl border p-6 transition ${
                    module.status === 'available'
                      ? 'border-white/15 bg-white/5'
                      : 'border-white/5 bg-white/[0.02] opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{module.nome}</h3>
                      <p className="mt-2 text-slate-300">{module.descricao}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {module.trilha[0]?.aulas.slice(0, 3).map((aula) => (
                          <span
                            key={aula.id}
                            className="rounded-full bg-slate-800/60 px-2 py-1 text-xs text-slate-300"
                          >
                            {aula.titulo}
                          </span>
                        ))}
                        {module.trilha[0]?.aulas.length > 3 && (
                          <span className="rounded-full bg-slate-800/60 px-2 py-1 text-xs text-slate-300">
                            +{module.trilha[0].aulas.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      {module.status === 'coming-soon' && (
                        <Badge className="bg-slate-700 text-slate-200">Em breve</Badge>
                      )}
                    </div>
                  </div>

                  {module.status === 'available' && (
                    <Link
                      to={`/${module.id}`}
                      className="mt-4 inline-block rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/30"
                    >
                      Começar trilha →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

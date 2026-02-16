import hero from '../assets/pic8.jpg'
import { coreInitiatives } from '../data'
import useReveal from '../hooks/useReveal'

function AboutPage() {
  useReveal()

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#2A1B12] p-8 text-[#F8EEDC] md:p-10">
          <img src={hero} alt="About" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(42,27,18,0.9),rgba(89,58,36,0.6))]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E8B879]">About VelMont</p>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">Purpose, Tradition, and Belonging</h1>
            <p className="mt-5 max-w-3xl text-lg text-[#F1DFCA]">
              VelMont is a non-profit spiritual center in California focused on spiritual, cultural, educational, and meditative enrichment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            'We build a welcoming sanctuary where people from all backgrounds can reconnect with nature and spirit.',
            'Our programs blend local practices and global values through prayer, meditation, yoga, and community service.',
            'We are committed to practical spirituality, cultural inclusion, and compassionate collective growth.',
            'VelMont is designed as a living space for reflection, healing, and service to future generations.'
          ].map((line, idx) => (
            <article key={line} data-reveal="true" className="rounded-[1.4rem] bg-[#FBF5EB] p-6 opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${idx * 80}ms` }}>
              <p className="text-lg leading-relaxed text-[#3A281A]">{line}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-24">
        <h2 className="text-4xl font-black text-[#2D1D12] md:text-5xl">Core Initiatives</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreInitiatives.map((item, idx) => (
            <article key={item.title} data-reveal="true" className="rounded-2xl border border-[#4A3523]/15 bg-white p-5 opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${idx * 90}ms` }}>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8D5D33]">Initiative {idx + 1}</p>
              <h3 className="mt-2 text-2xl font-bold text-[#2D1D12]">{item.title}</h3>
              <p className="mt-3 text-[#5C4634]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
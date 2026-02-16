import pic2 from '../assets/pic2.jpg'
import { useContent } from '../context/ContentContext'
import useReveal from '../hooks/useReveal'

function ServicesPage() {
  useReveal()
  const { content } = useContent()
  const { services } = content

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <img src={pic2} alt="Services" className="h-[460px] w-full rounded-[2rem] object-cover" />
        <div className="rounded-[2rem] bg-[#2D1D12] p-8 text-[#F7ECDB] md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E8B879]">Temple Services</p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Book Ritual Services</h1>
          <p className="mt-5 text-lg text-[#F1DFCA]">From pooja sponsorship to family ceremonies, VelMont offers traditional services in a spiritual community setting.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-4">
          {services.map(({ title, fee, desc }, idx) => (
            <article key={title} data-reveal="true" className="grid gap-4 rounded-2xl border border-[#4A3523]/15 bg-white p-5 opacity-0 translate-y-8 transition-all duration-700 md:grid-cols-[0.7fr_2fr_0.7fr] md:items-center" style={{ transitionDelay: `${idx * 70}ms` }}>
              <p className="text-xl font-black text-[#2D1D12]">{title}</p>
              <p className="text-[#5C4634]">{desc}</p>
              <div className="flex items-center justify-between gap-3 md:justify-end">
                <p className="text-lg font-bold text-[#8D5D33]">{fee}</p>
                <button className="rounded-lg bg-[#3E2719] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#F6EBDD] transition hover:bg-[#2D1D12]">Book</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

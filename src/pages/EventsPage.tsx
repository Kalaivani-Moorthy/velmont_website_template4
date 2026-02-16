import pic3 from '../assets/caro5.jpg'
import pic4 from '../assets/caro6.jpg'
import { events } from '../data'
import useReveal from '../hooks/useReveal'

function EventsPage() {
  useReveal()

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] bg-[#3E2719] p-8 text-[#F8EEDC] md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#E8B879]">Temple Events</p>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">Gather. Chant. Celebrate.</h1>
            <p className="mt-5 text-lg text-[#F1DFCA]">Join Sunday gatherings, festival satsangs, and wellness circles rooted in sacred tradition.</p>
          </div>
          <img src={pic4} alt="Events" className="h-[280px] w-full rounded-[2rem] object-cover lg:h-full" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {events.map((event, idx) => (
            <article key={event.title} data-reveal="true" className="rounded-2xl border border-[#4A3523]/15 bg-[#FFF9F0] p-6 opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${idx * 80}ms` }}>
              <p className="text-xs uppercase tracking-[0.16em] text-[#8D5D33]">{event.date}</p>
              <h2 className="mt-2 text-3xl font-black text-[#2D1D12]">{event.title}</h2>
              <p className="mt-2 text-sm font-semibold text-[#6B4A30]">{event.time}</p>
              <p className="mt-4 text-[#5C4634]">{event.details}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.7rem]">
          <img src={pic3} alt="Satsang" className="h-[320px] w-full object-cover" />
        </div>
      </section>
    </div>
  )
}

export default EventsPage
import { Link } from 'react-router-dom'
import caro7 from '../assets/caro7.jpg'
import pic3 from '../assets/pic3.jpg'
import { events, missionText, siteInfo, visionText, wixImages } from '../data'
import useReveal from '../hooks/useReveal'

function HomePage() {
  useReveal()

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="relative overflow-hidden rounded-[2rem] bg-[#3E2719] p-8 text-[#F8EEDC] md:p-10">
          <img src={wixImages.hero} alt="Velmont" className="absolute inset-0 h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(62,39,25,0.95),rgba(95,64,41,0.75))]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E8B879]">VelMont Spiritual Center</p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">A Sacred Open-Space Center for Community and Renewal</h1>
            <p className="mt-6 max-w-2xl text-lg text-[#F3E4D1]">
              VelMont welcomes all communities to reconnect through meditation, yoga, prayer, and nature-based spiritual practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/events" className="rounded-xl bg-[#E8B879] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2A1B12] transition hover:-translate-y-1">Upcoming Events</Link>
              <Link to="/contact" className="rounded-xl border border-[#E8B879]/70 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F8EEDC] transition hover:-translate-y-1 hover:bg-[#E8B879]/20">Visit Us</Link>
            </div>
          </div>
        </article>

        <article className="grid gap-6">
          <div data-reveal="true" className="overflow-hidden rounded-[1.8rem] bg-[#DAC3A3] p-5 opacity-0 translate-y-8 transition-all duration-700">
            <img src={pic3} alt="Maha Shivaratri" className="h-52 w-full rounded-2xl object-cover" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#593A24]">Featured Event</p>
            <h2 className="mt-1 text-2xl font-black text-[#2D1D12]">Maha Shivaratri Satsang</h2>
            <p className="mt-2 text-sm text-[#4A3523]">February 15, 2025 | 3:00 PM - 5:00 PM</p>
          </div>
          <div data-reveal="true" className="rounded-[1.8rem] bg-[#F4E6D3] p-6 opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8D5D33]">Visiting Hours</p>
            <p className="mt-3 text-2xl font-bold text-[#3E2719]">{siteInfo.visitingHours}</p>
            <p className="mt-2 text-[#5C4634]">Open-space center inside a ranch. Follow signs and check with volunteers for guidance.</p>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {[{ title: 'Vision', text: visionText }, { title: 'Mission', text: missionText }].map((item, idx) => (
            <article key={item.title} data-reveal="true" className="rounded-[1.6rem] border border-[#4A3523]/15 bg-[#FBF5EB] p-7 opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${idx * 120}ms` }}>
              <p className="text-xs uppercase tracking-[0.24em] text-[#8D5D33]">{item.title}</p>
              <p className="mt-3 text-xl leading-relaxed text-[#3A281A]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl px-5 pb-20 md:px-8 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <img src={caro7} alt="Temple" data-reveal="true" className="h-[420px] w-full rounded-[2rem] object-cover opacity-0 -translate-x-10 transition-all duration-700" />
          <div>
            <h2 className="text-4xl font-black text-[#2D1D12] md:text-5xl">Spiritual Calendar</h2>
            <div className="mt-5 space-y-3">
              {events.map((event, index) => (
                <article key={event.title} data-reveal="true" className="rounded-2xl border border-[#4A3523]/15 bg-[#FFF9F0] p-5 opacity-0 translate-x-10 transition-all duration-700" style={{ transitionDelay: `${index * 90}ms` }}>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8D5D33]">{event.date} • {event.time}</p>
                  <p className="mt-1 text-xl font-bold text-[#2D1D12]">{event.title}</p>
                  <p className="mt-2 text-[#5C4634]">{event.details}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
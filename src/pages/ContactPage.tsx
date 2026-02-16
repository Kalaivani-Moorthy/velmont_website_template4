import { useContent } from '../context/ContentContext'
import useReveal from '../hooks/useReveal'

function ContactPage() {
  useReveal()
  const { content } = useContent()
  const { siteInfo } = content

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-24">
        <div className="rounded-[2rem] bg-[#2A1B12] px-8 py-10 text-[#F8EEDC] md:px-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E8B879]">Contact</p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Plan Your Temple Visit</h1>
          <p className="mt-5 max-w-3xl text-lg text-[#F0DFCA]">Reach us for event registration, services, volunteering, and accessibility support.</p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {[['Address', siteInfo.address], ['Phone', siteInfo.phone], ['Email', siteInfo.email], ['Visiting Hours', siteInfo.visitingHours]].map(([label, value], idx) => (
              <article key={label} data-reveal="true" className="rounded-2xl border border-[#4A3523]/15 bg-[#FFF9F0] p-5 opacity-0 -translate-x-10 transition-all duration-700" style={{ transitionDelay: `${idx * 70}ms` }}>
                <p className="text-xs uppercase tracking-[0.16em] text-[#8D5D33]">{label}</p>
                <p className="mt-2 text-[#3A281A]">{value}</p>
              </article>
            ))}
          </div>

          <form data-reveal="true" className="rounded-[1.8rem] border border-[#4A3523]/15 bg-white p-6 opacity-0 translate-x-10 transition-all duration-700 md:p-8">
            <h2 className="text-2xl font-black text-[#2D1D12]">Send a Message</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input placeholder="First name" className="rounded-xl border border-[#4A3523]/20 bg-[#FFF9F0] px-4 py-3 text-[#2A1B12] outline-none focus:border-[#8D5D33]" />
              <input placeholder="Last name" className="rounded-xl border border-[#4A3523]/20 bg-[#FFF9F0] px-4 py-3 text-[#2A1B12] outline-none focus:border-[#8D5D33]" />
              <input type="email" placeholder="Email" className="rounded-xl border border-[#4A3523]/20 bg-[#FFF9F0] px-4 py-3 text-[#2A1B12] outline-none focus:border-[#8D5D33] md:col-span-2" />
              <input placeholder="Subject" className="rounded-xl border border-[#4A3523]/20 bg-[#FFF9F0] px-4 py-3 text-[#2A1B12] outline-none focus:border-[#8D5D33] md:col-span-2" />
              <textarea rows={5} placeholder="Message" className="rounded-xl border border-[#4A3523]/20 bg-[#FFF9F0] px-4 py-3 text-[#2A1B12] outline-none focus:border-[#8D5D33] md:col-span-2" />
            </div>
            <button type="button" className="mt-5 rounded-xl bg-[#3E2719] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F7ECDB] transition hover:bg-[#2D1D12]">Send Inquiry</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactPage


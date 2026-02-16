import support from '../assets/donate.png'
import { useContent } from '../context/ContentContext'
import useReveal from '../hooks/useReveal'

const tiers = [
  ['Daily Pooja', '$51'],
  ['Annadhanam', '$101'],
  ['Temple Care', '$251'],
  ['Festival Support', '$501'],
  ['Education', '$1001'],
]

function DonatePage() {
  useReveal()
  const { content } = useContent()
  const { siteInfo } = content

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <img src={support} alt="Donate" className="h-[420px] w-full rounded-[2rem] object-cover" />
          <article className="rounded-[2rem] bg-[#3E2719] p-8 text-[#F8EEDC] md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#E8B879]">Support VelMont</p>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">Give With Intention</h1>
            <p className="mt-5 text-lg text-[#F0DECA]">Your donation supports worship, education, community outreach, and stewardship of sacred space.</p>
            <button className="mt-6 rounded-xl bg-[#E8B879] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2A1B12] transition hover:-translate-y-1">Donate Securely</button>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tiers.map(([label, amount], idx) => (
            <article key={label} data-reveal="true" className="rounded-2xl border border-[#4A3523]/15 bg-white p-5 text-center opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${idx * 70}ms` }}>
              <p className="text-xs uppercase tracking-[0.16em] text-[#8D5D33]">{label}</p>
              <p className="mt-2 text-3xl font-black text-[#2D1D12]">{amount}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#5C4634]">Tax-deductible donations are acknowledged by email. Tax ID: {siteInfo.taxId}</p>
      </section>
    </div>
  )
}

export default DonatePage

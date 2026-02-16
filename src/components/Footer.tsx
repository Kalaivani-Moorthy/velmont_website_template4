import { useContent } from '../context/ContentContext'

function Footer() {
  const { content } = useContent()
  const { siteInfo } = content

  return (
    <footer className="bg-[#2A1B12] py-12 text-[#F2E7DA]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#E8B879]">VelMont Spiritual Center</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#F0DFCA]">
            Open-space spiritual center in California integrating prayer, meditation, yoga, nature immersion, and community service.
          </p>
          <p className="mt-4 text-sm text-[#F6C68A]">Tax ID: {siteInfo.taxId}</p>
        </div>
        <div className="space-y-2 text-sm text-[#F0DFCA]">
          <p>{siteInfo.address}</p>
          <p>{siteInfo.phone}</p>
          <p>{siteInfo.email}</p>
          <p>Visiting Hours: {siteInfo.visitingHours}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

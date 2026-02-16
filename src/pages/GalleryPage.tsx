import hero from '../assets/hero.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/caro7.jpg'
import pic4 from '../assets/caro6.jpg'
import caro1 from '../assets/caro1.jpg'
import caro2 from '../assets/caro2.png'
import caro3 from '../assets/caro3.jpg'
import caro4 from '../assets/caro4.jpg'
import caro5 from '../assets/caro5.jpg'
import pic10 from '../assets/pic10.jpg'
import pic12 from '../assets/pic12.jpg'
import { wixImages } from '../data'
import useReveal from '../hooks/useReveal'

const gallery = [hero, pic2, pic3, pic4, caro1, caro2, caro3, caro4, caro5,pic10,pic12, ]

function GalleryPage() {
  useReveal()

  return (
    <div className="pt-[96px] md:pt-[110px]">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-[2rem] bg-[#2A1B12] px-8 py-10 text-center text-[#F8EEDC] md:px-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#E8B879]">Photo Gallery</p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Sacred Moments at VelMont</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((image, idx) => (
            <article key={`${image}-${idx}`} data-reveal="true" className="mb-4 break-inside-avoid overflow-hidden rounded-2xl opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: `${idx * 60}ms` }}>
              <img src={image} alt="Velmont" className="w-full object-cover transition duration-700 hover:scale-105" />
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
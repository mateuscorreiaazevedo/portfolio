import { images } from '@/assets/images'
import { Section } from '@/main/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <Section animation="section-1">
      <div className="w-full flex flex-col lg:items-start items-center justify-center gap-4 md:gap-1">
        <h1 className="text-5xl sm:text-7xl font-alt">Hello.</h1>
        <h2>
          Meu nome é <span className="font-bold text-primary">Mateus Azevedo</span>.
        </h2>
        <p className="w-80 sm:w-72 sm:text-sm md:w-80 md:text-base text-justify">
          Desenvolvedor{' '}
          <span className="font-bold text-primary">Front-end e Mobile</span>, atuando
          desde 2018 com projetos de todos os portes. Atualmente sou freelancer como
          Frontend Developer desenvolvendo interfaces modernas e de alta qualidade,
          concentrado em performance, boas práticas de programação, responsividade e
          SEO. Além disso, estou me graduando no curso de Sistemas de Informação.
        </p>
      </div>
      <div className="absolute aspect-auto flex items-center justify-center lg:shadow-none lg:top-1/2 lg:-translate-y-1/2 lg:pb-6 lg:w-80">
        <Image
          src={images.myPhoto}
          alt="@mateuscorreiaazevedo"
          className="aspect-auto lg:w-72 xl:w-80 rounded-full hidden lg:block"
          loading="lazy"
        />
      </div>
      <Image
        src={images.myPhoto}
        alt="@mateuscorreiaazevedo"
        loading="lazy"
        className="absolute right-1/2 animate-section-2 translate-x-1/2 rounded-full w-16 aspect-auto object-contain top-20 shadow lg:hidden"
      />
    </Section>
  )
}

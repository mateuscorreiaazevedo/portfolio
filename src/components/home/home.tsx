import { images } from '@/assets/images'
import { Section } from '@/main/ui'
import Image from 'next/image'

export default function Home() {
  return (
    <Section animation="section-1">
      <div className="flex w-full flex-col items-center justify-center gap-4 md:gap-1 lg:items-start">
        <h1 className="font-alt text-5xl sm:text-7xl">Hello.</h1>
        <h2>
          Meu nome é <span className="font-bold text-primary">Mateus Azevedo</span>.
        </h2>
        <p className="w-80 text-justify sm:w-72 sm:text-sm md:w-80 md:text-base">
          Desenvolvedor{' '}
          <span className="font-bold text-primary">Front-end e Mobile</span>, atuando
          desde 2018 com projetos de todos os portes. Atualmente sou freelancer como
          Frontend Developer desenvolvendo interfaces modernas e de alta qualidade,
          concentrado em performance, boas práticas de programação, responsividade e
          SEO. Além disso, estou me graduando no curso de Sistemas de Informação.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1g7xdHRqbimkhrj-eZPYKFCGfClExcgRq"
          className="mt-2 flex h-10 w-80 items-center justify-center bg-violet-500 font-alt uppercase text-black transition-colors hover:bg-violet-600"
        >
          Download CV
        </a>
      </div>
      <div className="absolute flex aspect-auto items-center justify-center lg:top-1/2 lg:w-80 lg:-translate-y-1/2 lg:pb-6 lg:shadow-none">
        <Image
          src={images.myPhoto}
          alt="@mateuscorreiaazevedo"
          className="hidden aspect-auto rounded-full lg:block lg:w-72 xl:w-80"
          loading="lazy"
        />
      </div>
      <Image
        src={images.myPhoto}
        alt="@mateuscorreiaazevedo"
        loading="lazy"
        className="absolute right-1/2 top-20 aspect-auto w-16 translate-x-1/2 animate-section-2 rounded-full object-contain shadow lg:hidden"
      />
    </Section>
  )
}

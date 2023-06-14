import { FormContact } from '@/modules/contact'
import { Section } from '@/main/ui'
import SociaLinks from './social-links'

export default function Contact () {
  return (
    <Section>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <h1 className="animate-section-2 text-6xl sm:-translate-y-5 lg:-translate-y-20 font-alt lg:self-start first-letter:text-violet-500 text-neutral-100">
          Contato.
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
         <SociaLinks />
          <div className="lg:hidden block w-full h-px bg-purple-500 my-1" />
          <FormContact />
        </div>
      </div>
    </Section>
  )
}

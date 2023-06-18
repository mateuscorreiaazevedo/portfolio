import { FormContact } from '@/modules/contact'
import SociaLinks from './social-links'
import { Section } from '@/main/ui'

export default function Contact() {
  return (
    <Section>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="ml-20 animate-section-4 font-alt text-3xl text-neutral-100 first-letter:text-violet-500 md:text-6xl lg:self-start">
          Contato.
        </h1>
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
          <SociaLinks />
          <div className="my-1 block h-px w-full bg-purple-500 lg:hidden" />
          <FormContact />
        </div>
      </div>
    </Section>
  )
}

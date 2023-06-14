import { PushToAdmin } from './push-to-admin'

export default function Footer () {
  return (
    <footer className="px-20 fixed bottom-0 h-24 w-full flex justify-between items-center z-20">
      <p className="text-xs md:text-base text-center truncate">
        Copyright &copy; 2023 -{' '}
        <a
          className="md:text-lg text-primary hover:text-primary/80 transition-colors font-alt"
          href="https://mateusdev.com.br"
        >
          Mateus dev.
        </a>
      </p>
      <div className="flex items-center gap-3 text-lg">
        <p className="font-alt hidden md:block">Powered by</p>
        <PushToAdmin user={null}/>
      </div>
    </footer>
  )
}

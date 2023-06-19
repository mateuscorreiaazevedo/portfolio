import Image from 'next/image'
import { Item } from './item'
import { images } from '@/assets/images'

const navbar = [
  {
    value: null,
    label: 'Home'
  },
  {
    value: 'skills',
    label: 'Skills'
  },
  {
    value: 'projects',
    label: 'Projects'
  },
  {
    value: 'contact',
    label: 'Contact'
  }
]

export default function Sidebar() {
  return (
    <aside className="fixed bottom-0 right-0 top-0 z-10 hidden w-40 flex-col items-center justify-between p-4 lg:flex xl:w-60">
      <nav className="flex flex-1 flex-col items-center justify-center gap-2">
        {navbar.map(item => (
          <Item {...item} key={item.label} />
        ))}
      </nav>
      <footer className="flex w-full items-center justify-center gap-2">
        <p className="text-sm font-bold text-primary">Powered by</p>
        <a href="https://mateusdev.com.br">
          <Image
            src={images.brand}
            alt="Mateus Azevedo"
            className="aspect-square w-8"
            title="Mateus Azevedo &copy; - 2023"
          />
        </a>
      </footer>
    </aside>
  )
}

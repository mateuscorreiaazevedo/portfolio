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
    <aside className="hidden lg:flex flex-col justify-between items-center p-4 fixed top-0 right-0 bottom-0 w-40 xl:w-60 z-10">
      <nav className="flex-1 flex flex-col justify-center items-center gap-2">
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
            className="w-8 aspect-square"
            title="Mateus Azevedo &copy; - 2023"
          />
        </a>
      </footer>
    </aside>
  )
}

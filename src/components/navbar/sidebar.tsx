import { Item } from './item'

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

export default function Sidebar () {
  return (
    <aside className="hidden lg:flex p-4 fixed top-0 right-0 bottom-0 w-52 z-10">
      <nav className="flex-1 flex flex-col justify-center items-center gap-2">
        {navbar.map(item => (
          <Item {...item} key={item.label} />
        ))}
      </nav>
    </aside>
  )
}

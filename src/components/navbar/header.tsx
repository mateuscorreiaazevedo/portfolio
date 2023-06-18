import React from 'react'
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

export default function Header() {
  return (
    <header className="lg:hidden flex p-4 fixed top-0 w-full h-20 z-10 bg-zinc-950">
      <nav className="flex-1 flex justify-center items-center gap-4">
        {navbar.map(item => (
          <Item {...item} key={item.label} />
        ))}
      </nav>
    </header>
  )
}

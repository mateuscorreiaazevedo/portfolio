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
    <header className="fixed top-0 z-10 flex h-20 w-full bg-zinc-950 p-4 lg:hidden">
      <nav className="flex flex-1 items-center justify-center gap-4">
        {navbar.map(item => (
          <Item {...item} key={item.label} />
        ))}
      </nav>
    </header>
  )
}

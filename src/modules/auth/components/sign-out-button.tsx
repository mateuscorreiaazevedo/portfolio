import React from 'react'

export const SignOutButton = () => {
  return (
    <a
      href="/api/auth/logout"
      className="fixed right-4 top-4 z-50 cursor-pointer rounded bg-gradient-to-tr from-secondary to-primary px-4 py-2 font-alt"
    >
      Sair
    </a>
  )
}

import React from 'react'

export const SignOutButton = () => {
  return (
    <a
      href="/api/auth/logout"
      className="fixed top-4 right-4 px-4 py-2 font-alt bg-gradient-to-tr from-secondary to-primary rounded cursor-pointer z-50"
    >
      Sair
    </a>
  )
}

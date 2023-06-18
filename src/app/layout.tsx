import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import '../assets/globals.css'
import { Balls, Header, OrbitalSphere, Sidebar } from '@/components'
import { Toaster } from 'react-hot-toast'
import { cookies } from 'next/headers'
import { SignOutButton } from '@/modules/auth'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-main',
  fallback: ['sans serif']
})
const baijamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-alt',
  fallback: ['sans serif']
})

export const metadata = {
  title: 'Mateus Azevedo',
  description: 'My portfólio with Next.js 13 powered by: @mateuscorreiaazevedo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuth = cookies().has('auth_token')

  return (
    <html lang="pt-br">
      <body
        className={`
          ${roboto.variable}
          ${baijamjuree.variable}
          min-h-screen
          w-full
          bg-zinc-950
          font-main
          text-white
          scrollbar-none
        `}
      >
        <div className="fixed inset-0 -z-10 bg-[url(../assets/images/bg-stars.svg)] bg-cover" />
        <Header />
        {isAuth && <SignOutButton />}
        <main className="flex items-center">
          <OrbitalSphere />
          <Balls />
          <article className="flex-1 snap-mandatory snap-start">{children}</article>
          <Sidebar />
        </main>
        <Toaster
          toastOptions={{
            position: 'top-center',
            className: 'px-4 py-2 font-alt text-sm',
            duration: 3000
          }}
        />
      </body>
    </html>
  )
}

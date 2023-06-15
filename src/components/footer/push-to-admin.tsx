'use client'

import { useRouter } from 'next/navigation'
import { images } from '@/assets/images'
import Image from 'next/image'

type Props = {
  isAuth: boolean
}

export const PushToAdmin = ({ isAuth }: Props) => {
  const router = useRouter()

  return (
    <div onClick={() => router.push(isAuth ? '/admin' : '/auth/login')}>
      <Image
          title="Mateus Correia Azevedo"
          src={images.brand}
          className="w-10 aspect-auto object-contain"
          alt="@mateuscorreiaazevedo"
        />
    </div>
  )
}

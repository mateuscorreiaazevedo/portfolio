'use client'

import { useSearchParams } from 'next/navigation'
import { images } from '@/assets/images'
import Image from 'next/image'

export default function OrbitalSphere() {
  const params = useSearchParams()
  const tab = params?.get('tab')
  let style = ''

  switch (tab) {
    case null:
      style = 'top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
      break
    default:
      style = 'top-1/2 -translate-y-1/2 left-0 -translate-x-1/2'
  }

  return (
    <div
      className={`
        ${style}
        animate-scale
        fixed
        -z-10
        flex
        aspect-square
        w-full
        items-center
        justify-center
        rounded-full
        border-b
        border-l-0
        border-r-[3px]
        border-t
        border-zinc-200
        p-12
        transition-all
        duration-2000
        md:w-fit
        md:p-24
        `}
    >
      <div
        className="
          animate-time-4000
          absolute
          inset-0
          -top-1
          animate-spin
          rounded-full
          border-4
          border-transparent
          border-t-zinc-300/70
        "
      />
      <Image src={images.circle} alt="circle" className="aspect-square w-full" />
    </div>
  )
}

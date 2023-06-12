'use client'

import { useSearchParams } from 'next/navigation'
import { images } from '@/assets/images'
import Image from 'next/image'

export default function OrbitalSphere () {
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
        transition-all
        duration-2000
        p-12
        md:p-24
        w-full
        md:w-fit
        aspect-square
        rounded-full
        flex
        items-center
        justify-center
        border-t
        border-l-0
        border-r-[3px]
        border-b
        border-zinc-200
        `}
    >
      <div
        className="
          absolute
          inset-0
          rounded-full
          border-4
          border-transparent
          border-t-zinc-300/70
          animate-spin
          animate-time-4000
          -top-1
        "
      />
      <Image src={images.circle} alt="circle" className='w-full aspect-square' />
    </div>
  )
}

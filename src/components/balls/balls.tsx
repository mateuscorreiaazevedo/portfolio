import { images } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Balls = () => {
  return (
    <>
      <Image
        src={images.ball}
        alt=""
        className="animate-time-4000 fixed bottom-20 left-20 -z-10 animate-section-2 lg:left-80"
      />
      <Image
        src={images.ball}
        alt=""
        className="animate-time-700 fixed left-10 top-20 -z-10 animate-section-2 lg:left-36"
      />
      <Image
        src={images.ball}
        alt=""
        className="animate-time-2000 fixed right-4 top-40 -z-10 animate-section-2 lg:right-56"
      />
      <Image
        src={images.ball}
        alt=""
        className="animate-time-1000 fixed bottom-32 right-24 -z-10 animate-section-2 lg:right-40"
      />
    </>
  )
}

export default Balls

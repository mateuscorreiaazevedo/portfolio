import { images } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Balls = () => {
  return (
    <>
      <Image
        src={images.ball}
        alt=""
        className="animate-time-4000 fixed bottom-20 left-80 -z-10 animate-section-2"
      />
      <Image
        src={images.ball}
        alt=""
        className="animate-time-700 fixed left-36 top-20 -z-10 animate-section-2"
      />
      <Image
        src={images.ball}
        alt=""
        className="animate-time-2000 fixed right-56 top-40 -z-10 animate-section-2"
      />
      <Image
        src={images.ball}
        alt=""
        className="animate-time-1000 fixed bottom-32 right-40 -z-10 animate-section-2"
      />
    </>
  )
}

export default Balls

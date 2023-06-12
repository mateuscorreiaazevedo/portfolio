import { Variants } from 'framer-motion'

export const slideLeft: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      delay: 0.3
    }
  }
}

export const slideLeftImage: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
    y: '-50%'
  },
  visible: {
    x: 0,
    y: '-50%',
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 2,
      delay: 0.3
    }
  }
}

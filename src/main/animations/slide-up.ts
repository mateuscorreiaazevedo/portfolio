import { Variants } from 'framer-motion'

export const containerSlideUp: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
      delay: 1.4
    }
  }
}
export const containerSlideUpTwo: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
      delay: 1.2
    }
  }
}

export const itemSlideUp: Variants = {
  hidden: {
    y: '50%',
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'just',
      // bounce: 0.4,
      // duration: 1
    }
  }
}

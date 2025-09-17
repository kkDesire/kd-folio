export const useMotionPresets = () => {
  const fadeUp = (delay = 0) => ({
    initial: {
      y: 12,
      opacity: 0,
      filter: 'blur(8px)',
      scale: 1.02,
    },
    animate: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
    },
    transition: {
      duration: 0.5,
      delay,
      easing: 'ease-out',
    }
  })

  const popIn = (delay = 0) => ({
    initial: {
      scale: 1.08,
      opacity: 0,
      filter: 'blur(12px)',
    },
    animate: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
    },
    transition: {
      duration: 0.6,
      delay,
      easing: 'cubic-bezier(.22,1,.36,1)',
    },
  })

  return {
    fadeUp,
    popIn,
  }
}

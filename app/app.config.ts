export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/57430025?v=4',
      light: 'https://avatars.githubusercontent.com/u/57430025?v=4',
      alt: 'My profile picture',
    },
    meetingLink: 'https://cal.com/desire-kouassi',
    email: 'ui-pro@nuxt.com',
    available: true,
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral',
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted',
      },
    },
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://twitter.com/KouamDesire07',
        'target': '_blank',
        'aria-label': 'Desire KOUASSI on X',
      },
      {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://www.instagram.com/desirekouassi09?igsh=MTkzcWlxcnJkM3EzNw==',
        'target': '_blank',
        'aria-label': 'Desire KOUASSI on Instagram',
      },
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/kk-desire',
        'target': '_blank',
        'aria-label': 'Desire KOUASSI on LinkedIn',
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/kkDesire',
        'target': '_blank',
        'aria-label': 'Desire KOUASSI on GitHub',
      },
    ],
  },
})

export default defineAppConfig({
  appName: 'kedniko | Official website',
  appDescription: 'kedniko | Official website',
  profilePicture: '/assets/profilepicture.jpg',
  footerName: 'Nikodem Kedzierski',
  email: 'ked.niko@gmail.com',
  twitterUsername: '@kedniko',
  phone: '(+39) 331 371 5352',
  openGraphImage: 'https://kedniko.com/assets/profilepicture.jpg',
  socials: {
    github: 'https://github.com/kedniko',
    twitter: 'https://twitter.com/kedniko',
    linkedin: 'https://www.linkedin.com/in/nikodem-kedzierski/',
    instagram: 'https://www.instagram.com/kedniko',
    spotify: 'https://open.spotify.com/user/nikoked',
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})

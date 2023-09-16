// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'FancyWeb',
      meta: [
        { name: 'description', content: 'FancyWeb' },
        { name: 'og:title', content: 'FancyWeb' },
        { name: 'og:description', content: 'FancyWeb' },
        { name: 'og:image', content: '/assets/icon/hat.png' },

      ],
      link: [
        {
          rel: "icon",
          href: "/assets/icon/hat.png",
        },
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css",
          rel: "stylesheet"
        }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/marked@3.0.6/marked.min.js",
        },
        {
          src: "https://kit.fontawesome.com/168d3a888b.js",
          crossorigin: "anonymous"
        },
      ]
    }
  }
})

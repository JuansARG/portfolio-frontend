// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      // title: "Juan I. Sarmiento Portoflio",
      link: [
        {
          rel: "stylesheet",
          href: "css/global.css"
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
  },
  modules: [
    'nuxt-icon',
  ],
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
    URL_BACKEND_DEV: process.env.URL_BACKEND_DEV,
    BACKEND_USER: process.env.BACKEND_USER,
    BACKEND_PASS: process.env.BACKEND_PASS,
  },
});

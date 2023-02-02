// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  modules: ['@nuxtjs/tailwindcss'],

  RuntimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshhSecret: process.env.JWT_REFRESH_TOKEN_SECRET
  }
}

import createApp from './app.js'

import authService from './service.auth.js'
import databaseService from './service.database.js'
import functionsService from './service.functions.js'
import messagingService from './service.messaging.js'
import performanceService from './service.performance.js'
import analyticsService from './service.analytics.js'

const appConfig = {"apiKey":"AIzaSyAnH7Agi2IvEKXixzWcRDM8CsCb5Avz8tM","authDomain":"webmedia31ru.firebaseapp.com","databaseURL":"https:\u002F\u002Fwebmedia31ru-default-rtdb.europe-west1.firebasedatabase.app","projectId":"webmedia31ru","storageBucket":"webmedia31ru.appspot.com","messagingSenderId":"555481221015","appId":"1:555481221015:web:4aa33be70825b39225e6d2","measurementId":"G-FCPZR27CFD"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    databaseService(session, firebase, ctx, inject),
    functionsService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      databaseService(session, firebase, ctx, inject),
      functionsService(session, firebase, ctx, inject),
      messagingService(session, firebase, ctx, inject),
      performanceService(session, firebase, ctx, inject),
      analyticsService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    database,
    functions,
    messaging,
    performance,
    analytics
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    database: database,
    functions: functions,
    messaging: messaging,
    performance: performance,
    analytics: analytics
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}
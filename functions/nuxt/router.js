import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1cf8ee9c = () => interopDefault(import('..\\pages\\страница-на-кириллице\\index.vue' /* webpackChunkName: "pages/страница-на-кириллице/index" */))
const _7d96051d = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _1143181b = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _301936a6 = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages/articles/index" */))
const _13d6f270 = () => interopDefault(import('..\\pages\\calculator\\index.vue' /* webpackChunkName: "pages/calculator/index" */))
const _58064cd7 = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages/contacts/index" */))
const _367706ed = () => interopDefault(import('..\\pages\\job\\index.vue' /* webpackChunkName: "pages/job/index" */))
const _53c277c1 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _d245a5ee = () => interopDefault(import('..\\pages\\politics\\index.vue' /* webpackChunkName: "pages/politics/index" */))
const _823b3efc = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _212e6c87 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _6a0030ec = () => interopDefault(import('..\\pages\\admin\\activity\\index.vue' /* webpackChunkName: "pages/admin/activity/index" */))
const _57bb85a3 = () => interopDefault(import('..\\pages\\admin\\article\\index.vue' /* webpackChunkName: "pages/admin/article/index" */))
const _1605bd33 = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _19ebd1ac = () => interopDefault(import('..\\pages\\admin\\demo.vue' /* webpackChunkName: "pages/admin/demo" */))
const _3eada0fe = () => interopDefault(import('..\\pages\\admin\\vacancy\\index.vue' /* webpackChunkName: "pages/admin/vacancy/index" */))
const _1a2f4aa7 = () => interopDefault(import('..\\pages\\admin\\article\\create\\index.vue' /* webpackChunkName: "pages/admin/article/create/index" */))
const _49ac49fc = () => interopDefault(import('..\\pages\\admin\\vacancy\\create\\index.vue' /* webpackChunkName: "pages/admin/vacancy/create/index" */))
const _080d8ddf = () => interopDefault(import('..\\pages\\admin\\activity\\_activityId\\index.vue' /* webpackChunkName: "pages/admin/activity/_activityId/index" */))
const _69f75e31 = () => interopDefault(import('..\\pages\\admin\\article\\_articleId\\index.vue' /* webpackChunkName: "pages/admin/article/_articleId/index" */))
const _0304f9a7 = () => interopDefault(import('..\\pages\\admin\\vacancy\\_vacancyId\\index.vue' /* webpackChunkName: "pages/admin/vacancy/_vacancyId/index" */))
const _2d4ddf88 = () => interopDefault(import('..\\pages\\articles\\_alias\\index.vue' /* webpackChunkName: "pages/articles/_alias/index" */))
const _67b05aec = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0-%D0%BD%D0%B0-%D0%BA%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%B8%D1%86%D0%B5",
    component: _1cf8ee9c,
    name: "страница-на-кириллице"
  }, {
    path: "/about",
    component: _7d96051d,
    name: "about"
  }, {
    path: "/admin",
    component: _1143181b,
    name: "admin"
  }, {
    path: "/articles",
    component: _301936a6,
    name: "articles"
  }, {
    path: "/calculator",
    component: _13d6f270,
    name: "calculator"
  }, {
    path: "/contacts",
    component: _58064cd7,
    name: "contacts"
  }, {
    path: "/job",
    component: _367706ed,
    name: "job"
  }, {
    path: "/login",
    component: _53c277c1,
    name: "login"
  }, {
    path: "/politics",
    component: _d245a5ee,
    name: "politics"
  }, {
    path: "/portfolio",
    component: _823b3efc,
    name: "portfolio"
  }, {
    path: "/register",
    component: _212e6c87,
    name: "register"
  }, {
    path: "/admin/activity",
    component: _6a0030ec,
    name: "admin-activity"
  }, {
    path: "/admin/article",
    component: _57bb85a3,
    name: "admin-article"
  }, {
    path: "/admin/auth",
    component: _1605bd33,
    name: "admin-auth"
  }, {
    path: "/admin/demo",
    component: _19ebd1ac,
    name: "admin-demo"
  }, {
    path: "/admin/vacancy",
    component: _3eada0fe,
    name: "admin-vacancy"
  }, {
    path: "/admin/article/create",
    component: _1a2f4aa7,
    name: "admin-article-create"
  }, {
    path: "/admin/vacancy/create",
    component: _49ac49fc,
    name: "admin-vacancy-create"
  }, {
    path: "/admin/activity/:activityId",
    component: _080d8ddf,
    name: "admin-activity-activityId"
  }, {
    path: "/admin/article/:articleId",
    component: _69f75e31,
    name: "admin-article-articleId"
  }, {
    path: "/admin/vacancy/:vacancyId",
    component: _0304f9a7,
    name: "admin-vacancy-vacancyId"
  }, {
    path: "/articles/:alias",
    component: _2d4ddf88,
    name: "articles-alias"
  }, {
    path: "/",
    component: _67b05aec,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}

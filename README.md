# webmedia-nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

```

## Deploy to heroku

> git push heroku main


### before production, make sure to setup

* heroku config:set HOST=0.0.0.0
* heroku config:set NPM_CONFIG_PRODUCTION=false
* heroku config:set NODE_ENV=production


### Ensure that at least one instance of the app is running:
* heroku ps:scale web=1


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
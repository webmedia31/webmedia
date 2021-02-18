<template>
  <div id="rounded-link-wrapper">
    <NuxtLink no-prefetch :to="link">

      <Arrow lg />

      <svg id="rounded-text" width="165" height="165" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="purple" />
            <stop offset="100%" stop-color="gold" />
          </linearGradient>
        </defs>
        <g>
          <path id="textPath1" d="M 82 160 a 75 75 1 0 1 0 -150" fill="transparent"/>
          <path id="textPath2" d="M 82 10 a 75 75 9 0 1 0 150" fill="transparent"/>

          <path transform='translate(32 26), rotate(-24)' d="M43.0253 4.5179H42.785C29.4727 0.776119 15.3866 0.776119 2.07428 4.5179C1.96497 4.54914 1.85053 4.55835 1.73763 4.54499C1.62473 4.53163 1.51561 4.49597 1.4166 4.44008C1.3176 4.38419 1.23069 4.30919 1.16092 4.21942C1.09115 4.12966 1.03991 4.02693 1.01018 3.91719C0.978843 3.81014 0.969123 3.69792 0.981577 3.58707C0.994031 3.47622 1.02841 3.36896 1.08272 3.27153C1.13702 3.17409 1.21017 3.08844 1.2979 3.01954C1.38563 2.95065 1.48619 2.8999 1.59372 2.87025C15.2207 -0.956749 29.6385 -0.956749 43.2655 2.87025C43.3731 2.8999 43.4736 2.95065 43.5614 3.01954C43.6491 3.08844 43.7222 3.17409 43.7766 3.27153C43.8309 3.36896 43.8652 3.47622 43.8777 3.58707C43.8901 3.69792 43.8804 3.81014 43.8491 3.91719C43.794 4.09224 43.6843 4.24504 43.5361 4.35315C43.3878 4.46127 43.2088 4.51901 43.0253 4.5179Z" fill="#FFFCF9"/>
          <path transform='translate(131 144), rotate(-204)'  d="M43.0253 4.5179H42.785C29.4727 0.776119 15.3866 0.776119 2.07428 4.5179C1.96497 4.54914 1.85053 4.55835 1.73763 4.54499C1.62473 4.53163 1.51561 4.49597 1.4166 4.44008C1.3176 4.38419 1.23069 4.30919 1.16092 4.21942C1.09115 4.12966 1.03991 4.02693 1.01018 3.91719C0.978843 3.81014 0.969123 3.69792 0.981577 3.58707C0.994031 3.47622 1.02841 3.36896 1.08272 3.27153C1.13702 3.17409 1.21017 3.08844 1.2979 3.01954C1.38563 2.95065 1.48619 2.8999 1.59372 2.87025C15.2207 -0.956749 29.6385 -0.956749 43.2655 2.87025C43.3731 2.8999 43.4736 2.95065 43.5614 3.01954C43.6491 3.08844 43.7222 3.17409 43.7766 3.27153C43.8309 3.36896 43.8652 3.47622 43.8777 3.58707C43.8901 3.69792 43.8804 3.81014 43.8491 3.91719C43.794 4.09224 43.6843 4.24504 43.5361 4.35315C43.3878 4.46127 43.2088 4.51901 43.0253 4.5179Z" fill="#FFFCF9"/>

          <text>
            <textPath href="#textPath1" :startOffset="textOffset">
              <tspan dy=".4em" letter-spacing="2" fill="#FFF">{{ text }}</tspan>
            </textPath>
            <textPath href="#textPath2" :startOffset="textOffset">
              <tspan  letter-spacing="2" fill="#FFF">{{ text }}</tspan>
            </textPath>
          </text>
        </g>
      </svg>

    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    textOffset: Number,
    link: Object
  }
}
</script>

<style scoped>
#rounded-link-wrapper {
  position: relative;
}
.link-arrow {
  position: absolute;
  left: 60px;
  top: 75px;
}

#textPath {
  fill: none;
}

text {
  line-height: 1;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 18px;
}

svg#rounded-text {
  -moz-animation: rotate 8s linear infinite;
  -webkit-animation: rotate 8s linear infinite;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  0% {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>


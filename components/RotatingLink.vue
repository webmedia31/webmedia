<template>
  <div>
    <svg width="250" height="250" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="purple" />
          <stop offset="10%" stop-color="gold" />
        </linearGradient>
      </defs>
      <g>
        <path id="circle" d="M125,25 a95,95 0 1,0 0,190" />
        <path id="textPath" d="M125,25 a95,95 0 1,1 0,190" />
        <text>
          <textPath href="#textPath" startOffset="12">
            <tspan dy=".4em" fill="#FFF">{{ linkText }} </tspan>

            <tspan dx="30px" fill="#FFF">{{ linkText }} </tspan>
          </textPath>
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    linkText: "Наши проекты"
  })
}
</script>

<style scoped>
#circle {
  fill: none;
  stroke-width: 8px;
  stroke: url(#grad);
}

#textPath {
  fill: none;
}

text {
  line-height: 1;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 23px;
}

svg {
  /* -moz-animation: rotate 8s linear infinite;
  -webkit-animation: rotate 8s linear infinite;
  animation: rotate 8s linear infinite; */
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

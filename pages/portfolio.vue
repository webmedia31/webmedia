<template>
  <div>
    <section v-if="!loading">
      <h1>Slider</h1>

      <splide @splide:mounted="mountedMethod" :options="options">
        <splide-slide>
          <div class="slide-content">
            <h3 class="slide-header">Some Slide Header</h3>
            <p class="slide-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, est
              sit animi excepturi quam rem, vero aperiam atque quia,
              voluptatibus fugit dicta eligendi rerum saepe corporis natus
              commodi. Praesentium, ipsam.
            </p>
          </div>
          <img src="image01.jpg" />
        </splide-slide>
        <splide-slide>
          <div class="slide-content">
            <h3 class="slide-header">Some Slide Header</h3>
            <p class="slide-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, est
              sit animi excepturi quam rem, vero aperiam atque quia,
              voluptatibus fugit dicta eligendi rerum saepe corporis natus
              commodi. Praesentium, ipsam.
            </p>
          </div>
          <img src="image02.jpg" />
        </splide-slide>
        <splide-slide>
          <div class="slide-content">
            <h3 class="slide-header">Some Slide Header</h3>
            <p class="slide-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, est
              sit animi excepturi quam rem, vero aperiam atque quia,
              voluptatibus fugit dicta eligendi rerum saepe corporis natus
              commodi. Praesentium, ipsam.
            </p>
          </div>
          <img src="image03.jpg" />
        </splide-slide>
      </splide>
    </section>



    <section v-else>LOADING...</section>
  </div>
</template>

<script>
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "portfolio",
  layout: "default",
  data: () => ({
    loading: true,
    options: {
      height: "476px",
      width: "100%",
      padding: "350px",
      rewind: true,
      perPage: 1,

      type: "loop",
      autoplay: false,
      padding: {
        right: "20rem",
        left: "20rem"
      },
      breakpoints: {
        640: {
          gap: "0px",
        },
        1200: {
          gap: "170px",
        }
      }
    }
  }),
  mounted() {
    this.loading = false;
  },
  methods: {
    mountedMethod() {
      console.log("Mounted method");
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('Hiding slider');
    setTimeout(()=>{
      next()
    },1000)


    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  },
  // beforeDestroy() {
  //   alert('the component is destroy')
  // },
};
</script>

<style>
.slide-content {
  position: absolute;
  margin: 10% auto;
  width: 50%;
}
.slide-header,
.slide-description {
  color: #fff;
}

.slide-header {
  color: #fffcf9;
  font-family: GilroyBold;
  font-size: 60px;
  line-height: 105%;
}

.slide-description {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
}

.splide__pagination {
  bottom: -77px;
}

.splide__pagination__page {
  border-radius: 0px;
  width: 72px;
  height: 2px;
  margin: 0;
  padding: 7px 0px;
  background-color: unset;
}
.splide__pagination__page:after {
  content: "";
  display: block;
  width: 72px;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
}
.splide__pagination__page.is-active:after {
  background: #fff;
}

.splide__pagination__page.is-active {
  transform: none;
  background-color: unset;
}

.splide__slide img {
  float: right;
  width: 85%;
}
</style>

<template>
    <div class="example">

        <!-- directive: render origin html on server & render Swiper on browser -->
        <!-- You can get the swiper instance object in current component context by the name: "mySwiper"  -->

        <div
                class="swiper"
                v-swiper:myDirectiveSwiper="swiperOptions"
                @ready="onSwiperRedied"
                @click-slide="onSwiperClickSlide"
                @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
        >
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="index in 6" :key="index">
                    <span>Slide {{ index }}</span>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'swiper-nuxt',
        data () {
            return {
                swiperOptions: {
                    loop: true,
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    }
                }
            }
        },
        methods: {
            onSwiperRedied(swiper) {
                console.log('Swiper redied!', swiper)
            },
            onSwiperSlideChangeTransitionStart() {
                console.log('SwiperSlideChangeTransitionStart!')
            },
            onSwiperClickSlide(index, reallyIndex) {
                console.log('Swiper click slide!', reallyIndex)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .example {
        height: auto;
        .swiper {
            height: 300px;
            width: 100%;



            .swiper-slide {
                text-align: center;
                font-size: 38px;
                font-weight: 700;
                background-color: #eee;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;

                span {
                    width: 100%;
                }
            }
            .swiper-pagination {
                > .swiper-pagination-bullet {
                    background-color: red;
                }
            }
        }
    }
</style>
<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'

defineProps({
  block: {
    type: Object,
    required: true
  }
})

const currentSlide = ref(0)
</script>
<template>
  <div class="slider">
    <Carousel :wrapAround="true" v-model="currentSlide">
      <Slide v-for="(image, idx) in block.data" :key="idx">
        <img :src="image" class="slider__img" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div class="slider__current-position">{{ currentSlide + 1 }} / {{ block.data.length }}</div>
  </div>
</template>

<style lang="scss" scoped>
.slider__current-position {
  text-align: center;
  margin-top: 20px;
  color: #000;
}

:deep() {
  .carousel__prev,
  .carousel__next {
    background: #000;
    color: #fff;
    opacity: 1;
    width: 60px;
    height: 60px;
  }
}

.slider__img {
  width: 100%;
  height: auto;
}
</style>

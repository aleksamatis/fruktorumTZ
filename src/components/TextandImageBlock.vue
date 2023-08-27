<script setup>
defineProps({
  block: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="text-and-image-component">
    <img :src="block.data.image" class="text-and-image-component__image" />
    <div class="text-and-image__text">
      <h1 class="text-and-image-component__title">{{ block.data.title }}</h1>
      <div class="text-and-image-component_section">
        <div>
          <img
            class="text-and-image-component__img"
            src="@/assets/images/icon-park-solid_time.svg"
          />{{ block.data.reading_time }} мин время чтения
        </div>
        <div>
          <img class="text-and-image-component__img" src="@/assets/images/vector.svg" />{{
            block.data.views_count
          }}
          прочитали статью
        </div>
      </div>
      <div class="text-and-image__description">{{ block.data.short_description }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-and-image-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
}

.text-and-image-component__title {
  margin-bottom: 30px;
}

.text-and-image-component__image {
  width: 541px;
  height: 580px;
  border-top-right-radius: 50%;
}
.text-and-image__text {
  max-width: 769px;
}
.text-and-image-component_section {
  font-size: 14px;
  color: var(--grey);
  margin-bottom: 50px;
}

.text-and-image__description {
  font-size: 18px;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
}

.text-and-image-component__img {
  margin-right: 8px;
}

@media screen and (max-width: 900px) {
  .text-and-image-component {
    flex-wrap: wrap;
    .text-and-image-component__image {
      width: 100%;
      height: auto;
    }

    .text-and-image-component__title {
      font-size: 26px;
    }
  }
}
</style>

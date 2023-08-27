<script setup>
import NewsItem from '../components/NewsItem.vue'
defineProps({
  block: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="news-component">
    <h2 class="news-component__title">
      {{ block.data.title }}
    </h2>
    <div class="news-component__items">
      <div v-for="(item, idx) in block.data.articles" :key="idx">
        <NewsItem :item="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-component__items {
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin: -15px;

  > div {
    width: 33%;
    padding: 15px;
  }
}
.news-component__title {
  padding-bottom: 50px;
}

@media screen and (max-width: 700px) {
  .news-component__items {
    flex-wrap: wrap;

    > div {
      width: 100%;
    }
  }
}
</style>

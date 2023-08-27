<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="news-item">
    <img class="news-item__img" :src="item.image" />
    <h3 class="news-item__title">{{ item.title }}</h3>
    <a :href="item.link" class="news-item__btn">Читать</a>
  </div>
</template>

<style lang="scss" scoped>
.news-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.news-item__title {
  flex-grow: 1;
}

.news-item__img {
  width: 100%;
  height: auto;
}
.news-item__btn {
  display: inline-flex;
  padding: 10px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: var(--text);
  color: var(--color-background);
}
</style>

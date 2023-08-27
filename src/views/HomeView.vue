<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticlesStore } from '../stores/articles'
import TextandImageBlock from '../components/TextandImageBlock.vue'
import TextBlock from '../components/TextBlock.vue'
import ImageandCaptionBlock from '../components/ImageandCaptionBlock.vue'
import NewsBlock from '../components/NewsBlock.vue'
import SliderBlock from '../components/SliderBlock.vue'
import BigFormBlock from '../components/BigFormBlock.vue'
import FormBlock from '../components/FormBlock.vue'

const route = useRoute()
const store = useArticlesStore()

const slug = computed(() => {
  return '/' + (route.params.slug || '')
})

async function loadData() {
  store.fetchArticle(slug.value)
}

onMounted(async () => {
  await loadData()
})

watch(
  () => route,
  async () => {
    await loadData()
  }
)

const data = computed(() => store.getArticle(slug.value).value)
</script>

<template>
  <main v-if="data">
    <template v-for="block in data.body" :key="block.id">
      <TextandImageBlock v-if="block.type == 'article_intro_block'" :block="block" />
      <TextBlock v-else-if="block.type == 'text_block'" :block="block" />
      <ImageandCaptionBlock v-else-if="block.type == 'image_block'" :block="block" />
      <NewsBlock v-else-if="block.type == 'article_list_block'" :block="block" />
      <FormBlock v-else-if="block.type == 'subscribe_form_block'" :block="block" />
      <BigFormBlock v-else-if="block.type == 'cta_form_block'" :block="block" />
      <SliderBlock v-else-if="block.type == 'slider_block'" :block="block" />
      <div v-else>{{ block.type }}</div>
    </template>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 200px;
}
</style>

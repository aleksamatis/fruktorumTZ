import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref({})

  const fetchArticle = async (slug) => {
    if (articles.value[slug]) return
    const result = await fetch(`//devtwit8.ru/api/v1/page/?path=${slug}`, {
      credentials: 'omit',
      mode: 'cors'
    })
    articles.value[slug] = await result.json()
  }

  function getArticle(slug) {
    return computed(() => articles.value[slug])
  }

  return { fetchArticle, getArticle }
})

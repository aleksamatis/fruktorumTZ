<script setup>
defineProps({
  block: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="text-component" v-html="block.data"></div>
</template>

<style lang="scss" scoped>
.text-component {
  max-width: 884px;
  margin: 0 auto;
}

:deep(.text-component) {
  h2 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 20px;
  }

  p:last-of-type {
    margin-bottom: 15px;
  }

  blockquote {
    margin-top: 20px;
    padding-left: 120px;
    position: relative;
    font-style: italic;
    font-weight: 300;
  }

  blockquote::before {
    content: ' ';
    position: absolute;
    background: url('@/assets/images/vector2.svg') no-repeat;
    width: 100px;
    height: 60px;
    left: 0;
    top: 0;
  }

  footer {
    color: var(--grey);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }
}
</style>

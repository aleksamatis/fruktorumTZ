<script setup>
defineProps({
  block: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="text-and-caption-component">
    <div>
      <img :src="block.data.src" class="text-and-caption-component__image" />
      <div class="text-and-caption-component__caption">
        {{ block.data.caption }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-and-caption-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;

  &__caption {
    font-size: 14px;
    color: var(--grey);
    margin-top: 10px;
  }
}
.text-and-caption-component__image {
  border-radius: 2px 220px 2px 2px;
  width: 100%;
  height: auto;
}
</style>

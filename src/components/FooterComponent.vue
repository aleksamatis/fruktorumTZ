<script setup>
import FormBlock from '../components/FormBlock.vue'
</script>

<template>
  <div class="footer-component">
    <div class="about-design">
      <img src="@/assets/images/logo.svg" />
      <div class="text-description">
        Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные
        тенденции, раскрывая мир эстетики и креативности
      </div>
    </div>

    <div class="contacts">
      <div class="contacts-address">email</div>
      <div>testblogsupport@gmail.com</div>
      <div class="social-media">
        <img src="@/assets/images/group7494.svg" /><img src="@/assets/images/vk.svg" /><img
          src="@/assets/images/group7495.svg"
        /><img src="@/assets/images/group7496.svg" />
      </div>
    </div>
  </div>
  <FormBlock />
</template>

<style lang="scss" scoped>
.footer-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 70px;
}
.about-design {
  max-width: 426px;
}
.contacts {
  max-width: 400px;
}

.contacts-address {
  font-size: 14px;
  color: var(--grey);
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.text-description {
  font-size: 14px;
  color: var(--grey);
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  padding-top: 20px;
}

.social-media {
  padding-top: 24px;
}

.social-media {
  img {
    margin-right: 20px;
  }
  img:last-child {
    margin-right: 0;
  }
}
@media screen and (max-width: 900px) {
  .footer-component {
    flex-wrap: wrap;
  }
}
</style>

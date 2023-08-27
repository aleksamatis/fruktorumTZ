<template>
  <div class="big-form-component">
    <img src="@/assets/images/photo.jpg" />
    <div>
      <h2 class="big-form-component__title">Стань участником проекта</h2>
      <form class="big-form-component__form">
        <input class="big-form-component__input" type="text" placeholder="Имя" />
        <input class="big-form-component__input" type="number" placeholder="Email" />
        <input class="big-form-component__input" type="tel" placeholder="Телефон" />
        <button class="big-form-component__btn">Присоедениться</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.big-form-component {
  display: flex;
  justify-content: space-evenly;
  height: auto;
  background: var(--text);
  padding: 60px;
  gap: 60px;

  img {
    width: 100%;
    height: auto;
  }
}

.big-form-component__title {
  padding-bottom: 50px;
  color: var(--color-background);
}
.big-form-component__btn {
  display: inline-flex;
  padding: 10px 50px;
  max-width: 260px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: var(--blue);
  color: var(--color-background);
  border: 0;
  cursor: pointer;
  margin-top: 50px;
}
.big-form-component__form {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.big-form-component__input {
  border: none;
  background: var(--text);
  border-bottom: 1px solid var(--grey);
  color: var(--color-background);
  max-width: 353px;
}

@media screen and (max-width: 950px) {
  .big-form-component {
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>

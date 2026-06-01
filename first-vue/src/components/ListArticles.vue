<template>
  <!-- ListArticles.vue -->
  <main class="list-articles">
    <div class="list-articles__container">
      <div class="list-articles__list">
        <div class="list-articles__card card-article">
          <h4 class="card-article__title">Обучающий курс</h4>

          <p class="card-article__description">
            Сегодня в помещении актового зала проходит грандиозный курс обучения
            IT-специальностям, ведущие спикеры России...
          </p>
        </div>

        <div class="list-articles__card card-article">
          <h4 class="card-article__title">Награждение выпускников</h4>

          <p class="card-article__description">
            Выпускники - наша гордость. В этом году очень много достойных
            студентов, которые окончили наше направления с красным дипломом.
            Ребята я хочу пожелать вам...
          </p>
        </div>

        <div class="list-articles__card card-article">
          <h4 class="card-article__title">Закрытие ресторана</h4>

          <p class="card-article__description">
            Вчера прошел последний день приема в знаменитом ресторане. Причины
            закрытия не известны, быть может это пиар-ход, и скоро нас ожидает
            бомбическое открытие...
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="less">
  .list-articles {
    padding-bottom: 20px;

    &__container {
      .container();
    }
    &__card {
      margin-bottom: 15px;
    }
  }

  .card-article {
    box-sizing: border-box;
    position: relative;
    padding: 20px 30px 20px 15px;
    box-shadow: 0 0 5px 1px @brown;
    background-color: @white;

    &__title {
      margin: 0 0 10px;
      color: @light_orange;
      font-size: 20px;
      cursor: pointer;
    }

    &__description {
      margin: 0 0 10px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

<template>
  <main class="list-articles">
    <div class="list-articles__container">
      <div class="list-articles__list">
        <SearchForm class="list-articles__search-form" @search="onSearch" />
        <CardArticle
          v-for="item in newsList"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :description="item.body"
          class="list-articles__card"
        />
        <ThePaginator
        :page="page"
        :totalPages="totalPages"
        class="list-articles__paginator"
        @setPage="setPage"
        />
      </div>
    </div>
  </main>
</template>

<script>
  import SearchForm from "@/components/SearchForm.vue";
  import CardArticle from "@/components/card/CardArticle.vue";
  import ThePaginator from "@/components/ThePaginator.vue";

  export default {
    components: {
      SearchForm,
      CardArticle,
      ThePaginator,
    },
    data() {
      return {
        newsList: [],
        limit: 10,
        page: 1,
        totalCount: 1,
        totalPages: 1,
        search: "",
      };
    },
    methods: {
      getNewsList(page = 1) {
        const params = {
          limit: this.limit,
          skip: this.limit * (page - 1),
        };

        if (this.search) params.q = this.search;

        const url = this.search
          ? "https://dummyjson.com/posts/search"
          : "https://dummyjson.com/posts";

        this.$axios(url, {
          params: params,
        }).then((response) => {
          if (response?.data?.posts) {
            this.newsList = response.data.posts;
            this.page = page;
            this.totalCount = response.data.total;
            this.totalPages = Math.ceil(this.totalCount / this.limit);
          }
        });
      },
      setPage(page) {
        this.getNewsList(page);
      },
      onSearch(search) {
        this.$router
          .push({ query: search ? { search: search } : {} })
          .then(() => {
            this.search = this.$route.query.search;
            this.getNewsList();
          });
      },
    },
    created() {
      if (this.$route.query.search) this.search = this.$route.query.search;
      this.getNewsList();
    },
  };
</script>

<style lang="less">
  .list-articles {
    &__container {
      .container();
    }
    &__card {
      margin-bottom: 15px;
    }
    &__search-form {
      margin-bottom: 30px;
    }
  }
</style>


<template>
  <section>
    <v-container class="pa-10" fluid>
      <h1 class="v-container-category-title py-7">{{ this.slug }}</h1>
      <v-row class="ma-3 flex-wrap" justify="start">
        <v-col
          v-for="(item, index) of items"
          :key="index"
          cols="12"
          md="4"
          lg="4"
          sm="6"
        >
          <v-card
            class="v-category"
            @click="redirect(`/category/${slug}/${getOnlyId(item.url)}`)"
            elevation="1"
          >
            <v-card-text>
              <div class="v-category-title pb-3">
                {{ item.name || item.title }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <div>
          <span> Page numéro: </span>
          <button v-if="next" @click="onNextPage">Next Page</button>
          <button v-if="prev" @click="onPreviousPage">Previous Page</button>
        </div>
      </v-row>
    </v-container>
  </section>
</template>
<!-- <div class="ma-0 pa-0 mb-15" fluid>
    <div>
      <!-- <a @click.prevent="onGoBack" href="#">
            Go back
        </a> 
      <h1>{{ this.slug }}</h1>
    </div>
    <div>
      <p v-for="(item, index) of items" :key="index">
        {{ item.name || item.title }}
      </p>
    </div>
    <!-- <div>
      <button v-if="resultAPI.previous" @click="onPreviousPage">
        Previous
      </button>
      <span> Page numéro: {{ currentPage }} </span>
      <button v-if="resultAPI.next" @click="onNextPage">Next Page</button>
    </div> 
  </div> -->

<script>
import api from "../../../store/api";

export default {
  name: "category",
  data: () => ({
    page: 1,
    items: [],
  }),

  async asyncData({ params }) {
    let res = await api.getItemsFromCategory(params.slug);
    console.log(res);
    let items = res.results;
    let next = res.next ? true : false;
    let prev = res.previous ? true : false;
    return { items, slug: params.slug, next: next, prev: prev };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
    },
    getOnlyId(string) {
      let arrayString = string.split("/");
      return arrayString[arrayString.length - 2];
    },
    async onNextPage() {
      this.page++;
      let res = await api.getItemsFromCategory(this.slug, this.page);
      this.next = res.next;
      this.prev = res.previous;
      this.items = res.results;
    },
    async onPreviousPage() {
      this.page--;
      let res = await api.getItemsFromCategory(this.slug, this.page);
      this.prev = res.previous;
      this.items = res.results;
    },
  },
};
</script>

<template>
  <div class="ma-0 pa-0 mb-15" fluid>
    <div>
      <!-- <a @click.prevent="onGoBack" href="#">
            Go back
        </a> -->
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
    </div> -->
  </div>
</template>

<script>
import api from "../../store/api";

export default {
  name: "category",
  async asyncData({ params }) {
    let res = await api.getItemsFromCategory(params.slug);
    console.log(res);
    let items = res.results;
    return { items, slug: params.slug };
  },
};
</script>

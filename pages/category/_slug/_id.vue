<template>
  <section>
    <v-container class="v-container-category pa-10" fluid>
      <h1 class="v-container-category-title py-7">{{ this.slug }}</h1>
      <v-row class="ma-5 flex-wrap" justify="center">
        <v-card class="v-category" elevation="1" width="70vw">
          <v-card-text class="v-category-item px-8">
            <h1 class="v-category-item-title py-5">
              {{ item.name || item.title }}
            </h1>
            <p
              class="v-category-item-text"
              v-for="(value, index) of item"
              :key="index"
            >
              {{ index }}: {{ value }}
            </p>
          </v-card-text>
          <v-card-actions>
            <!-- <div>
              <v-btn v-if="resultAPI.previous" @click="onPreviousPage">
                Previous
              </v-btn>
              <span> Page numéro: {{ currentPage }} </span>
              <v-btn v-if="resultAPI.next" @click="onNextPage">Next Page</v-btn>
            </div> -->
          </v-card-actions>
        </v-card>
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
    <div>
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
  async asyncData({ params }) {
    let res = await api.getOneItem(params.slug, params.id);
    console.log(res);
    let item = res;
    return { item, slug: params.slug, id: params.id };
  },
};
</script>

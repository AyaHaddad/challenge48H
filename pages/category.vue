<template>
  <div>
    <div>
      <!-- <a @click.prevent="onGoBack" href="#">
            Go back
        </a> -->
      <h1>Category name: {{ categoryName }}</h1>
    </div>
    <div>
      <p v-for="(item, index) of resultAPI.results" :key="index">
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
import api from "../store/api";

export default {
  name: "category",
  async asyncData() {
    let res = await api.getItemsFromCategory();
    console.log(res);
    let items = res.results;
    return { items };
  },
};
</script>
onMounted(() => { categoryName.value = route.params.category; onChangePage();
});

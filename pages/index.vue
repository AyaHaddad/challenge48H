<template>
  <section>
      <Navbar/>
    <h1>test recup api</h1>
    <p v-for="onepeople in people" :key="onepeople.id">{{ onepeople.name }}</p>
  </section>
</template>

<script>
import api from "../store/api";
import Navbar from '../components/Navbar.vue';
export default {
  components: { Navbar },
  name: "IndexPage",
  layout: "index",
  async asyncData() {
    let res = await api.getAllPeople();
    console.log(res);
    let people = res.results;
    return { people };
  },
};
</script>

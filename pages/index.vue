<template>
  <section>
    <Navbar />
  </section>
</template>

<script>
import api from "../store/api";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "IndexPage",
  layout: "index",
};
</script>

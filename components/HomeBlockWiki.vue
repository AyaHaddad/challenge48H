<template>
  <section>
    <v-card class="blurredCard pa-6">
      <h1 class="questionHeadline white--text">Welcome to Star Wars library</h1>
      <p class="body-1 pt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
      </p>
      <v-btn
        rounded
        large
        elevation="12"
        @click="redirect"
        class="primaryBtn mt-2"
        >Wiki</v-btn
      >
    </v-card>
  </section>
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push("/category");
    },
  },
};
</script>

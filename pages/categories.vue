<template>
  <section>
    <h1>test recup categories</h1>
    <nuxt-link
      v-for="(category, index) of categories"
      :key="index"
      :to="category.link"
    >
      {{ category.name }}
    </nuxt-link>
  </section>
</template>

<script>
import api from "../store/api";

export default {
  name: "categories",
  data() {
    return {
      categories: [
        {
          name: "Species",
          link: "species",
          img: "species.jpg",
        },
        {
          name: "Film",
          link: "films",
          img: "films.jpg",
        },
        {
          name: "Vehicle",
          link: "vehicles",
          img: "vehicles.png",
        },
        {
          name: "People",
          link: "people",
          img: "people.jpg",
        },
        {
          name: "Starship",
          link: "starships",
          img: "starships.jpg",
        },
        {
          name: "Planet",
          link: "planets",
          img: "planets.jpg",
        },
      ],
    };
  },
};
</script>

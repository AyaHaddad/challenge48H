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
import api from "../../store/api";

export default {
  name: "categories",
  data() {
    return {
      categories: [
        {
          name: "Species",
          link: "category/species",
          img: "species.jpg",
        },
        {
          name: "Film",
          link: "category/films",
          img: "films.jpg",
        },
        {
          name: "Vehicle",
          link: "category/vehicles",
          img: "vehicles.png",
        },
        {
          name: "People",
          link: "category/people",
          img: "people.jpg",
        },
        {
          name: "Starship",
          link: "category/starships",
          img: "starships.jpg",
        },
        {
          name: "Planet",
          link: "category/planets",
          img: "planets.jpg",
        },
      ],
    };
  },
};
</script>

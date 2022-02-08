<template>
  <section>
    <Navbar />
    <v-container class="pa-10" fluid>
      <h1>Categories</h1>
      <v-row class="ma-3 flex-wrap" justify="start">
        <v-col
          v-for="(category, index) of categories"
          :key="index"
          cols="12"
          md="4"
          lg="4"
          sm="6"
        >
          <v-card
            class="v-category"
            @click="redirect(category.link)"
            elevation="1"
          >
            <v-img
              :style="{ width: '100%' }"
              :src="require('../../assets/img/films.jpeg')"
              class="image-card"
            />
            <v-card-text>
              <div class="v-category-title pb-3">
                {{ category.name }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import api from "../../store/api";
import Navbar from "../../components/Navbar.vue";

export default {
  name: "categories",
  components: {
    Navbar,
  },
  data() {
    return {
      categories: [
        {
          name: "Species",
          link: "category/species",
          img: "../../assets/img/species.png",
        },
        {
          name: "Film",
          link: "category/films",
          img: "../../assets/img/films.jpeg",
        },
        {
          name: "Vehicle",
          link: "category/vehicles",
          img: "../../assets/img/vehicles.jpeg",
        },
        {
          name: "People",
          link: "category/people",
          img: "../../assets/img/people.jpeg",
        },
        {
          name: "Starship",
          link: "category/starships",
          img: "../../assets/img/starships.jpeg",
        },
        {
          name: "Planet",
          link: "category/planets",
          img: "../../assets/img/planets.jpeg",
        },
      ],
    };
  },
  methods: {
    redirect(link) {
      this.$router.push(link);
    },
  },
};
</script>

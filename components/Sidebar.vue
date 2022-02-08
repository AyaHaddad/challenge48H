<template>
  <v-card>
    <v-navigation-drawer dark v-model="drawer">
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title @click="redirect(items.link)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "People",
          icon: "mdi-account-group",
          link: "category/species",
        },
        { title: "Planets", icon: "mdi-earth", link: "category/planets" },
        {
          title: "Starships",
          icon: "mdi-space-station",
          link: "category/starships",
        },
        { title: "Films", icon: "mdi-movie-open", link: "category/films" },
        {
          title: "Vehicules",
          icon: "mdi-car-hatchback",
          link: "category/vehicles",
        },
        {
          title: "Species",
          icon: "mdi-alien-outline",
          link: "category/species",
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

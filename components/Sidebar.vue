<template>
  <v-card>
    <v-navigation-drawer
        dark
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'People', icon: 'mdi-account-cowboy-hat-outline' },
          { title: 'Planet', icon: 'mdi-earth' },
          { title: 'Starships', icon: 'mdi-space-station' },
          { title: 'Films', icon: 'mdi-movie-open' },
          { title: 'Vehicule', icon: 'mdi-car-hatchback' },
          { title: 'Species', icon: 'mdi-alien-outline' },
        ]
      }
    },
  }
</script>
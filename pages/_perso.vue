<template>
  <div class="hello">
    <div v-bind="name">
    <h1>{{ this }}</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        name: null,
      }
    },
    async asyncData({params}) {
      axios
      .get(`https://swapi.dev/api/people/${params.perso}`)
      .then(reponse => {
        const name = reponse;
        return { name: name } 
      })
    }
  }
</script>
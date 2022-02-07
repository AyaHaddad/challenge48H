<template>
  <div>

      <h1>StarWars Films</h1>
      <ul>
        <li v-bind="film">{{ film.title }} <br> {{ film.director }} <br> {{ film.release_date }} <br>  </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>

</template>

<script>
  export default {
    async asyncData({ params }) {
      const film = await fetch(`https://swapi.dev/api/films/${params.film}`).then(res =>
        res.json()
        ) // When calling /abc the slug will be "abc"
      return { film }
    }
  }
</script>
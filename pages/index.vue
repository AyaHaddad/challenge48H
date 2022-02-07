import 'axios.js'

<template>
  <div class="hello">
    <div :key="index" v-for="(name, index) in name">
    <h1>{{ name.name }}</h1>
    </div>
  </div>
</template>


 async getallPeople() {
    let arrayOfPeople = new Array();
    for (let index = 1; index <= 83; index++) {
      if (index == 17) {
        continue;
      }
      let test = await axios.get("https://swapi.dev/api/people/" + index);
      arrayOfPeople.push(test.data.name);
    }
    console.log(arrayOfPeople);
  },
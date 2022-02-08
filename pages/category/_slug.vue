import 
<template>
  <div class="ma-0 pa-0 mb-15" fluid>
    <div>
      <!-- <a @click.prevent="onGoBack" href="#">
            Go back
        </a> -->
      <h1>{{ this.slug }}</h1>
    </div>
    <div>
      <div v-for="(item, index) of items" :key="index" class="card">
        <div class="card-body">
          <div class="card-date">
            <div class="card-title"> 
                <div class="card-excerpt">
                    <p>
                      {{ item.name || item.title }}
                    </p>
               </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <button v-if="resultAPI.previous" @click="onPreviousPage">
        Previous
      </button>
      <span> Page numéro: {{ currentPage }} </span>
      <button v-if="resultAPI.next" @click="onNextPage">Next Page</button>
    </div> -->
  </div>
</template>

<script>
import api from "../../store/api";

export default {
  name: "category",
  async asyncData({ params }) {
    let res = await api.getItemsFromCategory(params.slug);
    console.log(res);
    let items = res.results;
    return { items, slug: params.slug };
  },
};
</script>

<style lang="scss">
body {
    background: #eee;
    padding: 40px 0px;
  }
  
  $card-size: 400px;
  $image-size: 100%;
  $image-height: 250px;
  
  
  .card {
    width: 400px;
    margin:0px auto;
    
    background-color:white;
    box-shadow: 0px 5px 20px #555;
   
    a {
     color: #333;
       text-decoration:none;
    }
    
    &:hover {  
      .card-image {
        img {
           width: $image-size+10%;
           filter:grayscale(0);
        }  
      }
    }
    
  }
  
  .card-image {
  
    height: 250px;
    
    position:relative;
    overflow:hidden;
    
    
    img {
      width: $image-size;
      
      position:absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      filter: grayscale(1);
      
      transition-property: filter width;
      transition-duration: .3s; 
    }
   
  }
  
  .card-body {
    text-align:center; 
    padding: 15px 20px; 
    box-sizing: border-box;
  }
  
  .card-date {
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  .card-title, .card-exceprt {
     font-family: 'Playfair Display', serif;
  }
  
  .card-date, .card-title {
    text-align:center;
    text-transform:uppercase;
    font-weight: bold;
  }
  
  .card-date, .card-excerpt {
    color: #777;
  }
</style>


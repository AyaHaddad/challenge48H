<template>
    <div>
        {{ data }}
    </div>
</template>

<script>
export default {
  asyncData() {
    return {data : $http.$get('https://swapi.dev/api/people/')}
    }
    }
</script>
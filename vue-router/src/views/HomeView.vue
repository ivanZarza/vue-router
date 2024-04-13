<script setup>
import data from '../vue-4-router-course-starter-files-main/data.js'
</script>

<template>
  <div class="home"  >
    <RouterLink v-for="country in data" :key="country.id" :to="country.slug" >
    <h1>{{ country.name }}</h1>
    <img :src="country.image" :alt="country.name" />
    
    </RouterLink>
  </div>
</template>

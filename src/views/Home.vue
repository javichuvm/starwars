<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4">
      <div class="card h-100">
        <router-link :to="`/people`">
          <img src="../assets/gente.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">People</h5>
            <p class="card-text">Get people information</p>
          </div>
        </router-link>
      </div>
      </div>
      <div class="col-12 col-md-4">
      <div class="card h-100">
        <router-link :to="`/starships`">
          <img src="../assets/naves.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Starships</h5>
            <p class="card-text">Get starships information</p>
          </div>
        </router-link>
      </div>
      </div>
      <div class="col-12 col-md-4">
      <div class="card h-100">
        <router-link :to="`/planets`">
          <img src="../assets/planetas.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Planets</h5>
            <p class="card-text">Get planets information</p>
          </div>
        </router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { },
});
</script>

<style scoped>
.container{
  margin: auto;
}
</style>

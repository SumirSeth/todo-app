<script setup>
import ActionView from './components/ActionView.vue'
import ListView from './components/ListView.vue'

</script>

<template>
  <div class="main h-dvh flex flex-row flex-wrap justify-center content-center">
    <!-- Main contains list view and action view in a flexbox row container-->
    
    <ActionView class="action"></ActionView>
    <ListView class="list flex justify-center"></ListView>
     
  </div>
</template>

<style scoped>
.list {
  width: calc((70vh + 30vw)/1.7);
  margin: 10px;
}

.action {
  width: calc((70vh + 30vw)/1.7);
  margin: 10px;

}

</style>

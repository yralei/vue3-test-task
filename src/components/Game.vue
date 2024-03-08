<template>
  <div class="ma-10 w-25">
    <v-text-field label="Size X" v-model="sizeX" />
    <v-text-field label="Size Y" v-model="sizeY" />
  </div>
  <div class="d-flex justify-center">
    <div class="square-container">
      <div class="d-flex" v-for="row in +sizeY" :key="row">
        <div v-for="col in +sizeX" :key="col">
          <div class="square-item" :class="[(row + col) % 2 === 0 ? 'square-item-even' : 'square-item-odd']"
            @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sizeX = ref(0);
const sizeY = ref(0);

const handleMouseEnter = (event) => {
  event.target.classList.add('square-item-hovered');
}

const handleMouseLeave = (event) => {
  event.target.classList.remove('square-item-hovered');
}
</script>

<style scoped>
.square-container {
  background-color: grey;
  overflow: scroll;
}

.square-item {
  height: 36px;
  width: 36px;
  margin: 2px;
}

.square-item-odd {
  background-color: white;
}

.square-item-even {
  background-color: black;
}

.square-item-hovered.square-item-odd {
  background-color: black;
}

.square-item-hovered.square-item-even {
  background-color: white;
}
</style>
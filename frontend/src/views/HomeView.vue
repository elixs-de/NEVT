<template>
  <div>
    <br>
    <div class="container">
      <h1>Hello from the Frontend!</h1>
    </div>
    <br>
    <div class="container">
      <h1>{{ backend }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  data() {
    return {
      backend: 'Backend not connected yet!'
    }
  },
  async mounted() {
    const response = await axios.get('/api/hello')
    this.backend = response.data
  },
  methods: {
    
  }
}
</script>
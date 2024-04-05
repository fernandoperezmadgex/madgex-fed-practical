<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get('/api/jobs');
    data.value = response.data;
    console.log('DATA', data.value);
  } catch (error) {
    console.error('There was an error fetching the data:', error);
  }
};

onMounted(fetchData);
</script>

<template>
  <router-view></router-view>
</template>

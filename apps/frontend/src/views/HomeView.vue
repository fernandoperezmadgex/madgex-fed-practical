<script setup>
import MainHeader from '@/components/layout/MainHeader.vue';
import Footer from '@/components/layout/Footer.vue';
import FilterBar from '@/components/FilterBar.vue';

import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);
const taxonomy = ref([]);
const culture = ref('');

const fetchData = async () => {
  try {
    const response = await axios.get('/api/jobs');
    data.value = response.data;

    taxonomy.value = data.value ? data.value.filteredTaxonomy : [];
    culture.value = data.value ? data.value.culture : 'en-GB';
  } catch (error) {
    console.error('There was an error fetching the data:', error);
  }
};

fetchData(); // No need to use onMounted hook in setup
</script>

<template>
  <MainHeader v-if="data" />
  <main role="main" class="mx-auto w-[90%]">
    <FilterBar :taxonomy="taxonomy" v-if="data" />
  </main>
  <Footer />
</template>

<script setup>
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import FilterBar from '@/components/FilterBar.vue';
import JobsList from '@/components/JobsList.vue';
import Banner from '@/components/Banner.vue';

import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);
const taxonomy = ref([]);
const jobs = ref([]);
const jobCount = ref(0);

const fetchData = async () => {
  try {
    const response = await axios.get('/api/jobs');
    data.value = response.data;
    taxonomy.value = data.value.filteredTaxonomy;
    jobs.value = data.value.jobsList;
    jobCount.value = data.value.jobCount;
  } catch (error) {
    console.error('There was an error fetching the data:', error);
  }
};

fetchData(); // No need to use onMounted hook in setup
</script>

<template>
  <MainHeader v-if="data" />
  <main role="main" class="mx-auto w-[90%] max-w-[1400px] md:flex md:gap-8">
    <FilterBar :taxonomy="taxonomy" v-if="data" />
    <JobsList :jobs="jobs" :jobCount="jobCount" />
    <Banner class="mt-0 hidden h-[600px] w-40 self-start lg:block" />
  </main>
  <MainFooter />
</template>

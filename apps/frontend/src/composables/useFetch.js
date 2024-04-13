import { ref } from 'vue';
import axios from 'axios';

export default function useFetch() {
  const data = ref(null);
  const taxonomy = ref([]);
  const jobs = ref([]);
  const jobCount = ref(0);
  const error = ref(null);
  const isLoading = ref(true);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      data.value = response.data;
      taxonomy.value = data.value.filteredTaxonomy;
      jobs.value = data.value.jobsList;
      jobCount.value = data.value.jobCount;
    } catch (error) {
      error.value = error;
      console.error('There was an error fetching the data:', error);
    }

    isLoading.value = false;
  };

  return { data, error, isLoading, taxonomy, jobs, jobCount, fetchData };
}

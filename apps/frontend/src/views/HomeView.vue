<script setup>
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import FilterBar from '@/components/FilterBar.vue';
import JobsList from '@/components/JobsList.vue';
import Banner from '@/components/Banner.vue';

import useFetch from '@/composables/useFetch';

const { data, error, isLoading, jobs, taxonomy, jobCount, fetchData } = useFetch();

fetchData('api/jobs'); // No need to use onMounted hook in setup
</script>

<template>
  <p v-if="isLoading" class="mt-[100px] text-center text-2xl">Loading....</p>
  <p v-else-if="!data" class="mt-[100px] text-center text-2xl">No data available</p>
  <p v-else-if="error" class="mt-[100px] text-center text-2xl">Ups! Something went wrong...</p>
  <div v-else>
    <MainHeader />
    <main role="main" class="mx-auto w-[90%] max-w-[1400px] md:flex md:gap-8">
      <aside>
        <FilterBar :taxonomy="taxonomy" />
      </aside>
      <article>
        <section>
          <JobsList :jobs="jobs" :jobCount="jobCount" />
        </section>
      </article>
      <section role="banner" aria-label="Advertisement">
        <Banner class="mt-0 hidden h-[600px] w-40 self-start lg:block" />
      </section>
    </main>
    <MainFooter />
  </div>
</template>

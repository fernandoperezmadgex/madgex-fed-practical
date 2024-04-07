<script setup>
import { computed } from 'vue';

const props = defineProps({ jobs: { type: Array } });
const maxSummaryLength = 150;

// Compute a truncated summary for each job
const truncatedSummaries = computed(() => {
  return props.jobs.map((job) => {
    if (job.summary.length > maxSummaryLength) {
      return job.summary.slice(0, maxSummaryLength) + '...';
    } else {
      return job.summary;
    }
  });
});
</script>

<template>
  <div class="mt-10 w-[100%] lg:w-[60%]">
    <p class="mb-2 font-bold md:text-xl">Found 105 jobs</p>
    <div class="border-brandColour2 rounded-sm border px-3 pb-3 pt-5" v-for="(job, idx) in props.jobs" :key="idx">
      <h3>
        <a href="#" class="text-brandColour1 font-bold hover:underline">{{ job.title }}</a>
      </h3>
      <div class="flex items-center justify-between gap-3">
        <ul class="list-disc pl-5 text-sm">
          <li>{{ job.recruiter.name }}</li>
          <li>{{ job.locationDescription }}</li>
          <li>{{ job.salaryDescription }}</li>
        </ul>
        <img src="/images/job-logo.jpg" class="border-brandColour2 w-[120px] border" />
      </div>
      <p class="mb-3 mt-3 text-sm">{{ truncatedSummaries[idx] }}</p>
      <button
        class="border-brandColour2 rounded-sm border px-3 py-2 text-sm transition duration-500 hover:bg-[#000] hover:text-[#fff]"
      >
        View details
      </button>
    </div>
  </div>
</template>

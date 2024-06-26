<script setup>
import { computed } from 'vue';

const props = defineProps({ jobs: { type: Array }, jobCount: { type: Number } });
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
  <div class="mt-10 w-[100%]">
    <h2 class="mb-2 text-xl font-bold lg:text-2xl">{{ `Found ${props.jobCount} jobs` }}</h2>
    <div
      class="border-brandColour2 bg-brandColour4 rounded-sm border px-3 pb-3 pt-5"
      v-for="(job, idx) in props.jobs"
      :key="idx"
    >
      <h3>
        <a href="#" class="text-brandColour1 text-lg font-bold hover:underline">{{ job.title }}</a>
      </h3>
      <div class="flex items-center justify-between gap-3">
        <ul class="list-disc pl-5">
          <li>{{ job.recruiter.name }}</li>
          <li>{{ job.locationDescription }}</li>
          <li>{{ job.salaryDescription }}</li>
        </ul>
        <img
          src="/images/job-logo.jpg"
          class="border-brandColour2 w-[120px] border"
          alt="recruiter logo"
          title="recruiter logo"
        />
      </div>
      <p class="mb-3 mt-3 text-sm">{{ truncatedSummaries[idx] }}</p>
      <a
        class="border-brandColour2 inline-block rounded-sm border px-3 py-2 transition duration-500 hover:cursor-pointer hover:bg-[#000] hover:text-[#fff]"
      >
        View details
      </a>
    </div>
  </div>
</template>

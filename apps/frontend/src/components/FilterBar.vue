<script setup>
import { ref } from 'vue';
import FilterBarSection from '@/components/FilterBarSection.vue';

const props = defineProps({ taxonomy: { type: Array } });
const isSectionsShowing = ref(false);

const showSections = () => {
  isSectionsShowing.value = !isSectionsShowing.value;
};

const sections = [
  {
    name: props.taxonomy[1].names[0].value,
    terms: props.taxonomy[1].terms,
    longList: true,
  },
  {
    name: props.taxonomy[5].names[0].value,
    terms: props.taxonomy[5].terms,
  },
  {
    name: props.taxonomy[0].names[0].value,
    terms: props.taxonomy[0].terms,
  },
  {
    name: props.taxonomy[3].names[0].value,
    terms: props.taxonomy[3].terms,
  },
  {
    name: props.taxonomy[4].names[0].value,
    terms: props.taxonomy[4].terms,
  },
];
</script>

<template>
  <nav
    aria-label="Filter Jobs"
    class="border-brandColour2 bg-brandColour4 mx-auto self-start rounded-md border md:mx-0 md:max-w-72"
  >
    <div class="border-brandColour2 flex justify-between gap-5 rounded-tl-md rounded-tr-md border-b p-4">
      <h2 class="text-brandColour1 text-lg">Filter Jobs</h2>
      <button
        :aria-expanded="isSectionsShowing ? 'true' : 'false'"
        type="button"
        @click="showSections"
        role="button"
        class="md:hidden"
      >
        <img src="/images/filter-icon.svg" class="w-5" alt="filter button" aria-label="Opens filter nav" />
      </button>
    </div>

    <ul :class="{ 'hidden md:block': !isSectionsShowing }">
      <li class="border-brandColour2 border-b border-t px-8 pb-2 pt-5" v-for="(section, idx) in sections" :key="idx">
        <FilterBarSection :section="section" />
      </li>
    </ul>
  </nav>
</template>

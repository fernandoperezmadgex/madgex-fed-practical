<script setup>
import { ref } from 'vue';
import FilterBarSection from '@/components/FilterBarSection.vue';

const props = defineProps({ taxonomy: { type: Object } });
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
  <div class="border-brandColour2 mx-auto w-[90%] self-start rounded-md border md:mx-0 md:max-w-72">
    <div class="border-brandColour2 flex justify-between gap-5 rounded-tl-md rounded-tr-md border-b p-4">
      <h2 class="text-brandColour1 text-lg">Filter Jobs</h2>
      <button aria-expanded="true" type="button" @click="showSections" class="md:hidden">
        <img src="/images/filter-icon.svg" class="w-5" />
      </button>
    </div>

    <div :class="{ 'hidden md:block': !isSectionsShowing }">
      <ul class="border-brandColour2 border-b border-t px-8 pb-2 pt-5" v-for="(section, idx) in sections" :key="idx">
        <li>
          <FilterBarSection :section="section" />
        </li>
      </ul>
    </div>
  </div>
</template>

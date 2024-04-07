<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({ section: { type: Object } });
const listLength = ref(11);
const isListShowing = ref(true);
const maximumInitialListLength = 11;
const filterSection = props.section;
const initialListShow = ref(true);
const itemsListNotShowingInitially = ['Salary Band', 'Contract Type'];

const increaseList = (length) => {
  listLength.value = length;
};

const showList = () => {
  if (!initialListShow.value) {
    return (initialListShow.value = true); // We use return because we want only 1 state to be updated
  }
  isListShowing.value = !isListShowing.value;
};

onMounted(() => {
  if (itemsListNotShowingInitially.includes(filterSection.name)) {
    initialListShow.value = false;
  }
});
</script>

<template>
  <h3 class="text-brandColour1 mb-3" @click="showList()">
    <button aria-expanded="true" type="button">
      <span class="flex items-center">
        <img
          :class="{ rotate: isListShowing && initialListShow }"
          src="/images/chevron-right.svg"
          class="mr-3 inline-block w-[8px]"
          alt="chevron icon"
        />{{ filterSection.name }}
      </span>
    </button>
  </h3>
  <ul class="mb-5" :class="{ hidden: !isListShowing || !initialListShow }">
    <li v-for="(term, idx) in filterSection.terms.slice(0, listLength)" :key="idx" class="text-brandColour1 mt-1">
      <a href="#" class="text-brandColour1 hover:underline"
        >{{ term.names[0].value }} <span class="text-sm text-[#6B7280]">{{ `(${term.count})` }}</span></a
      >
    </li>
    <li
      @click="increaseList(filterSection.terms.length)"
      v-if="listLength === maximumInitialListLength && filterSection.terms.length > maximumInitialListLength"
    >
      <button aria-expanded="true" type="button">
        <span class="text-brandColour1 hover:text-underline mt-6 block hover:cursor-pointer">More...</span>
      </button>
    </li>
    <li v-else-if="listLength > maximumInitialListLength" @click="increaseList(maximumInitialListLength)">
      <button aria-expanded="true" type="button">
        <span class="text-brandColour1 hover:text-underline mt-6 block hover:cursor-pointer">Less...</span>
      </button>
    </li>
  </ul>
</template>

<style scoped>
.rotate {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}
</style>

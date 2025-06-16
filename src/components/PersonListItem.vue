<template>
  <v-list-item :title="props.person.name" :prepend-avatar="logo">
  </v-list-item>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Person } from '@/ldo/shapes.typings';
import { robohash } from '@/ldo';

const props = defineProps<{
  person: Person
}>()

const logo = computed(() => props.person.logo?.['@id'] || robohash(props.person['@id']!))
</script>

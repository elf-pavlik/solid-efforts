<template>
  <v-list-item
    :title="props.person.name"
    :prepend-avatar="props.person.image['@id']"
  >
  </v-list-item>
</template>

<script setup lang="ts">
import { Person } from '@/ldo/shapes.typings';

  const props = defineProps<{
    person: Person
  }>()
</script>

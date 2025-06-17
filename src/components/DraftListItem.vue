<template>
  <v-list-item :title="props.draft.name" :prepend-icon="props.icon">
  </v-list-item>
</template>

<script setup lang="ts">

import type { Specification, CreativeWork } from '@/ldo/shapes.typings';

const props = defineProps<{
  draft: Specification | CreativeWork
  icon?: string
}>()

</script>

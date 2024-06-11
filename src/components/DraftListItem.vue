<template>
  <v-list-item
    :title="props.draft.name"
    :prepend-icon="props.icon"
  >
  </v-list-item>
</template>

<script setup lang="ts">

import type { Draft } from '@/ldo/shapes.typings';

const props = defineProps<{
  draft: Draft
  icon?: string
}>()
  
</script>

<template>
  <v-list-item :title="props.app.name" :prepend-icon="ldo.applicationIcon(props.app)">
  </v-list-item>
</template>

<script setup lang="ts">

import type { Software } from '@/ldo/shapes.typings';
import { useLdo } from '@/ldo'

const props = defineProps<{
  app: Software
}>()

const ldo = useLdo()

</script>

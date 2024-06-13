<template>
  <v-responsive
    class="align-centerfill-height mx-auto"
    max-width="1200"
    min-height="100%"
  >
    <page-header></page-header>
    <draft-list-item
      :draft="scope"
      :icon="ldo.scopeIcon(scope)"
    >
    </draft-list-item>

    <h4>Applications</h4>
    <application-table
      :applications="applications"
    ></application-table>
  </v-responsive>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';  
  import { useLdo } from '@/ldo';

  const route = useRoute()
  const ldo = useLdo()

  await ldo.createDataset()
  
  const scope = computed(() => ldo.getScope(route.query.id as string))
  const applications = computed(() => ldo.getApplicationsForScope(route.query.id as string))
</script>

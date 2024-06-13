<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Scopes
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="application of props.applications"
      >
        <td>
          <app-list-item
            :app="application"
            @click="ldo.show(application)"
          >
          </app-list-item>
        </td>
          <v-chip
            v-for="scope of application.accesses"
            :prepend-icon="ldo.scopeIcon(scope)"
            :text="scope.name"
            class="scope-chip"
            @click="ldo.show(scope)"
          ></v-chip>
        <td>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useLdo } from '@/ldo'
  import type { Implementation } from '@/ldo/shapes.typings'

  const props = defineProps<{
    applications: Implementation[]
  }>()

  const ldo = useLdo()

</script>
<style>
  .scope-chip {
    margin-right: 1rem;
  }
</style>

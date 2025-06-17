<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Scope
        </th>
        <th class="text-left">
          Applications
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="scope of props.scopes">
        <td>
          <draft-list-item :draft="scope" :icon="ldo.scopeIcon(scope)" @click="ldo.show(scope)"></draft-list-item>
        </td>
        <td>
          {{ ldo.getApplicationsForScope(scope['@id']!).length }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { useLdo } from '@/ldo'
//import type { Scope } from '@/ldo/shapes.typings'

const props = defineProps<{
  //scopes: Scope[]
  scopes: any[]
}>()

const ldo = useLdo()
await ldo.createDataset()

</script>

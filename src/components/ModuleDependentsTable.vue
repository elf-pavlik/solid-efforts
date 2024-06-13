<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Module
        </th>
        <th class="text-left">
          Dependents
        </th>
        <th
          v-if="product"
          class="text-left"
          width="25%"
        >
          Conformance
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="mod of modules"
      >
        <td>
          <draft-list-item
            :draft="mod"
            :icon="ldo.implementationIcon(mod)"
            @click="ldo.show(mod)"
          >
          </draft-list-item>
        </td>
        <td>
          {{ ldo.getApplicationsForModule(mod['@id']!).length }}
        </td>
        <td v-if="product">
          <v-progress-linear
            :model-value="ldo.getConformance(mod['@id']!, product['@id']!)"
            color="green"
            height="25"
          >
            <template v-slot:default="{ value }">
              <strong>{{ Math.round(value) }}%</strong>
            </template>
        </v-progress-linear>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useLdo } from '@/ldo'
  import type { Implementation, ProductClass } from '@/ldo/shapes.typings'

  defineProps<{
    modules: Implementation[]
    product?: ProductClass
  }>()

  const ldo = useLdo()
  await ldo.createDataset()

</script>

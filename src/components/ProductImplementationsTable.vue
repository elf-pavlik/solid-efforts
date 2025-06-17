<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Product Class
        </th>
        <th class="text-left">
          Impl
        </th>
        <th class="text-left" width="25%">
          Coverage
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product of props.products">
        <td>
          <draft-list-item :draft="product" icon="mdi-star-box-outline" @click="ldo.show(product)">
          </draft-list-item>
        </td>
        <td>
          {{ ldo.getImplementationsForProduct(product['@id']!).length }}
        </td>
        <td>
          <v-progress-linear :model-value="ldo.getCoverage(product['@id']!)" color="green" height="25">
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
import type { ClassOfProduct } from '@/ldo/shapes.typings'

const props = defineProps<{
  products: ClassOfProduct[]
}>()

const ldo = useLdo()
await ldo.createDataset()

</script>

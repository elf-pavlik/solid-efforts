<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Maintainer
        </th>
        <th class="text-left">
          Contributor
        </th>
        <th class="text-left">
          Application
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="implementation of props.implementations"
      >
        <td>
          {{ ldo.isMaintainer(implementation, person) ? '✅' : '' }}
        </td>
        <td>
          {{ ldo.isContributor(implementation, person) ? '✅' : '' }}
        </td>
        <td>
          <draft-list-item
            :draft="implementation"
            :icon="ldo.implementationIcon(implementation)"
            @click="ldo.show(implementation)"
          >
          </draft-list-item>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useLdo } from '@/ldo'
  import type { Person, Implementation } from '@/ldo/shapes.typings'

  const props = defineProps<{
    person: Person
    implementations: Implementation[]
  }>()

  const ldo = useLdo()

</script>

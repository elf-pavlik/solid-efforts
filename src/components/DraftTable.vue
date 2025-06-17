<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Editor
        </th>
        <th class="text-left">
          Author
        </th>
        <th class="text-left">
          Draft
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="draft of props.drafts">
        <td>
          {{ ldo.isEditor(draft, person) ? '✅' : '' }}
        </td>
        <td>
          {{ ldo.isAuthor(draft, person) ? '✅' : '' }}
        </td>
        <td>
          <draft-list-item :draft="draft" :icon="ldo.draftIcon(draft)" @click="ldo.show(draft)">
          </draft-list-item>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { useLdo } from '@/ldo'
import type { Person, Specification, CreativeWork } from '@/ldo/shapes.typings'

const props = defineProps<{
  person: Person
  drafts: (Specification | CreativeWork)[]
}>()

const ldo = useLdo()

</script>

<template>
  <v-overlay
    v-model="editor"
    class="align-center justify-center"
  >
    <v-card
      v-if="resource"
      title="Editors"
    >
      <v-autocomplete
        :modelValue="editorSelected"
        @update:modelValue="updateSelected"
        :items="editorOptions"
        color="blue-grey-lighten-2"
        item-title="name"
        item-value="@id"
        label="Select"
        chips
        closable-chips
        multiple
        clear-on-select
      >
        <template v-slot:chip="{ props, item }">
          <v-chip
            v-bind="props"
            :text="item.raw.name"
          ></v-chip>
        </template>

        <template v-slot:item="{ props, item }">
          <v-list-item
            v-bind="props"
            :title="item.raw.name"
          ></v-list-item>
        </template>
      </v-autocomplete>
    </v-card>
  </v-overlay>
</template>
<script setup lang="ts">
import { watch, ref, shallowRef, triggerRef } from 'vue';
import { useLdo } from '@/ldo';

const { editor, resource, editorProperty, editorOptions, editorSelected } = useLdo()

watch([resource, editorProperty], () => {
  //console.log('editorProperty', editorProperty.value)
  if (!resource.value || !editorProperty.value) return
  editorSelected.value = [...resource.value[editorProperty.value]]
  triggerRef(editorSelected)
  //console.log('draft', draft.value)
  //if (draft.value?.editor) console.log('draft.editor', [...draft.value.editor].map(o => o['@id']))
}, { immediate: true })

watch(editorSelected, () => {
  //console.log('editorSelected', editorSelected.value)
}, { immediate: true })

function updateSelected(val: any) {
  //console.log('updated', val)
  resource.value[editorProperty.value].clear()
  for(const id of val) {
    resource.value[editorProperty.value].add({ '@id': id })
  }
  triggerRef(resource)
}
</script>

<template>
  <v-overlay
    v-model="editor"
    class="align-center justify-center"
    @afterLeave="saveFile()"
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
        min-width="30rem"
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
      <v-card-actions>
        <v-btn color="secondary" @click="editor = false">✅</v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>
<script setup lang="ts">
import { watch, triggerRef } from 'vue';
import { useLdo } from '@/ldo';

const { editor, resource, editorProperty, editorOptions, editorSelected, saveFile } = useLdo()

watch([resource, editorProperty], () => {
  if (!resource.value || !editorProperty.value) return
  editorSelected.value = [...resource.value[editorProperty.value]]
  triggerRef(editorSelected)
}, { immediate: true })

function updateSelected(val: any) {
  resource.value[editorProperty.value].clear()
  for(const id of val) {
    resource.value[editorProperty.value].add({ '@id': id })
  }
  triggerRef(resource)
}
</script>

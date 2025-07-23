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
        <v-btn @click="editor = false">✅</v-btn>
        <v-btn @click="add = true">➕</v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      v-if="add"
      title="Add"
    >
      <v-text-field
        label="name"
        v-model="name"
        :rules="[required]"
      ></v-text-field>
      <v-card-actions>
        <v-btn @click="doAdd()" :disabled="!name">✅</v-btn>
        <v-btn @click="resetAdd()">❌</v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>
<script setup lang="ts">
import { ref, watch, triggerRef } from 'vue';
import { useLdo } from '@/ldo';

const { editor, resource, editorProperty, editorOptions, editorSelected, addResource, saveFile } = useLdo()

const add = ref(false)
const name = ref('')

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

function doAdd() {
  const added = addResource(name.value)
  resource.value[editorProperty.value].add(added)
  triggerRef(resource)
  resetAdd()
}

function resetAdd() {
  name.value = ''
  add.value = false
}

const required = (value: string) => !!value || 'name is required'
</script>

<template>
  <v-responsive class="align-centerfill-height mx-auto" max-width="1200" min-height="100%">
    <page-header></page-header>
    <draft-list-item :draft="resource" icon="mdi-newspaper-variant" @click="ldo.show(resource)">
    </draft-list-item>

    <section v-if="resource.description">
      {{ resource.description }}
    </section>

    <section>
      <h4>References</h4>
      <v-list>
        <draft-list-item v-for="specification of resource.about" :draft="specification"
          :icon="ldo.draftIcon(specification as unknown as Specification)"
          @click="ldo.show(specification as unknown as LdoBase)"></draft-list-item>
      </v-list>
    </section>

    <section>
      <h4>Authors</h4>
      <v-btn v-if="editMode" color="primary" @click="openEditor('author', 'Authors')">🔗</v-btn>
      <v-list>
        <person-list-item v-for="person of resource.author" :person="person" @click="ldo.show(person)"></person-list-item>
      </v-list>
    </section>
  </v-responsive>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLdo } from '@/ldo';
import { LdoBase } from '@ldo/ldo';
import { Specification } from '@/ldo/shapes.typings';

const route = useRoute()
const ldo = useLdo()
await ldo.createDataset()
const { editMode, resource, openEditor } = ldo

watch(route, () => {
  resource.value = ldo.getPaper(route.query.id as string)
}, { immediate: true })
</script>

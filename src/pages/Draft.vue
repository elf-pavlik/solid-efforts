<template>
  <v-responsive class="align-centerfill-height mx-auto" max-width="1200" min-height="100%">
    <page-header></page-header>
    <draft-list-item :draft="resource" :icon="ldo.draftIcon(resource)" @click="ldo.show(resource)">
    </draft-list-item>

    <section v-if="(resource as Specification).definesConformanceFor!.size">
      <product-implementations-table
        :products="[...(resource as Specification).definesConformanceFor]"></product-implementations-table>
    </section>

    <section v-if="(resource as CreativeWork).about!.size">
      <h4>Explains</h4>
      <v-list>
        <draft-list-item v-for="specification of (resource as CreativeWork).about" :draft="specification"
          :icon="ldo.draftIcon(specification as unknown as Specification)"
          @click="ldo.show(specification)"></draft-list-item>
      </v-list>
    </section>

    <section v-if="primers.length">
      <h4>Explained by</h4>
      <v-list>
        <draft-list-item v-for="primer of primers" :draft="primer" :icon="ldo.draftIcon(primer)"
          @click="ldo.show(primer)"></draft-list-item>

      </v-list>
    </section>

    <section v-if="papers.length">
      <h4>Papers</h4>
      <v-list>
        <draft-list-item v-for="paper of papers" :draft="paper" icon="mdi-newspaper-variant"
          @click="ldo.show(paper)"></draft-list-item>

      </v-list>
    </section>

    <section>
      <h4>Editors</h4>
      <v-btn v-if="editMode" color="primary" @click="openEditor('editor', 'Editors')">🔗</v-btn>
      <person-list-item v-for="person of resource.editor" :person="person" @click="ldo.show(person)"></person-list-item>
    </section>

    <section>
      <h4>Authors</h4>
      <v-btn v-if="editMode" color="primary" @click="openEditor('author', 'Authors')">🔗</v-btn>
      <person-list-item v-for="person of resource.author" :person="person" @click="ldo.show(person)"></person-list-item>
    </section>
  </v-responsive>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLdo } from '@/ldo';
import { CreativeWork, Specification } from '@/ldo/shapes.typings';

const route = useRoute()
const ldo = useLdo()
await ldo.createDataset()
const { editMode, resource, openEditor } = ldo


watch(route, () => {
  resource.value = ldo.getDraft(route.query.id as string)
}, { immediate: true })

const primers = computed(() => ldo.getPrimersForSpecification(route.query.id as string))
const papers = computed(() => ldo.getPapersForDraft(route.query.id as string))
</script>

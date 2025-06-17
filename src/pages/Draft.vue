<template>
  <v-responsive class="align-centerfill-height mx-auto" max-width="1200" min-height="100%">
    <page-header></page-header>
    <draft-list-item :draft="draft" :icon="ldo.draftIcon(draft)" @click="ldo.show(draft)">
    </draft-list-item>

    <section v-if="(draft as Specification).definesConformanceFor!.length">
      <product-implementations-table
        :products="(draft as Specification).definesConformanceFor"></product-implementations-table>
    </section>

    <section v-if="(draft as CreativeWork).about">
      <h4>Explains</h4>
      <draft-list-item :draft="(draft as CreativeWork).about as Specification"
        :icon="ldo.draftIcon((draft as CreativeWork).about as Specification)"
        @click="ldo.show((draft as CreativeWork).about!)"></draft-list-item>
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
      <person-list-item v-for="person of draft.editor" :person="person" @click="ldo.show(person)"></person-list-item>
    </section>

    <section>
      <h4>Authors</h4>
      <person-list-item v-for="person of draft.author" :person="person" @click="ldo.show(person)"></person-list-item>
    </section>
  </v-responsive>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLdo } from '@/ldo';
import { CreativeWork, Specification } from '@/ldo/shapes.typings';

const route = useRoute()
const ldo = useLdo()

await ldo.createDataset()

const draft = computed(() => ldo.getDraft(route.query.id as string))
const primers = computed(() => ldo.getPrimersForSpecification(route.query.id as string))
const papers = computed(() => ldo.getPapersForDraft(route.query.id as string))
</script>

<template>
  <v-responsive class="align-centerfill-height mx-auto" max-width="1200" min-height="100%">
    <page-header></page-header>
    <draft-list-item :draft="paper" icon="mdi-newspaper-variant" @click="ldo.show(paper)">
    </draft-list-item>

    <section v-if="paper.description">
      {{ paper.description }}
    </section>

    <section v-if="paper.about">
      <h4>References</h4>
      <v-list v-if="(paper.about as unknown as []).length">
        <draft-list-item v-for="specification of paper.about" :draft="specification"
          :icon="ldo.draftIcon(specification as unknown as Specification)"
          @click="ldo.show(specification as unknown as LdoBase)"></draft-list-item>
      </v-list>
      <v-list v-else>
        <draft-list-item :draft="paper.about" :icon="ldo.draftIcon(paper.about as unknown as Specification)"
          @click="ldo.show(paper.about as unknown as LdoBase)"></draft-list-item>
      </v-list>
    </section>

    <section>
      <h4>Authors</h4>
      <person-list-item v-for="person of paper.author" :person="person" @click="ldo.show(person)"></person-list-item>
    </section>
  </v-responsive>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useLdo } from '@/ldo';
import { LdoBase } from '@ldo/ldo';
import { Specification } from '@/ldo/shapes.typings';

const route = useRoute()
const ldo = useLdo()

await ldo.createDataset()

const paper = computed(() => ldo.getPaper(route.query.id as string))
</script>

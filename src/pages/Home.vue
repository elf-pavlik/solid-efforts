<template>
  <v-responsive class="align-centerfill-height mx-auto" max-width="1200" min-height="100%">
    <page-header></page-header>
    <div class="d-flex flex-row">
      <v-tabs v-model="tab" direction="vertical">
        <v-tab prepend-icon="mdi-account" text="People" value="people">
          <template #append>
            <v-badge inline :content="people.length"></v-badge>
          </template>
        </v-tab>
        <v-tab prepend-icon="mdi-text-box" text="Drafts" value="drafts">
          <template #append>
            <v-badge inline :content="drafts.length"></v-badge>
          </template>
        </v-tab>
        <v-tab prepend-icon="mdi-star-box" text="Products" value="products">
          <template #append>
            <v-badge inline :content="products.length"></v-badge>
          </template>
        </v-tab>
        <v-tab prepend-icon="mdi-cellphone" text="Apps" value="apps">
          <template #append>
            <v-badge inline :content="applications.length"></v-badge>
          </template>
        </v-tab>
        <v-tab prepend-icon="mdi-package" text="Modules" value="modules">
          <template #append>
            <v-badge inline :content="modules.length"></v-badge>
          </template>
        </v-tab>
        <v-tab prepend-icon="mdi-server" text="Services" value="services">
          <template #append>
            <v-badge inline :content="services.length"></v-badge>
          </template>
        </v-tab>
        <v-tab prepend-icon="mdi-newspaper-variant" text="Papers" value="papers">
          <template #append>
            <v-badge inline :content="papers.length"></v-badge>
          </template>
        </v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab" class="flex-grow-1">
        <v-tabs-window-item value="people">
          <v-list>
            <person-list-item v-for="person of people" :person="person" @click="ldo.show(person)">
            </person-list-item>
          </v-list>
        </v-tabs-window-item>
        <v-tabs-window-item value="drafts">
          <v-list>
            <draft-list-item v-for="draft of drafts" :draft="draft" :icon="ldo.draftIcon(draft)"
              @click="ldo.show(draft)">
            </draft-list-item>
          </v-list>
        </v-tabs-window-item>
        <v-tabs-window-item value="products">
          <product-implementations-table :products="products">
          </product-implementations-table>
        </v-tabs-window-item>
        <v-tabs-window-item value="apps">
          <application-table :applications="applications"></application-table>
        </v-tabs-window-item>
        <v-tabs-window-item value="modules">
          <module-dependents-table v-if="modules.length" :modules="modules"></module-dependents-table>
        </v-tabs-window-item>
        <v-tabs-window-item value="services">
          <draft-list-item v-for="service of services" :draft="service" :icon="ldo.implementationIcon(service)"
            @click="ldo.show(service)">
          </draft-list-item>
        </v-tabs-window-item>
        <v-tabs-window-item value="papers">
          <draft-list-item v-for="paper of papers" :draft="paper" icon="mdi-newspaper-variant" @click="ldo.show(paper)">
          </draft-list-item>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </v-responsive>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PersonListItem from '@/components/PersonListItem.vue'
import { useLdo } from '@/ldo'
const router = useRouter()
const route = useRoute()
const ldo = useLdo()

await ldo.createDataset()

const defaultTab = 'people'
const tab = ref(route.query.tab as string || defaultTab)
watch(tab, (value) => {
  if (!value || value === route.query.tab) return
  router.push({ query: { tab: value } })
})
watch(
  () => route.query.tab,
  (value) => tab.value = value as string || defaultTab
)

const people = ldo.getPeople(true)
const drafts = ldo.getDrafts()
const applications = ldo.getApplications()
const products = ldo.getProductClasses()
const modules = ldo.getModules()
const services = ldo.getServices()
const papers = ldo.getPapers()
</script>

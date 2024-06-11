<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="1200"
      min-height="100%"
    >
      <page-header></page-header>
      <v-tabs
        v-model="tab"
      >
        <v-tab
          prepend-icon="mdi-account"
          text="People"
          value="people"
        >
          <template #append>
            <v-badge
              inline
              :content="people.length"
            ></v-badge>
          </template>
        </v-tab>
        <v-tab
          prepend-icon="mdi-text-box"
          text="Drafts"
          value="drafts"
        >
          <template #append>
            <v-badge
              inline
              :content="drafts.length"
            ></v-badge>
          </template>
        </v-tab>
        <v-tab
          prepend-icon="mdi-star-box"
          text="Products"
          value="products"
        >
          <template #append>
            <v-badge
              inline
              :content="products.length"
            ></v-badge>
          </template>
        </v-tab>
        <v-tab
          prepend-icon="mdi-cellphone"
          text="Apps"
          value="apps"
        >
          <template #append>
            <v-badge
              inline
              :content="applications.length"
            ></v-badge>
          </template>
        </v-tab>
        <v-tab
          prepend-icon="mdi-package"
          text="Modules"
          value="modules"
        >
          <template #append>
            <v-badge
              inline
              :content="modules.length"
            ></v-badge>
          </template>
        </v-tab>
        <v-tab
          prepend-icon="mdi-server"
          text="Services"
          value="services"
        >
          <template #append>
            <v-badge
              inline
              :content="services.length"
            ></v-badge>
          </template>
        </v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="people">
          <v-list>
           <person-list-item
              v-for="person of people"
              :person="person"
              @click="ldo.show(person)"
            >
            </person-list-item>
          </v-list>
        </v-tabs-window-item>
        <v-tabs-window-item value="drafts">
          <v-list>
            <draft-list-item
              v-for="draft of drafts"
              :draft="draft"
              :icon="ldo.draftIcon(draft)"
              @click="ldo.show(draft)"
            >
            </draft-list-item>
          </v-list>
        </v-tabs-window-item>
        <v-tabs-window-item value="products">
          <product-implementations-table
            :products="products"
          >
          </product-implementations-table>
        </v-tabs-window-item>
        <v-tabs-window-item value="apps">
            <draft-list-item
              v-for="application of applications"
              :draft="application"
              :icon="ldo.applicationIcon(application)"
              @click="ldo.show(application)"
            >
            </draft-list-item>
        </v-tabs-window-item>
        <v-tabs-window-item value="modules">
            <draft-list-item
              v-for="mod of modules"
              :draft="mod"
              :icon="ldo.implementationIcon(mod)"
              @click="ldo.show(mod)"
            >
            </draft-list-item>
        </v-tabs-window-item>
        <v-tabs-window-item value="services">
            <draft-list-item
              v-for="service of services"
              :draft="service"
              :icon="ldo.implementationIcon(service)"
              @click="ldo.show(service)"
            >
            </draft-list-item>
        </v-tabs-window-item>
      </v-tabs-window>

    </v-responsive>
  </v-container>
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

  const people = ldo.getPeople()
  const drafts = ldo.getDrafts()
  const applications = ldo.getApplications()
  const products = ldo.getProductClasses()
  const modules = ldo.getModules()
  const services = ldo.getServices()
</script>

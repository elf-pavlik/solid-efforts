
<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="1200"
      min-height="100%"
    >
      <page-header></page-header>
      <person-list-item
        :person="person"
      >
      </person-list-item>

      <v-tabs
        v-model="tab"
      >
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
        <v-tabs-window-item value="drafts">
          <draft-table
            :person="person"
            :drafts="drafts"
          ></draft-table>
        </v-tabs-window-item>
        <v-tabs-window-item value="apps">
          <implementation-table
            :person="person"
            :implementations="applications"
          ></implementation-table>
        </v-tabs-window-item>
        <v-tabs-window-item value="modules">
          <implementation-table
            :person="person"
            :implementations="modules"
          ></implementation-table>
        </v-tabs-window-item>
        <v-tabs-window-item value="services">
          <implementation-table
            :person="person"
            :implementations="services"
          ></implementation-table>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';  
  import { useLdo } from '@/ldo';

  import PersonListItem from '@/components/PersonListItem.vue'
  import ImplementationTable from '@/components/ImplementationTable.vue'

  const route = useRoute()

  const ldo = useLdo()
  await ldo.createDataset()

  const tab = ref('people')

  const person = ldo.getPerson(route.query.id as string)
  const drafts = ldo.getDraftsForPerson(route.query.id as string)
  const applications = ldo.getApplicationsForPerson(route.query.id as string)
  const modules = ldo.getModulesForPerson(route.query.id as string)
  const services = ldo.getServicesForPerson(route.query.id as string)
</script>

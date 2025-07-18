<template>
  <v-responsive class="align-centerfill-height mx-auto" max-width="980" min-height="100%">
    <page-header></page-header>
    <draft-list-item :draft="resource" :icon="ldo.implementationTypeIcon(resource)" @click="ldo.show(resource)">
    </draft-list-item>

    <section v-if="resource.conformsTo!.size">
      <h4>Implements</h4>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Product Class
            </th>
            <th class="text-left" width="25%">
              Conformance
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product of resource.conformsTo">
            <td>
              <draft-list-item :draft="product" icon="mdi-star-box-outline"
                @click="ldo.show(product)"></draft-list-item>
            </td>
            <td>
              <v-progress-linear :model-value="ldo.getConformance(resource['@id']!, product['@id']!)"
                :buffer-value="ldo.getCoverage(product['@id']!)" color="green" height="25">
                <template v-slot:default="{ value }">
                  <strong>{{ Math.round(value) }}%</strong>
                </template>
              </v-progress-linear>
            </td>
          </tr>
        </tbody>
      </v-table>
    </section>
    <section v-if="resource.hasDependencyOn!.size">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Dependency
            </th>
            <th class="text-left">
              Product Class
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dependency of resource.hasDependencyOn as LdSet<Software>">
            <td>
              <draft-list-item :draft="dependency" :icon="ldo.implementationIcon(dependency)"
                @click="ldo.show(dependency)">
              </draft-list-item>
            </td>
            <draft-list-item v-for="product of dependency.conformsTo" :draft="product" icon="mdi-star-box-outline"
              @click="ldo.show(product)">
            </draft-list-item>
          </tr>
        </tbody>
      </v-table>
    </section>
    <section v-if="applications.length">
      <h4>
        Dependents
        <v-badge inline :content="applications.length"></v-badge>
      </h4>
      <draft-list-item v-for="application of applications" :draft="application"
        :icon="ldo.implementationTypeIcon(application)" @click="ldo.show(application)">
      </draft-list-item>
    </section>
    <section>
    <h4>Maintainers</h4>
      <v-btn v-if="editMode" color="primary" @click="openEditor('maintainer', 'Maintainers')">🔗</v-btn>
      <person-list-item v-for="person of resource.maintainer" :person="person" @click="ldo.show(person)">
      </person-list-item>
    </section>
    <section>
    <h4>Contributors</h4>
      <v-btn v-if="editMode" color="primary" @click="openEditor('developer', 'Contributors')">🔗</v-btn>
      <person-list-item v-for="person of resource.developer" :person="person" @click="ldo.show(person)">
      </person-list-item>
    </section>

  </v-responsive>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useLdo } from '@/ldo';
import type { LdSet } from '@ldo/jsonld-dataset-proxy';
import { Software } from '@/ldo/shapes.typings';

const route = useRoute()
const ldo = useLdo()
await ldo.createDataset()
const { editMode, resource, openEditor } = ldo


watch(route, () => {
  resource.value = ldo.getImplementation(route.query.id as string)
}, { immediate: true })

const applications = computed(() => ldo.getApplicationsForModule(route.query.id as string))

</script>

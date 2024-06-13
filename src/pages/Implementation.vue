
<template>
  <v-responsive
    class="align-centerfill-height mx-auto"
    max-width="980"
    min-height="100%"
  >
    <page-header></page-header>
    <draft-list-item
      :draft="impl"
      :icon="ldo.implementationTypeIcon(impl)"
      @click="ldo.show(impl)"
    >
    </draft-list-item>

    <section v-if="impl.implements!.length">
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
          <tr
            v-for="product of impl.implements"
          >
            <td>
              <draft-list-item
                :draft="product"
                icon="mdi-star-box-outline"
                @click="ldo.show(product)"
              ></draft-list-item>
            </td>
            <td>
              <v-progress-linear
                :model-value="ldo.getConformance(impl['@id']!, product['@id']!)"
                :buffer-value="ldo.getCoverage(product['@id']!)"
                color="green"
                height="25"
              >
                <template v-slot:default="{ value }">
                  <strong>{{ Math.round(value) }}%</strong>
                </template>
            </v-progress-linear>
            </td>
          </tr>
        </tbody>
      </v-table>
    </section>
    <section v-if="impl.dependency!.length">
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
          <tr
            v-for="dependency of impl.dependency"
          >
            <td>
              <draft-list-item
                :draft="dependency"
                :icon="ldo.implementationIcon(dependency)"
                @click="ldo.show(dependency)"
              >
              </draft-list-item>
            </td>
              <draft-list-item
                v-for="product of dependency.implements"
                :draft="product"
                icon="mdi-star-box-outline"
                @click="ldo.show(product)"
              >
              </draft-list-item>
          </tr>
        </tbody>
      </v-table>
    </section>
    <section v-if="applications.length">
      <h4>
        Dependents
        <v-badge
          inline
          :content="applications.length"
        ></v-badge>
      </h4>
      <draft-list-item
        v-for="application of applications"
        :draft="application"
        :icon="ldo.implementationTypeIcon(application)"
        @click="ldo.show(application)"
      >
      </draft-list-item>
    </section>
    <h4>Maintainers</h4>
    <person-list-item
      v-for="person of impl.maintainer"
      :person="person"
      @click="ldo.show(person)"
    >
    </person-list-item>
    <h4>Contributors</h4>
    <person-list-item
      v-for="person of impl.contributor"
      :person="person"
      @click="ldo.show(person)"
    >
    </person-list-item>

  </v-responsive>
</template>

<script setup lang="ts">
  import { computed } from 'vue';  
  import { useRoute } from 'vue-router';  
  import { useLdo } from '@/ldo';

  const route = useRoute()
  const ldo = useLdo()

  await ldo.createDataset()
  
  const impl = computed(() => ldo.getImplementation(route.query.id as string))
  const applications = computed(() => ldo.getApplicationsForModule(route.query.id as string))
  
</script>

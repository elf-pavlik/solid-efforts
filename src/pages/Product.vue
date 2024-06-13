
<template>
  <v-responsive
    class="align-centerfill-height mx-auto"
    max-width="1200"
    min-height="100%"
  >
    <page-header></page-header>
    <draft-list-item
      :draft="product"
      icon="mdi-star-box-outline"
      @click="ldo.show(product)"
    >
    </draft-list-item>

    <h4>Specification</h4>
    <draft-list-item
      :draft="spec"
      :icon="ldo.draftIcon(spec)"
      @click="ldo.show(spec)"
    >
    </draft-list-item>

    <h4>Implementations</h4>
    <draft-list-item
      v-for="impl of implementations"
      :draft="impl"
      :icon="ldo.implementationTypeIcon(impl)"
      @click="ldo.show(impl)"
    >
    </draft-list-item>
    <module-dependents-table
      v-if="modules.length"
      :product="product"
      :modules="modules"
    >
    </module-dependents-table>

  </v-responsive>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';  
  import { useLdo } from '@/ldo';

  const route = useRoute()
  const ldo = useLdo()

  await ldo.createDataset()
  
  const product = ldo.getImplementation(route.query.id as string)
  const spec = ldo.getSpecificationForProduct(route.query.id as string)
  const implementations = ldo.getNonModulesForProduct(route.query.id as string)
  const modules = ldo.getModulesForProduct(route.query.id as string)
</script>

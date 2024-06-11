<template
>
  <header
    @click="goHome()"
    style="cursor: pointer"
  >
    <v-img
      class="mb-4"
      height="150"
      src="@/assets/solid-emblem.svg"
    />

    <div class="text-center">
      <h1 class="text-h2 font-weight-bold">Solid Efforts</h1>
    </div>
  </header>
  <div class="py-4" />
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  const router = useRouter()

  function goHome(): void {
    router.push({ name: 'home' })
  }
</script>

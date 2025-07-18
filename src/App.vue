<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <Editor></Editor>
  </v-app>
</template>

<script lang="ts" setup>
  import Editor from '@/components/Editor.vue'
</script>

<style>
  h4, .v-table {
    margin-top: 2rem;
  }
</style>

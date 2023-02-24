<script setup lang="ts">
import { NuxtApp } from "#app";

const props = defineProps<{ error: NuxtApp["payload"]["error"] }>();
const handleError = () => clearError({redirect: '/login'})
const isDev = process.dev;
</script>

<template>
  <p>An error has occurred. Please try logging in again.</p>
  <p>エラーが発生しました。もう一度ログインしてください</p>
  <v-btn variant="text" @click="handleError">login</v-btn>
  <div v-if="isDev">
    {{ error }}
  </div>
</template>
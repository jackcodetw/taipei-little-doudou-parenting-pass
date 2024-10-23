<script setup lang="ts">
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        Hello World
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

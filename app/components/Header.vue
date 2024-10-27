<script setup lang="ts">
const timestamp = useTimestamp({ offset: 0 })

const date = computed(() => convertToYYYYMM(timestamp.value))
</script>

<template>
  <header flex="~ items-center justify-between" px-4 pb-8 pt-6>
    <div />

    <!-- 日期 -->
    <p class="text-[#001133]" text-lg font-bold>
      {{ date }}
    </p>

    <!-- 日曆 -->
    <div i-mdi-calendar color-base />
  </header>
</template>

<script setup lang="ts">
// import IconDiary from './icons/IconDiary.vue'
// import IconHome from './icons/IconHome.vue'
// import IconSetting from './icons/IconSetting.vue'

const route = useRoute()

const navs = [
  {
    name: '首頁',
    path: '/',
    icon: 'i-mdi-home',
    activeList: ['/'],
  },
  {
    name: '育兒日誌',
    path: '/diary',
    icon: 'i-mdi-notebook',
    activeList: ['/diary/', '/diary/all', '/diary/prenatal/[id]', '/diary/ultrasound/[id]', '/sub/'],
  },
  {
    name: '設定',
    path: '/setting',
    icon: 'i-mdi-cog',
    activeList: ['/setting'],
  },
]
</script>

<template>
  <footer
    v-if="route.path as string !== '/metal'"
    position="absolute bottom-0 left-0 right-0"
    flex="~ justify-center items-start"
    h-26.25
    bg-white
    p="x-5 t-6"
    color-base
    font-sans
    border="t [#333333] op-20"
  >
    <template v-for="nav in navs" :key="nav.path">
      <NuxtLink v-slot="{ navigate }" custom :to="nav.path">
        <div flex-1 flex="~ col justify-start items-center" gap-y-1.5 @click="navigate">
          <span h-a w-6.25 color-base transition-colors :class="[nav.icon, nav.activeList?.includes(route.name) ? 'fill-primary op-100' : 'op-20']" />
          <p text-xs transition-colors :class="nav.activeList?.includes(route.name) ? 'color-primary' : 'color-base text-op-20'">
            {{ nav.name }}
          </p>
        </div>
      </NuxtLink>
    </template>
  </footer>
</template>

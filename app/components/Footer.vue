<script setup lang="ts">
// import IconDiary from './icons/IconDiary.vue'
// import IconHome from './icons/IconHome.vue'
// import IconSetting from './icons/IconSetting.vue'

const route = useRoute()

const navs = [
  {
    name: '首頁',
    path: '/',
    icon: '',
    activeList: ['/'],
  },
  {
    name: '育兒日誌',
    path: '/diary',
    // icon: IconDiary,
    activeList: ['/diary/', '/diary/all', '/diary/prenatal/[id]', '/diary/ultrasound/[id]', '/sub/'],
  },
  {
    name: '設定',
    path: '/setting',
    // icon: IconSetting,
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
          <!-- <component :is="nav.icon" h-a w-6.25 transition="colors duration-150" :class="nav.activeList?.includes(route.name) ? 'fill-primary op-100' : 'op-20'" /> -->
          <!-- <svg width="25" height="25" viewBox="0 0 25 25" fill="#5B6B86" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.47344 3.80208C5.55 3.80208 4.79896 4.53906 4.79896 5.44584V19.4802C4.79896 20.3865 5.55 21.124 6.47344 21.124H19.5729C20.4964 21.124 21.2474 20.3865 21.2474 19.4802V5.44584C21.2474 4.53959 20.4964 3.80156 19.5729 3.80156L6.47344 3.80208ZM6.47344 2.15781H19.5729C21.4219 2.15781 22.9214 3.62969 22.9214 5.44584V19.4802C22.9214 21.2958 21.4224 22.7677 19.5729 22.7677H6.47396C4.62448 22.7677 3.125 21.2958 3.125 19.4802V5.44584C3.125 3.62969 4.62396 2.15781 6.47344 2.15781Z" fill="inherit" />
            <path
              d="M8.273 9.42865H17.9829C18.1214 9.42865 18.2339 9.54063 18.2339 9.67969V10.8516C18.2339 10.9181 18.2075 10.982 18.1604 11.0291C18.1133 11.0762 18.0495 11.1026 17.9829 11.1026H8.273C8.20642 11.1026 8.14256 11.0762 8.09549 11.0291C8.04841 10.982 8.02196 10.9181 8.02196 10.8516V9.67969C8.02196 9.54063 8.13446 9.42865 8.273 9.42865ZM8.273 13.9542H17.9829C18.1214 13.9542 18.2339 14.0661 18.2339 14.2052V15.3771C18.2339 15.4437 18.2075 15.5075 18.1604 15.5546C18.1133 15.6017 18.0495 15.6281 17.9829 15.6281H8.273C8.20642 15.6281 8.14256 15.6017 8.09549 15.5546C8.04841 15.5075 8.02196 15.4437 8.02196 15.3771V14.2052C8.02196 14.0661 8.13446 13.9542 8.273 13.9542ZM2.24592 7.01719H5.97092C6.10998 7.01719 6.22196 7.12969 6.22196 7.26823V8.44011C6.22203 8.47312 6.21558 8.50582 6.203 8.53633C6.19041 8.56685 6.17193 8.59459 6.14861 8.61796C6.12529 8.64132 6.0976 8.65986 6.06711 8.67251C6.03661 8.68516 6.00393 8.69167 5.97092 8.69167H2.24592C2.2129 8.69167 2.18022 8.68516 2.14973 8.67251C2.11923 8.65986 2.09154 8.64132 2.06822 8.61796C2.0449 8.59459 2.02642 8.56685 2.01383 8.53633C2.00125 8.50582 1.99481 8.47312 1.99487 8.44011V7.26823C1.99487 7.12969 2.10737 7.01719 2.24592 7.01719ZM2.24592 16.3089H5.97092C6.10998 16.3089 6.22196 16.4208 6.22196 16.5599V17.7318C6.22196 17.7984 6.19551 17.8622 6.14843 17.9093C6.10135 17.9564 6.0375 17.9828 5.97092 17.9828H2.24592C2.17933 17.9828 2.11548 17.9564 2.0684 17.9093C2.02132 17.8622 1.99487 17.7984 1.99487 17.7318V16.5599C1.99487 16.4208 2.10737 16.3089 2.24592 16.3089Z"
              fill="inherit"
            />
          </svg> -->
          <p text-xs transition="colors duration-150" :class="nav.activeList?.includes(route.name) ? 'color-primary' : 'color-base text-op-20'">
            {{ nav.name }}
          </p>
        </div>
      </NuxtLink>
    </template>
  </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePrenatalStore } from '~/state/prenatal'

defineOptions({
  name: 'IndexPage',
})

const prenatalStore = usePrenatalStore()
const { prenatalDataList } = storeToRefs(prenatalStore)

const nextExaminationDate = computed(() => {
  if (prenatalDataList.value.length === 0 || prenatalDataList.value.length === 14)
    return '--'

  const lastData = prenatalDataList.value[prenatalDataList.value.length - 1]!
  const lastDataDate = new Date(Number(lastData.next_checkup_date))
  const diff = lastDataDate.getTime() - Date.now()
  const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24))
  return daysRemaining
})

function convertToTimeRange(startDate: number, endDate: number) {
  const options = { hour: 'numeric' as const, minute: 'numeric' as const, hour12: true }

  const start = new Date(startDate).toLocaleTimeString('en-US', options)
  const end = new Date(endDate).toLocaleTimeString('en-US', options)

  return `${start} - ${end}`
}
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <Header />

        <section p="x-4 b-36">
          日曆
          <Calender />

          <img src="/home/love.png" alt="love" m="a b-7 t-5.75" block w-50.5>

          <!-- 產檢紀錄 -->
          <div w-full>
            <div flex="~ items-center justify-between" mb-7 w-full>
              <p color-primary font-bold class="text-[18.84px]">
                距離下次產檢還有 {{ nextExaminationDate }} 天
              </p>

              <div flex="~ items-center justify-between" color-base text-op-50>
                <NuxtLink to="/diary/all" class="text-left text-xs">
                  查看所有產檢紀錄
                </NuxtLink>
                <div i-mdi-chevron-right />
              </div>
            </div>

            <div flex="~ items-center" class="scrollbar-hide" gap-5.25 of="x-auto y-hidden">
              <template v-for="prenatal, index in prenatalDataList" :key="prenatal.id">
                <div border="1 [#DEDEDE]" p="t-6 b-7.75" w-67.5 flex-shrink-0 cursor-pointer rounded-3xl>
                  <div pb-7.25 border="b [#DEDEDE] op-70">
                    <div px-8.75 flex="~ justify-between items-center" text-2.5>
                      <p text-base color-primary font-bold class="leading-[1.125]">
                        第{{ convertToChineseNumber(index + 1) }}次產檢
                      </p>

                      <NuxtLink v-slot="{ navigate }" custom :to="`/diary/prenatal/${prenatal.id}`">
                        <p color-base text="op-80 xs" @click="navigate">
                          產檢紀錄資料
                        </p>
                      </NuxtLink>
                    </div>
                  </div>

                  <div flex="~ col items-start justify-center" mt-3 gap-1.5 px-8.75>
                    <p text-xs color-primary font-bold leading-normal>
                      {{ prenatal.examination_clinic }}
                    </p>

                    <p color-base font-bold leading-tight text="base op-80">
                      {{ prenatal.examination_doctor }} 醫生
                    </p>

                    <p color-base leading-none text="xs op-80">
                      {{ convertToYYYYMM(Number(prenatal.examination_start_date)) }}
                    </p>

                    <p color-base leading-none text="xs op-80">
                      {{ convertToTimeRange(Number(prenatal.examination_start_date), Number(prenatal.examination_end_date)) }}
                    </p>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </section>

        <Footer />
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>

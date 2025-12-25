<template>
  <div
    v-show="totalPages > 1"
    class="pagination"
  >
    <div class="pagination--nav">
      <NuxtLink
        v-if="currentPage > 1"
        :class="['pagination--prev', 'pagination__button']"
        :to="{
          path: basePageUrl,
          query: { ...route.query, page: currentPage - 1 },
          hash: route.hash ? route.hash : ''
        }"
        @click="previousPage"
      >
        <
      </NuxtLink>

      <div class="pagination--pages">
        <NuxtLink
          v-for="page in displayedPageChips"
          :key="page"
          :class="[
            'pagination--item',
            { 'active': page === currentPage }
          ]"
          :to="{
            path: basePageUrl,
            query: { ...route.query, page: page === currentPage ? '' : page },
            hash: route.hash ? route.hash : ''
          }"
          @click="changePageTo(page)"
        >
          {{ page }}
        </NuxtLink>
      </div>

      <NuxtLink
        v-if="currentPage < totalPages"
        :class="['pagination--next', 'pagination__button']"
        :to="{
          path: basePageUrl,
          query: { ...route.query, page: currentPage + 1 },
          hash: route.hash ? route.hash : ''
        }"
        @click="nextPage"
      >
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang='ts'>
const router = useRouter()
const route = useRoute()

interface IProps {
  totalItems: number,
  visiblePageChips?: number,
  scrollAnchor?: HTMLElement
}

const props = withDefaults(defineProps<IProps>(), {
  visiblePageChips: 5
})

const postIndeciesToShow = defineModel<{ start: number, end: number }>('postIndeciesToShow')

defineExpose({ refreshPagination })

const basePageUrl = route.path

const postsPerPageDefault = 8
const postsPerPage = ref(postsPerPageDefault)

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / postsPerPageDefault)
})
const currentPage = ref<number>(1)

const startPageChip = computed(() => {
  const chipSection = Math.trunc((currentPage.value - 1) / props.visiblePageChips)

  return 1 + chipSection * props.visiblePageChips
})

const displayedPageChips = computed(() => {
  const chips = []
  const lastPage = Math.min(startPageChip.value + props.visiblePageChips - 1, totalPages.value)

  for (let i = startPageChip.value; i <= lastPage; i++) {
    chips.push(i)
  }
  return chips
})

onBeforeMount(() => {
  if (route.query.page && +route.query.page <= totalPages.value) {
    changePageTo(+route.query.page)
  } else {
    refreshPagination()
  }
})

watch(totalPages, (totalPagesVal) => {
  if (totalPagesVal < 1) {
    return
  }
  
  if (route.query.page && (+route.query.page < 1 || +route.query.page > totalPages.value)) {
    console.log('Not valid page number')
    throw createError({
      statusCode: 404,
      message: 'Страница не найдена'
    })
  }
})

watch(
  () => route.query.page,
  () => {
    // условие для правильной работы при:
    // находимся на /news/
    // переходим на какую-либо /news/?page=...
    // нажимаем "обратно" в браузере
    if (route.fullPath === basePageUrl) {
      changePageTo(1)
    }
  }
)

/**
 * Высчитывает индекс начального и конечного поста,
 * учитывает, было ли нажато "Показать ещё"
 */
watchEffect(() => {
  // индекс без учёта "показать ещё"
  const startPostOfPage = (currentPage.value - 1) * postsPerPageDefault
  // если 0, то "показать ещё" не нажата
  const startOffset = postsPerPage.value - postsPerPageDefault
  const start = startPostOfPage - startOffset

  postIndeciesToShow.value = {
    start,
    end: start + postsPerPage.value
  }
})

function refreshPagination() {
  changePageTo(1)

  router.push({
    query: { ...route.query, page: 1 }
  })
}

function changePageTo (pageNumber: number) {
  if (currentPage.value !== pageNumber) {
    currentPage.value = pageNumber
    postsPerPage.value = postsPerPageDefault

    if (props.scrollAnchor) {
      props.scrollAnchor.scrollIntoView({ block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }
  }
}

function previousPage () {
  if (currentPage.value > 1) {
    const newPage = currentPage.value - 1
    changePageTo(newPage)
  }
}

function nextPage () {
  if (currentPage.value < totalPages.value) {
    const newPage = currentPage.value + 1
    changePageTo(newPage)
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
}

.pagination--nav {
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination__button {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
}

.pagination--prev,
.pagination--next {
  border: 1px solid var(--clr-grey-regular);
  border-color: var(--clr-grey-regular);
  transition: background-color 300ms ease;

  &:hover {
    background-color: var(--clr-grey-regular);
  }
}

.pagination--item {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: var(--clr-grey-light);
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-grey-regular);
  }

  &.active {
    background-color: var(--clr-black-dark);
    color: var(--clr-white);
    transform: scale(1.1);
    pointer-events: none;
  }
}

.pagination--pages {
  display: flex;
  gap: 8px;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}
</style>

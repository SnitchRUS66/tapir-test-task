import type { Product } from '~/types/api'

const DEFAULT_LIMIT = 16

export async function useCatalogProducts(limit: number = DEFAULT_LIMIT) {
  const { fetchProducts } = useProductsApi()
  const { data: initialData } = await useAsyncData('catalog-products', () =>
    fetchProducts(1, limit)
  )

  const products = ref<Product[]>(initialData.value?.products ?? [])
  const currentPage = ref(initialData.value?.currentPage ?? 1)
  const totalPages = ref(initialData.value?.totalPages ?? 0)
  const loadState = ref<'idle' | 'loading' | 'error'>('idle')

  const hasNextPage = computed(() => currentPage.value < totalPages.value)

  async function loadMore() {
    const nextPage = currentPage.value + 1
    loadState.value = 'loading'
    try {
      const data = await fetchProducts(nextPage, limit)
      products.value = [...products.value, ...data.products]
      currentPage.value = data.currentPage
      totalPages.value = data.totalPages
      loadState.value = 'idle'
    } catch {
      loadState.value = 'error'
    }
  }

  async function retry() {
    const nextPage = currentPage.value + 1
    loadState.value = 'loading'
    try {
      const data = await fetchProducts(nextPage, limit)
      products.value = [...products.value, ...data.products]
      currentPage.value = data.currentPage
      totalPages.value = data.totalPages
      loadState.value = 'idle'
    } catch {
      loadState.value = 'error'
    }
  }

  return { products, loadState, hasNextPage, loadMore, retry }
}

import type { ProductsResponse } from '~/types/api'

const API_BASE = 'https://test-task-api.tapir.ws'
const DEFAULT_LIMIT = 16

export function useProductsApi() {
  async function fetchProducts(page: number, limit: number = DEFAULT_LIMIT): Promise<ProductsResponse> {
    const data = await $fetch<ProductsResponse>(`${API_BASE}/products`, {
      query: { page, limit },
    })
    return data
  }

  return { fetchProducts }
}

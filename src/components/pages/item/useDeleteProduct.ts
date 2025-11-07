import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { pagesUrl } from '@/config/pages-url.config'
import { useProducts } from '@/store/products/useProducts'

export function useDeleteProduct(id: string) {
  const router = useRouter()
  const { products, setProductsWithCloud } = useProducts()

  return useCallback(() => {
    const data = structuredClone(products)
    const item = data[id]
    if (item) {
      delete data[id]
      router.push(pagesUrl.home)
      setTimeout(() => setProductsWithCloud(data), 1000)
    }
  }, [id, products, router, setProductsWithCloud])
}

import { useCallback } from 'react'
import { useNavigate } from 'react-router'
import { pagesUrl } from '@/config/pages-url.config'
import { useProducts } from '@/store/products/useProducts'

export function useDeleteProduct(id: string) {
  const navigate = useNavigate()
  const { products, setProductsWithCloud } = useProducts()

  return useCallback(() => {
    const data = structuredClone(products)
    const item = data[id]
    if (item) {
      delete data[id]
      void navigate(pagesUrl.home)
      setProductsWithCloud(data)
    }
  }, [id, products, navigate, setProductsWithCloud])
}

import Breadcrumb from "@/components/Breadcrumb"
import PageWrapper from "@/components/PageWrapper"
import { GetProductMock } from "@/helpers/getProductMock"
import { productsDetails } from "@/interfaces/ProductDetails"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Product() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<productsDetails>({} as productsDetails)

  useEffect(() => {
    function fetchProduct() {
      const product = GetProductMock({ id: Number(id) })
      if (product) {
        setProduct(product)
      }
    }
    fetchProduct()
  }, [])

  return (
    <PageWrapper>
      <Breadcrumb items={[]} />
    </PageWrapper>
  )
}

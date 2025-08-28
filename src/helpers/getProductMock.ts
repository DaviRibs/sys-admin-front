import { productsDetailsMocks } from "@/mocks/productsDetails"
interface GetProductMockProps {
  id: number | string
}
export function GetProductMock({ id }: GetProductMockProps) {
  return productsDetailsMocks.find((product) => product.id === id)
}

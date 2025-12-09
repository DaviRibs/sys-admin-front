import { PageWrapper } from '@/components/PageWrapper'
import PageWrapperContent from '@/components/PageWrapper/PageWrapperContent'

export default function AddProduct() {
  return (
    <PageWrapper.Root sidebar={true}>
      <PageWrapperContent>
        <p>Adicionar produto</p>
      </PageWrapperContent>
    </PageWrapper.Root>
  )
}

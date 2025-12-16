import { PageWrapper } from '@/components/PageWrapper'
import PageWrapperContent from '@/components/PageWrapper/PageWrapperContent'
import requestApi from '@/helpers/requestApi'

export default function AddProduct() {
  function click() {
    requestApi({
      url: '/email',
      method: 'POST',
    })
  }
  return (
    <PageWrapper.Root sidebar={true}>
      <PageWrapperContent>
        <button onClick={click}>Adicionar produto</button>
      </PageWrapperContent>
    </PageWrapper.Root>
  )
}

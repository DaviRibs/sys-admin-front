import CustomButton from "../CustomButton"
import CustomInput from "../CustomInput"

export default function NewSletterSection() {
  return (
    <section className="bg-[#21252b80] rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">
        Fique por dentro das novidades!
      </h3>
      <p className="mb-6 max-w-md mx-auto">
        Receba as ofertas exclusivas. Lançamentos e Dica diretamente no seu
        email.
      </p>
      <div className=" flex flex-col gap-4 max-w-md mx-auto sm:flex-row">
        <CustomInput placeholder="Seu melhor email" type="email" />
        <CustomButton className="w-[150px] text-sm">Inscreva-se!</CustomButton>
      </div>
    </section>
  )
}

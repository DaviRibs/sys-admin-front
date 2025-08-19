import { BsArrowRight } from "react-icons/bs"
import CustomButton from "../CustomButton"

export default function BannerSection() {
  return (
    <section className="relative overflow.hidden rounded-2xl bg-gradient-to-r from-[#5593f7] to-[#5593f7]/50 p-12">
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-while mb-4">
          Ofertas Especiais
        </h2>
        <p className="text-white/90 text-lg mb-6">
          Descubra produtos incríveis até com 70% de desconto. Promoções por um
          tempo limitado.
        </p>
        <CustomButton variant="outline" width="w-[200px]">
          Ver ofertas
          <BsArrowRight />
        </CustomButton>
      </div>
    </section>
  )
}

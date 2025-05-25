import Carrousel from "./components/Carrousel";
import ProductWrapper from "./components/ProductsWrapper";
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Carrousel title="Destaques">
        <ProductWrapper category="all"/>
      </Carrousel>
      <Carrousel title="Roupas Masculinas">
        <ProductWrapper category="men's clothing"/>
      </Carrousel>
      <Carrousel title="Roupas Femininas">
        <ProductWrapper category="women's clothing"/>
      </Carrousel>
      <Carrousel title="Bijuterias">
        <ProductWrapper category="jewelery"/>
      </Carrousel>
      <Carrousel title="Eletrônicos">
        <ProductWrapper category="electronics"/>
      </Carrousel>
    </div>
  )
}

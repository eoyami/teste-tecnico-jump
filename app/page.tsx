"use client"

import Products from "./components/Products";


export default function Home() {

  return (
    <div className="flex flex-col w-full">
      <Products title="Veja nossos produtos:"/>
      <Products title="Roupas Masculinas"/>
      <Products title="Roupas Femininas"/>
    </div>
  );
}

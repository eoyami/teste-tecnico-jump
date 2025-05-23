import Produts from "./components/Products";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Loja do Unk</h1>
      <Produts />
    </div>
  );
}

const Contato = () => {
  return (
    <>
    <div className="container flex flex-col items-center justify-center bg-white w-full h-full rounded-md p-2">
      <h1 className="text-2xl font-bold text-black">Contato</h1>
      <div className="flex flex-col items-center justify-center text-black">
        <div className="flex flex-col items-center justify-center gap-2 w-full border-2 border-gray-300 rounded-md p-2 w-80">
        <form action="">
            <label htmlFor="nome">Nome</label>
            <input className="w-full p-2 rounded-md border-2 border-gray-300" type="text" placeholder="Nome" />
            <label htmlFor="email">Email</label>
            <input className="w-full p-2 rounded-md border-2 border-gray-300" type="email" placeholder="Email" />
            <label htmlFor="telefone">Telefone</label>
            <input className="w-full p-2 rounded-md border-2 border-gray-300" type="tel" placeholder="Telefone" />
            <label htmlFor="mensagem">Mensagem</label>
            <textarea className="w-full p-2 rounded-md border-2 border-gray-300 h-20 min-h-20 max-h-60" placeholder="Escreva sua mensagem aqui" />
            <button className="bg-blue-500 text-white p-2 rounded-md w-full">Enviar</button>
        </form>
        </div>
        <div className="flex flex-col  items-center justify-center md:flex-row gap-2 w-full border-2 border-gray-300 rounded-md p-2 mt-2">
            <h2 className="text-lg font-bold">Outras formas de contato:</h2>
        <p>
          <span className="font-bold">Whatsapp:</span>
          <a href="https://wa.me/5511999999999" className="text-blue-500">
            (11) 99999-9999
          </a>
        </p>
        <p>
          <span className="font-bold">Email:</span>
          <a href="mailto:contato@example.com" className="text-blue-500">
            contato@example.com
          </a>
        </p>
        <p>
          <span className="font-bold">Instagram:</span>
          <a href="https://www.instagram.com/example" className="text-blue-500">
            @example
          </a>
        </p>
        <p>
          <span className="font-bold">Facebook:</span>
          <a href="https://www.facebook.com/example" className="text-blue-500">
            @example
          </a>
        </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contato
import ImagemTeste from "../../public/imagem_teste.png"

interface Products {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}


interface ProductSpecial extends Products {
    plan: 'premium'
}


const data: Products[] = []

const items = 9

for(let x = 0; x < items; x++){
    data.push({
        id: x + 1,
        title: "Tênis de marca",
        price: 199.90,
        description: "Bolsa bem legal",
        category: "mens clothing",
        image: `${ImagemTeste.src}`
    })
}

export default data
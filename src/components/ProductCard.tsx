import { useState } from "preact/hooks"
import { IProduct } from "../types"

interface ProductCardProps {
    product: IProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    const [details, setDetails] = useState(false)

    const toggle = () => setDetails((prev) => !prev)

    return (
        <div className="mb-2 p-3 border rounded">
            <h2 className="text-lg">{product.title}</h2>
            <p className="font-bold">{product.price}</p>
            <a href={`/product/${product.id}`}>Open product</a>
            <br />
            <button className="px-4 py-2 text-white bg-yellow-400 border" onClick={toggle}>Toggle Description</button>
            {details && <p>{product.description}</p>}
        </div>
    )
}

import { useState, useEffect } from 'react'
import { fetchProducts } from './domain/use-cases/fetchProducts'
import type { Product } from './domain/models/Product'

export default function App() {
    const [loading, setLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const results = fetchProducts()

        results.then((data) => {
            setProducts(data)
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <h1>Hello world!!</h1>

            { loading ? null : <ListProducts items={ products } /> }
        </div>
    )
}

export function ListProducts({ items }: { items: Product[] }) {
    return (
        <ul>
            { items.map((item) => (
                <li key={ item.id }>{ item.title }</li>
            )) }
        </ul>
    )
}
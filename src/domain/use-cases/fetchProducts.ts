import type { Product } from '../models/Product'

export async function fetchProducts(): Promise<Product[]> {
    return fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => json as Product[])
}
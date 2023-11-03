import { describe, it, expect } from 'vitest'
import { fetchProducts } from './fetchProducts'

describe('fetchProducts', () => {
    it('fetches products from the API', async () => {
        const products = await fetchProducts()
        expect(products.length).toBeGreaterThan(0)
    })

    it('returns the correct data', async () => {
        const products = await fetchProducts()
        const product = products[0]
        expect(product).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            price: expect.any(Number),
            description: expect.any(String),
            category: expect.any(String),
            image: expect.any(String),
            rating: {
                rate: expect.any(Number),
                count: expect.any(Number),
            },
        })
    })
})

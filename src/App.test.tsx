import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App, { ListProducts } from './App'
import type { Product } from './domain/models/Product'

describe('App', () => {
    it('should render correctly', () => {
        render(<App />)
        screen.debug()
    })

    it('should render a list of products', () => {
        const products: Product[] = [
            {
                id: 1,
                title: 'Product 1',
                description: 'Description 1',
                price: 100,
                category: 'Category 1',
                image: 'https://via.placeholder.com/200x200',
                rating: {
                    count: 10,
                    rate: 4,
                }
            },
        ]

        render(<ListProducts items={ products } />)
        screen.debug()
    })

    it('should render a list of products with no items', () => {
        const products: Product[] = []

        render(<ListProducts items={ products } />)
        screen.debug()
    })
})
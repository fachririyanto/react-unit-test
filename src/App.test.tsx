import App from './App'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('App', () => {
    it('should render', () => {
        expect(App).toMatchSnapshot()
    })

    it('should render correctly', () => {
        render(<App />)
        screen.debug()
    })
})
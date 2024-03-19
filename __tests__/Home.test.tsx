import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('displays something from the page', () => {
        render(<Home />)
        expect(screen.getByText('Docs')).toBeVisible()
    })
})

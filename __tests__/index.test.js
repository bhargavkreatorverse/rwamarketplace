import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders the BannerSection component', () => {
        render(<Home />)
        const bannerSection = screen.getByTestId('banner-section')
        expect(bannerSection).toBeInTheDocument()
    })

    it('renders the FixedIncomeDealsSection component', () => {
        render(<Home />)
        const fixedIncomeDealsSection = screen.getByTestId('fixed-income-deals-section')
        expect(fixedIncomeDealsSection).toBeInTheDocument()
    })

    // Add more tests for other components here...
})

import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'
import { About } from '../pages/About'
import { NotFound } from '../pages/NotFound'
import { AllProducts } from '../pages/AllProducts'

export const Router = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<ProductDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<AllProducts />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

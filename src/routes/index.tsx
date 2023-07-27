import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'
import { NotFound } from '../pages/NotFound'

export const Router = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<ProductDetails />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'
import { About } from '../pages/About'
import { NotFound } from '../pages/NotFound'

export const Router = () => {
    return (
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<ProductDetails />} />
                <Route path='/about' element={<About />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

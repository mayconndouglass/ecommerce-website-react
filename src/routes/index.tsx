import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'
import { NotFound } from '../pages/NotFound'
import { About } from '../components/About'

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

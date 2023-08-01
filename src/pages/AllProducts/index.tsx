import { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

import * as S from './styles'

import { HeaderV2 } from '../../components/HeaderV2'
import { Filter } from './components/Filter'
import { Products } from '../../components/Products'
import { Footer } from '../../components/Footer'

export const AllProducts = () => {
    const { allProducts } = useContext(ProductContext)

    return (
        <S.Main>
            <HeaderV2 />
            <Filter />
            <Products data={allProducts} />
            <Footer />
        </S.Main>
    )
}

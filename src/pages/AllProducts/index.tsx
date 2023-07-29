import * as S from './styles'

import { HeaderV2 } from '../../components/HeaderV2'
import { Filter } from './components/Filter'
import { Products } from '../../components/Products'

import { productDataExtend } from '../../data/product-data-extend'

export const AllProducts = () => {
    return (
        <S.Main>
            <HeaderV2 />
            <Filter />
            <Products data={productDataExtend} />
        </S.Main>
    )
}

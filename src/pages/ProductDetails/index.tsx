import * as S from './style'

import { HeaderV2 } from './components/HeaderV2'
import { ProductData } from './components/ProductData'
import { Products } from '../../components/Products'
import { Features } from '../../components/Features'
import { SignupV2 } from '../../components/SignupV2'
import { FooterV2 } from '../../components/FooterV2'

export const ProductDetails = () => {
    return (
        <S.Container>
            <HeaderV2 />
            <ProductData />

            <S.ProductsContainer>
                <h3>
                    You might also like
                </h3>
            </S.ProductsContainer>

            <Products />

            <Features />
            <SignupV2 />
            <FooterV2 />
        </S.Container>
    )
}

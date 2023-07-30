import { useParams } from 'react-router-dom'
import { useContext } from 'react'

import { ProductContext } from '../../contexts/ProductContext'

import * as S from './style'

import { HeaderV2 } from '../../components/HeaderV2'
import { ProductInformation } from './components/ProductInformation'
import { Products } from '../../components/Products'
import { Features } from '../../components/Features'
import { SignupV2 } from '../../components/SignupV2'
import { FooterV2 } from '../../components/FooterV2'
import { Banner } from '../../components/Banner'

export const ProductDetails = () => {
    const { id } = useParams()
    const { allProducts, featuredProducts } = useContext(ProductContext)
    const productData = allProducts.find(product => product.id === Number(id))

    return (
        <S.Main>
            <Banner />
            <HeaderV2 />
            <ProductInformation data={productData!} />

            <S.ProductsContainer>
                <h3>
                    You might also like
                </h3>
            </S.ProductsContainer>

            <Products data={featuredProducts} />

            <Features />
            <SignupV2 />
            <FooterV2 />
        </S.Main>
    )
}

import { useParams } from 'react-router-dom'
import { useProduct } from '../../contexts/ProductContext'

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
    const { allProducts, featuredProducts } = useProduct()
    const productData = allProducts.find(product => product.id === Number(id))

    return (
        <S.Container>
            <Banner />
            <HeaderV2 />
            <main>
                <ProductInformation productData={productData!} />

                <S.ProductsContainer>
                    <h3>
                        You might also like
                    </h3>
                </S.ProductsContainer>

                <Products data={featuredProducts} />

                <Features />
                <SignupV2 />
            </main>
            <FooterV2 />
        </S.Container>
    )
}

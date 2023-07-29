import * as S from './styles'

import { Header } from '../../components/Header'
import { Hero } from './components/Hero'
import { Features } from '../../components/Features'
import { Products } from '../../components/Products'
import { About } from '../../components/About'
import { Signup } from './components/Signup'
import { Footer } from '../../components/Footer'

import { productData } from '../../data/product-data'

export const Home = () => {

    return (
        <S.Main>
            <Header />
            <Hero />
            <Features />
            <Products data={productData} />
            <About />
            <Signup />
            <Footer />
        </S.Main>
    )
}

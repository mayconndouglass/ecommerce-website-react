import { useProduct } from '../../contexts/ProductContext'

import * as S from './styles'

import { Header } from '../../components/Header'
import { Hero } from './components/Hero'
import { Features } from '../../components/Features'
import { Products } from '../../components/Products'
import { About } from '../../components/About'
import { Signup } from './components/Signup'
import { Footer } from '../../components/Footer'

export const Home = () => {
    const { featuredProducts } = useProduct()

    return (
        <S.Container>
            <Header />
            <main>
                <Hero />
                <Features />
                <Products data={featuredProducts} />
                <About />
                <Signup />
            </main>
            <Footer />
        </S.Container>
    )
}

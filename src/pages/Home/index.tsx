import * as S from './styles'

import { Header } from '../../components/Header'
import { Hero } from './components/Hero'
import { Features } from '../../components/Features'
import { Products } from '../../components/Products'
import { About } from '../../components/About'
import { Signup } from './components/Signup'
import { Footer } from './components/Footer'

export const Home = () => {

    return (
        <S.Container>
            <Header />
            <Hero />
            <Features />
            <Products />
            <About />
            <Signup />
            <Footer />
        </S.Container>
    )
}

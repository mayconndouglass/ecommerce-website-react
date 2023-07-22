import * as S from './styles'

import { Header } from '../../components/Header'
import { Hero } from './components/hero'
import { Features } from '../../components/Features'
import { Products } from '../../components/Products'

export const Home = () => {

    return (
        <S.Container>
            <Header />
            <Hero />
            <Features />
            <Products />
        </S.Container>
    )
}

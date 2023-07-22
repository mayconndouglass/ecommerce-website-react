import * as S from './styles'

import { Header } from '../../components/Header'
import { Hero } from './components/hero'
import { Features } from '../../components/Features'

export const Home = () => {

    return (
        <S.Container>
            <Header />
            <Hero />
            <Features />
        </S.Container>
    )
}

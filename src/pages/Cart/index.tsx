import * as S from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Products } from './components/Products'

export const Cart = () => {
    return (
        <S.Container>
            <Header />
            <main>
                <Products />
            </main>
            <Footer />
        </S.Container>
    )
}

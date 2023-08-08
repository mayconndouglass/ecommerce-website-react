import { Button } from '../../../../components/Button'
import * as S from './styles'

import { Link } from 'react-router-dom'

export const AboutUs = () => {

    const rootUrl = window.location.origin

    return (
        <S.Container>
            <h2>A brand built on the love of craftmanship,
                quality and outstanding customer service</h2>
            <Button>
                <Link to={rootUrl + '/products'}>
                    View our products
                </Link>
            </Button>
        </S.Container>
    )
}
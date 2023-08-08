import * as S from './styles'
import { Button } from '../../../../components/Button'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <S.Container>
            <div className="card-container">
                <h2>Luxury homeware for people who love timeless design quality</h2>
                <p>
                    With our new collection, view over 400 bespoke pieces from
                    homeware through to furniture today
                </p>
                <Button>
                    <Link to="/products">
                        View collection
                    </Link>
                </Button>
            </div>
            <div className='bg-mobile'></div>
        </S.Container>
    )
}

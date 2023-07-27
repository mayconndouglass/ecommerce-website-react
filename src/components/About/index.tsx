import { Button } from '../Button'
import armchair from '/assets/images/armchair.png'

import * as S from './styles'

export const About = () => {
    return (
        <S.Container>
            <div className="card-about">
                <h3>It started with a small idea</h3>
                <p>
                    A global brand with local beginnings, our story begain in a
                    small studio in South London in early 2014
                </p>
                <Button>
                    View collection
                </Button>
            </div>

            <div className="image-container">
                <img src={armchair} alt="Armchair" />
            </div>
        </S.Container>
    )
}

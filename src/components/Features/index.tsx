import { CardFeature } from './CardFeature'
import { cardData } from './data'

import * as S from './styles'

export const Features = () => {

    return (
        <S.Container>
            <h2>What makes our brand different</h2>

            <div className="cards-container">
                {cardData.map(data => (
                    <CardFeature key={data.alt} {...data} />
                ))}
            </div>
        </S.Container>
    )
}

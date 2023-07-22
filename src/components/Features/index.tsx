import { CardFeature } from '../CardFeature'
import * as S from './styles'

import iconDelivery from '../../../public/assets/images/icon-delivery.svg'
import iconCheckmark from '../../../public/assets/images/icon-checkmark.svg'
import iconPuchase from '../../../public/assets/images/icon-puchase.svg'
import iconSprout from '../../../public/assets/images/icon-sprout.svg'

export const Features = () => {
    const cardData = [
        {
            icon: iconDelivery,
            title: "Next day as standard",
            content: "Order before 3pm and getyour order the next day as standard",
            alt: "Delivery"
        },
        {
            icon: iconCheckmark,
            title: "Made by true artisans",
            content: "Handmade crafted goods made with real passion and craftmanship",
            alt: "CheckMark"
        },
        {
            icon: iconPuchase,
            title: "Unbeatable prices",
            content: "For our materials and quality you won’t find better prices anywhere",
            alt: "Puchase"
        },
        {
            icon: iconSprout,
            title: "Recycled packaging",
            content: "We use 100% recycled to ensure our footprint is more manageable",
            alt: "Sprout"
        },
    ]

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

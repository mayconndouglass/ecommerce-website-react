import * as S from './styles'
import { useState } from 'react'

import iconDelivery from '/assets/images/icon-delivery-negative.svg'
import iconClose from '/assets/images/icon-close.svg'

export const Banner = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.Container active={isOpen}>
            <img src={iconDelivery} alt="Icon Delivery" />
            <p>Free delivery on all orders over £50 with code easter checkout</p>
            <img
                src={iconClose}
                alt="Icon Close"
                className='close'
                onClick={() => setIsOpen(!isOpen)}
            />
        </S.Container>
    )
}
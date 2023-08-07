import { useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'

import { ProductDataType } from '../../../../@types/product-data-type'

import { CartContext } from '../../../../contexts/CartContext'

import * as S from './styles'

/* import add from '../../../../../public/assets/images/add.png'
import subtract from '../../../../../public/assets/images/subtract.png' */

export const ProductInformation = ({ productData }: { productData: ProductDataType }) => {
    const { bigImg, title, price, description, dimensions } = productData
    const [quantity, setQuantity] = useState(1)
    const { dispatch } = useContext(CartContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        setQuantity(1)
    }, [productData])

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...productData,
                quantity
            }
        })
    }

    return (
        <S.Container>
            <div className="inner-container">
                <div className="image-container">
                    <img src={bigImg} alt={title} />
                </div>

                <div className="data-container">
                    <h4>{title}</h4>
                    <span>{price}</span>

                    <div className="divider"></div>

                    <div className="description">
                        <p>Description</p>

                        <p>{description}</p>
                    </div>

                    <div className="dimensions">
                        <p>Dimensions</p>

                        <div className="grid">
                            <p>Height</p>
                            <p>Width</p>
                            <p>Depth</p>

                            <span>{dimensions.height}</span>
                            <span>{dimensions.width}</span>
                            <span>{dimensions.depth}</span>
                        </div>
                    </div>

                    <div className="quantity">
                        <span>Quantity</span>

                        <div>
                            {/* <img src={add} alt="Add" /> */}
                            <span onClick={handleDecrease}>-</span>
                            <span>{quantity}</span>
                            <span onClick={handleIncrease}>+</span>
                            {/* <img src={subtract} alt="subtract" /> */}
                        </div>
                    </div>

                    <button onClick={() => {
                        handleAddToCart()
                        toast.success('Added to cart'/* , { position: 'top-center' } */)
                    }}>Add to cart</button>
                </div>
            </div>
        </S.Container >
    )
}

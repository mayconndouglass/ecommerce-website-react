import * as S from './styles'

import productImage from '../../../../../public/assets/images/Product Image.png'
/* import add from '../../../../../public/assets/images/add.png'
import subtract from '../../../../../public/assets/images/subtract.png' */

export const ProductInformation = () => {
    return (
        <S.Container>
            <div className="image-container">
                <img src={productImage} alt="Product Image" />
            </div>

            <div className="data-container">
                <h4>The Dandy Chair</h4>
                <span>£250</span>

                <div className="divider"></div>

                <div className="description">
                    <p>Description</p>

                    <p>
                        A timeless design, with premium materials features as
                        one of our most popular and iconic pieces. The dandy
                        chair is perfect for any stylish living space with
                        beech legs and lambskin leather upholstery.
                    </p>
                </div>

                <div className="dimensions">
                    <p>Dimensions</p>

                    <div className="grid">
                        <p>Height</p>
                        <p>Width</p>
                        <p>Depth</p>

                        <span>110cm</span>
                        <span>75cm</span>
                        <span>50cm</span>
                    </div>
                </div>

                <div className="quantity">
                    <span>Quantity</span>

                    <div>
                        {/* <img src={add} alt="Add" /> */}
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                        {/* <img src={subtract} alt="subtract" /> */}
                    </div>
                </div>

                <button>Add to cart</button>
            </div>
        </S.Container>
    )
}

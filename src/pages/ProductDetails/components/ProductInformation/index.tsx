import { ProductDataType } from '../../../../@types/product-data-type'

import * as S from './styles'

/* import add from '../../../../../public/assets/images/add.png'
import subtract from '../../../../../public/assets/images/subtract.png' */

export const ProductInformation = ({ data }: { data: ProductDataType }) => {
    const { img, title, price, description, dimensions } = data

    return (
        <S.Container>
            <div className="image-container">
                <img src={img} alt={title} />
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
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                        {/* <img src={subtract} alt="subtract" /> */}
                    </div>
                </div>

                <button>Add to cart</button>
            </div>
        </S.Container>
    )
}

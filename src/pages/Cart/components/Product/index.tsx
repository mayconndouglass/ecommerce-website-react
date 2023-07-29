import { productsType } from '../Products/productType'
import * as S from './styles'


export const Product = ({ ...props }: productsType) => {
    return (
        <S.Container>
            <div className='info'>
                <img src={props.image} alt={props.title} title={props.title} />
                <div>
                    <p className='name'>{props.title}</p>
                    <p className='description'>{props.description}</p>
                    <p className='price'>£{props.price}</p>
                    <S.containerQuantityMobile>
                        <div>
                            <button>-</button>
                            <input type="text" value={1} />
                            <button>+</button>
                        </div>
                    </S.containerQuantityMobile>
                </div>
            </div>

            {/* <div className='container-quantity'> */}
            <S.containerQuantity>
                <div>
                    <button>-</button>
                    <input type="text" value={1} />
                    <button>+</button>
                </div>
            </S.containerQuantity>
            {/* </div> */}

            <div className='total'>
                {/* temp */}
                <p>£{props.price}</p>
            </div>

        </S.Container>
    )
}
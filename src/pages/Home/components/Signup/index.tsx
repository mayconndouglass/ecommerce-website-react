import * as S from './styles'

export const Signup = () => {
    return (
        <S.Container>
            <h2>Join the club and get the benefits</h2>
            <p>
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
            </p>

            <div className="radios-container">
                <div className='radio-container'>
                    <div className="custom-checkbox"><span>✓</span></div>
                    <p>Exclusive offers</p>
                </div>

                <div className='radio-container'>
                    <div className="custom-checkbox"><span>✓</span></div>
                    <p>Free events</p>
                </div>

                <div className='radio-container'>
                    <div className="custom-checkbox"><span>✓</span></div>
                    <p>Large discounts</p>
                </div>
            </div>

            <div className="input-container">
                <input type="text" placeholder='your@email.com' />
                <button>Sign up</button>
            </div>
        </S.Container>
    )
}
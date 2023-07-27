import * as S from './styles'

// import { SignupInput } from '../../../../components/SignupInput'
import iconChecklist from '/public/assets/images/icon-checklist.svg'

export const Signup = () => {
    return (
        <S.Container>
            <h2>Join the club and get the benefits</h2>
            <p>
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
            </p>

            <S.Radios>
                <div className="radio-container">
                    <img src={iconChecklist} alt="Icon Checklist" />
                    <p>Exclusive offers</p>
                </div>

                <div className="radio-container">
                    <img src={iconChecklist} alt="Icon Checklist" />
                    <p>Free events</p>
                </div>

                <div className="radio-container">
                    <img src={iconChecklist} alt="Icon Checklist" />
                    <p>Large discounts</p>
                </div>
            </S.Radios>

            <div className="input-container">
                <input type="text" placeholder="your@email.com" />
                <button>Sign up</button>
            </div>
            {/* <SignupInput buttonColor='white' inputSize='118px' /> */}
        </S.Container>
    )
}

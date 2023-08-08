import { SignupInput } from '../SignupInput'
import * as S from './styles'

export const SignupV2 = () => {
    return (
        <S.Container>
            <div className="inner-container">
                <h2>Join the club and get the benefits</h2>

                <p>
                    Sign up for our newsletter and receive exclusive offers on new
                    ranges, sales, pop up stores and more
                </p>

                <div className="input-container">
                    <SignupInput />
                </div>
            </div>
        </S.Container>
    )
}

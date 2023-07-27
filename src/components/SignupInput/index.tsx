import * as S from './styles.ts'

type SignupInputProps = {
    buttonColor: string
    inputSize: string
}

export const SignupInput = ({ buttonColor, inputSize }: SignupInputProps) => {
    return (
        <S.Container>
            <S.Input
                inputSize={inputSize}
                type="text"
                placeholder="your@email.com"
            />

            <S.Button buttonColor={buttonColor}>Sign up</S.Button>
        </S.Container>
    )
}

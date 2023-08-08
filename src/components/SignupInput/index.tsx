import * as S from './styles.ts'

type SignupInputProps = {
    buttonColor?: string
    buttonSize?: string
    backgroundButton?: string
    backgroundInput?: string
}

export const SignupInput = ({
    buttonColor,
    buttonSize,
    backgroundButton,
    backgroundInput,
}: SignupInputProps) => {

    return (
        <S.Container>
            <S.Input
                backgroundInput={backgroundInput}
                buttonSize={buttonSize}
                type="text"
                placeholder="your@email.com"
            />

            <S.Button
                buttonColor={buttonColor}
                backgroundButton={backgroundButton}
            >
                Sign up
            </S.Button>
        </S.Container>
    )
}

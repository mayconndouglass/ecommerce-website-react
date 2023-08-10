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
                background_input={backgroundInput}
                button_size={buttonSize}
                type="text"
                placeholder="your@email.com"
            />

            <S.Button
                button_color={buttonColor}
                background_button={backgroundButton}
            >
                Sign up
            </S.Button>
        </S.Container>
    )
}

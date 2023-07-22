import * as S from './styles'

type CardProps = {
    icon: string
    alt: string
    title: string
    content: string
}

export const CardFeature = ({ icon, alt, title, content }: CardProps) => {
    return (
        <S.Container>
            <img src={icon} alt={alt} />
            <h3>{title}</h3>
            <p>{content}</p>
        </S.Container>
    )
}

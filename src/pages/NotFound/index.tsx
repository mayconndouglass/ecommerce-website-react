import { Link } from 'react-router-dom'
import * as S from './styles'

export const NotFound = () => {

    return (
        <S.Container>
            <h4>Not Found 404</h4>
            <Link to='/'>Voltar para Home</Link>
        </S.Container>
    )
}

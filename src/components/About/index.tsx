import { Button } from '../Button'
import armchair from '/assets/images/armchair.png'

import * as S from './styles'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <S.Container>
            <div className="card-about">
                <h3>It started with a small idea</h3>
                <p>
                    A global brand with local beginnings, our story begain in a
                    small studio in South London in early 2014
                </p>
                <Button>
                    <Link to="/products">
                        View collection
                    </Link>
                </Button>
            </div>

            <div className="image-container">
                <img src={armchair} alt="Armchair" />
            </div>
        </S.Container>
    )
}

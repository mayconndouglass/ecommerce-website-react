import * as S from './styles'
import { socialMedia } from '../../data/social-media-data'

import { Link } from 'react-router-dom'
import { SignupInput } from '../SignupInput'

export const Footer = () => {
    return (
        <S.Container>
            <div className="content-container">
                <S.Grid>
                    <div className="list">
                        <p>Menu</p>
                        <ul>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                            <li>
                                <Link to="/products">
                                    All products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="list">
                        <p>Categories</p>
                        <ul>
                            <li>Crockery</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                            <li>Crockery</li>
                        </ul>
                    </div>

                    <div className="list">
                        <p>Our company</p>
                        <ul>
                            <li>
                                <Link to="/About">
                                    About us
                                </Link>
                            </li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Returns policy</li>
                        </ul>
                    </div>

                    <div className="input-container">
                        <h4>Join our mailing list</h4>

                        <div className="input-footer">
                            <SignupInput backgroundButton='white' buttonColor='#000' />
                        </div>
                    </div>
                </S.Grid>

                <S.Divider />
                <S.Info>
                    <div className="copyright">Copyright 2022 Avion LTD</div>

                    <div className="social-media">
                        {socialMedia.map(({ alt, title, icon }) => (
                            <img
                                key={title}
                                src={icon}
                                alt={alt}
                                title={title}
                            />
                        ))}
                    </div>
                </S.Info>
            </div>
        </S.Container>
    )
}

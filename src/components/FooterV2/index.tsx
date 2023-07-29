import * as S from './styles'

import { socialMedia } from '../../data/social-media-data'

export const FooterV2 = () => {
    return (
        <S.Container>
            <div className="lists">
                <div className='first-group'>
                    <div className="first-list">
                        <p>Avion</p>
                        <ul>
                            <li>21 New York Street</li>
                            <li>New York City</li>
                            <li>United States of America</li>
                            <li>432 34</li>
                        </ul>
                    </div>

                    <div className="second-list">
                        <p>Social links</p>

                        <div className="social-midia">
                            {socialMedia.map(({ alt, title, icon }) => (
                                <img
                                    key={title}
                                    src={icon}
                                    alt={alt}
                                    title={title}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <S.Grid>
                    <div className="list">
                        <p>Menu</p>
                        <ul>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                            <li>All products</li>
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
                            <li>About us</li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Returns policy</li>
                        </ul>
                    </div>
                </S.Grid>
            </div>

            <S.Divider />

            <div className="copyright">Copyright 2022 Avion LTD</div>
        </S.Container>
    )
}

import * as S from './styles'
import { socialMedia } from './social-media-data'

export const Footer = () => {
    return (
        <S.Container>
            <div className="content-container">
                <div className="grid-container">
                    <div className="list">
                        <ul>
                            <li>Menu</li>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                            <li>All products</li>
                        </ul>
                    </div>

                    <div className="list">
                        <ul>
                            <li>Categories</li>
                            <li>Crockery</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                            <li>Crockery</li>
                        </ul>
                    </div>

                    <div className="list">
                        <ul>
                            <li>Our company</li>
                            <li>About us</li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Returns policy</li>
                        </ul>
                    </div>

                    <div className="input-container">
                        <h4>Join our mailing list</h4>

                        <div className="input-footer">
                            <input type="text" placeholder='your@email.com' />
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="info-container">
                    <div className="copyright">
                        Copyright 2022 Avion LTD
                    </div>

                    <div className="social-media">
                        {socialMedia.map(({ alt, title, icon }) => (
                            <img key={title} src={icon} alt={alt} title={title} />
                        ))}
                    </div>
                </div>
            </div>
        </S.Container>
    )
}

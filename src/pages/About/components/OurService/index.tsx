import * as S from './styles'

import roomWithArmChair from '/assets/images/room-with-armchair.png'

export const OurService = () => {
    return (
        <S.Container>
            <div className='img-container'>
                <img src={roomWithArmChair} alt="" />
            </div>
            <div className='about'>
                <h2>Our service isn’t just personal, it’s actually hyper personally exquisite</h2>
                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                <p> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                <button>Get in touch</button>
            </div>

        </S.Container>
    )
}
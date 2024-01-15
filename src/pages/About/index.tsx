import { Banner } from '../../components/Banner'
import { AboutUs } from './components/AboutUs'
import { Header } from './components/Header'
import { About as AboutComponent } from '../../components/About'
import { Features } from '../../components/Features'
import { OurService } from './components/OurService'
import { FooterV2 } from '../../components/FooterV2'
import { SignupV2 } from '../../components/SignupV2'
import { useEffect } from 'react'

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Banner />
            <Header />
            <main>
                <AboutUs />
                <AboutComponent />
                <OurService />
                <Features />
                <SignupV2 />
            </main>
            <FooterV2 />
        </>
    )
}

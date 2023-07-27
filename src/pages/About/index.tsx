
import { Banner } from '../../components/Banner'
import { AboutUs } from './components/AboutUs'
import { Header } from './components/Header'
import { About as AboutComponent } from '../../components/About'
import { Features } from '../../components/Features'
import { OurService } from './components/OurService'

export const About = () => {
    return (
        <>
            <Banner />
            <Header />
            <AboutUs />
            <AboutComponent />
            <OurService />
            <Features />
        </>


    )
}
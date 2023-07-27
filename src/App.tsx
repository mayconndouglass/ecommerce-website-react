import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

// temp
import { Home } from './pages/Home'
// import { ProductDetails } from './pages/ProductDetails'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Home />
            <GlobalStyle />
        </ThemeProvider>
    )
}

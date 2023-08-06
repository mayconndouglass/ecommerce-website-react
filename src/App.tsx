import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router />
                <GlobalStyle />
                <ToastContainer />
            </BrowserRouter>
        </ThemeProvider>
    )
}

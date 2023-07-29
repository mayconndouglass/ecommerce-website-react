import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

import { ProductProvider } from './contexts/ProductContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ProductProvider>
)

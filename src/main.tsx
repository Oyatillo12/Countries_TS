import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'
import CountriesProvider from './context/CountyContext.tsx'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <CountriesProvider>
            <App />
        </CountriesProvider>
    </Provider>
)

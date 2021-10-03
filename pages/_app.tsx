import '../styles/globals.css'
import {ThemeProvider} from '@material-ui/core'
import { theme } from '../theme'

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp

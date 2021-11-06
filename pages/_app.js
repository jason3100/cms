import Login from './login'
import '../styles/globals.css'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return (
    <Login>
      <Component {...pageProps} />
    </Login>
  )
}

export default MyApp

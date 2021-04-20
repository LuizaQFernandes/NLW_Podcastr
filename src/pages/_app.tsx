import '../styles/global.scss'
import {Header} from "../Components/Header";
import styles from '../styles/app.module.scss'
import { Player } from '../Components/Player';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps}/>
      </main>

      <Player/>
    </div>
  )
}

export default MyApp

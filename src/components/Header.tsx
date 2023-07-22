import styles from './Header.module.css'
import Logo from '../assets/logo.png'

export function Header() {
  return(
    <header className={styles.header}>
      <img height={72} src={Logo} alt="Logotipo Todo"></img>
    </header>
  )
}
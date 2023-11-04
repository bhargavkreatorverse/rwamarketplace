import Image from 'next/image'
import styles from './Logo.module.scss'

const Logo = () => {
    return (
        <Image className={styles.logo} src='/logo.svg' alt='logo' width={225} height={32} />
    )
}

export default Logo
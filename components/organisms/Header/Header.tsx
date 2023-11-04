import Logo from '@/components/atoms/Logo/Logo'
import ToggleButton from '@/components/atoms/ToggleButton/ToggleButton'
import NavLinks from '@/components/molecules/NavLinks/NavLinks'
import styles from './Header.module.scss'

const index = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Logo />
                    <NavLinks />
                    <ToggleButton />
                </div>
            </div>
        </header>
    )
}

export default index
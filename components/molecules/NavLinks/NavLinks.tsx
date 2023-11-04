import { NavUrl } from '@/data/common'
import ProfileButton from '@/components/atoms/ProfileButton/ProfileButton'
import CartButton from '@/components/atoms/CartButton/CartButton'
import styles from './NavLinks.module.scss'

const NavLinks = () => {
    return (
        <div className={styles.navLinksWrapper}>
            <ul>
                {
                    NavUrl.map((nav, i) => (
                        <li key={i}><a href={nav.link}>{nav.name}</a></li>
                    ))
                }

            </ul>
            <ProfileButton profileid='0xadsd...2439' />
            <CartButton />
        </div>
    )
}

export default NavLinks
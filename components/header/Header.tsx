import Image from 'next/image'
import React from 'react'
import ProfileButton from '@/components/profilebutton/ProfileButton'
import styles from './Header.module.scss'

const index = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.headerWrapper}>
                    <Image className={styles.logo} src='/logo.svg' alt='logo' width={225} height={32} />
                    <nav>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Marketplace</a></li>
                            <li><a href="">My Assets</a></li>
                        </ul>
                        <ProfileButton />
                        <Image src='/header/shoppingCart.svg' alt='logo' width={24} height={24} />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default index
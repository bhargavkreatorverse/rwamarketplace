import Image from 'next/image'
import React from 'react'
import styles from './ProfileButton.module.scss'

const index = () => {
    return (
        <a className={styles.profileWrapper}>
            <span className={styles.profileIcon}><Image src='/header/profileLogo.svg' alt='profile' width={14} height={12} /></span>
            <span className={styles.profileName}>0xadsd...2439</span>
        </a>
    )
}

export default index
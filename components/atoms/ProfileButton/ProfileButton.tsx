import Image from 'next/image'
import React from 'react'
import styles from './ProfileButton.module.scss'

interface NavLinksProps {
    profileid: string;
}

const ProfileButton: React.FC<NavLinksProps> = ({profileid}) => {
    return (
        <a className={styles.profileWrapper}>
            <span className={styles.profileIcon}><Image src='/header/profileLogo.svg' alt='profile' width={14} height={12} /></span>
            <span className={styles.profileName}>{profileid}</span>
        </a>
    )
}

export default ProfileButton
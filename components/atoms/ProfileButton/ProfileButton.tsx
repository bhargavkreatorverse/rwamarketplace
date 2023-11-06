import Image from 'next/image'
import React from 'react'
import styles from './ProfileButton.module.scss'
import Link from 'next/link';

interface NavLinksProps {
    profileid: string;
}

const ProfileButton: React.FC<NavLinksProps> = ({ profileid }) => {
    return (
        <Link href='/'>
            <span className={styles.profileWrapper}>
                <span className={styles.profileIcon}><Image src='/header/profileLogo.svg' alt='profile' width={14} height={12} /></span>
                <span className={styles.profileName}>{profileid}</span>
            </span>
        </Link>
    )
}

export default ProfileButton
import Image from 'next/image'
import styles from './ToggleButton.module.scss'

const ToggleButton = () => {
    return (
        <Image className={styles.toggleIcon} src='/toggleIcon.svg' alt='logo' width={24} height={24} />
    )
}

export default ToggleButton
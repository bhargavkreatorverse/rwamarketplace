import Image from 'next/image'
import styles from './PropertiesCard.module.scss'

const PropertiesCard = () => {
    return (
        <div className={styles.propertiesCard}>
            <div className={styles.propertiesImageWrapper}>
                <div className={styles.propertiesLableWrapper}>
                    <span className={styles.propertiesLable}>Savings</span>
                    <span className={styles.propertiesLable}>Credit Structure</span>
                </div>
                <Image className={styles.propertiesImageContent} src='/properties/propertiesImage.png' alt='properties' width={301} height={299} />                
            </div>
            <div className={styles.propertiesContentWrapper}>
                <span className={styles.propertiesName}>Polygon </span>
                <h3>Singapore 18 Sin Ming Lane 0711</h3>
                <div className={styles.propertiesDetails}>
                    <div className={styles.propertiesDetailsText}>
                        <p>Min. Buy</p>
                        <h4>$24,965</h4>
                    </div>
                    <div className={styles.propertiesDetailsText}>
                        <p>APR</p>
                        <h4>12%</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesCard
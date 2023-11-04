import Image from 'next/image'
import PropertiesCardBadge from '@/components/atoms/PropertiesCardBadge/PropertiesCardBadge'
import PropertiesCardPrice from '@/components/atoms/PropertiesCardPrice/PropertiesCardPrice'
import styles from './PropertiesCard.module.scss'

interface PropertiesCardProps {
    heading: string;
    price: string;
    apr: string;
}

const PropertiesCard: React.FC<PropertiesCardProps> = ({ heading, price, apr}) => {
    return (
        <div className={styles.propertiesCard}>
            <div className={styles.propertiesImageWrapper}>
                <div className={styles.propertiesLableWrapper}>
                    <PropertiesCardBadge labeltext='Savings' />
                    <PropertiesCardBadge labeltext='Credit Structure' />
                </div>
                <Image className={styles.propertiesImageContent} src='/properties/propertiesImage.png' alt='properties' width={301} height={299} />
            </div>
            <div className={styles.propertiesContentWrapper}>
                <span className={styles.propertiesName}>Polygon</span>
                <h3>{heading}</h3>
                <div className={styles.propertiesDetails}>
                    <PropertiesCardPrice heading='Min. Buy' subheading={price} />
                    <PropertiesCardPrice heading='APR' subheading={apr} />
                </div>
            </div>
        </div>
    )
}

export default PropertiesCard
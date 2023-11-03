import FeatureCard from '../../atoms/featurecard/FeatureCard'
import styles from './FeatureCardContainer.module.scss'

const FeatureCardContainer = () => {
    return (
        <div className={styles.featurecardsWrapper}>
            <FeatureCard bgImage='/banner/realEstateCardBackground.png' heading='Real Estate' />
            <FeatureCard bgImage='/banner/collectiblesCardBackground.png' heading='Collectibles' />
            <FeatureCard bgImage='/banner/discoverHiddenGemsCardBackground.png' heading='Discover Hidden Gems' />
            <FeatureCard bgImage='/banner/saveBigTodayCardBackground.png' heading='Save Big Today' />
        </div>
    )
}

export default FeatureCardContainer
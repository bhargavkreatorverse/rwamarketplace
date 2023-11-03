import FeatureCard from '../featurecard/FeatureCard'
import FeatureCardContainer from '../featurecardcontainer/FeatureCardContainer'
import ListedCard from '../listedcard/ListedCard'
import styles from './BannerSection.module.scss'

const BannerSection = () => {
    return (
        <section className={styles.bannerSection}>
            <div className="container">
                <div className={styles.bannerWrapper}>
                    <ListedCard />
                    <FeatureCardContainer />
                </div>
            </div>
        </section>
    )
}

export default BannerSection
import FeatureCardContainer from '../../molecules/featurecardcontainer/FeatureCardContainer'
import ListedCard from '../../atoms/listedcard/ListedCard'
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
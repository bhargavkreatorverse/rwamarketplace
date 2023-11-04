import FeatureCardContainer from '../../molecules/FeatureCardContainer/FeatureCardContainer'
import ListedCard from '../../molecules/ListedCard/ListedCard'
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
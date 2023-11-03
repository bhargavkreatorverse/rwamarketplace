import PropertiesCard from '../propertiescard/PropertiesCard'
import styles from './PropertiesContainer.module.scss'

const PropertiesContainer = () => {
    return (
        <div className={styles.propertiesContainer}>
            <PropertiesCard />
            <PropertiesCard />
            <PropertiesCard />
            <PropertiesCard />
        </div>
    )
}

export default PropertiesContainer
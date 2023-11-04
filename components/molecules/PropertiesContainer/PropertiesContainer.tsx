import PropertiesCard from '../PropertiesCard/PropertiesCard';
import styles from './PropertiesContainer.module.scss';

const PropertiesContainer = () => {
    const cardCount = 6;
    return (
        <div className={styles.propertiesContainer}>
            {[...Array(cardCount)].map((_, index) => (
                <PropertiesCard key={index} heading='Singapore 18 Sin Ming Lane 0711' price='$24,965' apr='12%' />
            ))}
        </div>
    );
};

export default PropertiesContainer;

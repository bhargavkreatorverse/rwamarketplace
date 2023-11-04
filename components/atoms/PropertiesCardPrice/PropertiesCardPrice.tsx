import styles from './PropertiesCardPrice.module.scss';

interface PropertiesCardPriceProps {
    heading: string;
    subheading: string;
}

const PropertiesCardPrice: React.FC<PropertiesCardPriceProps> = ({ heading, subheading }) => {
    return (
        <div className={styles.propertiesDetailsText}>
            <p>{heading}</p>
            <h4>{subheading}</h4>
        </div>
    );
}

export default PropertiesCardPrice;
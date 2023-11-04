import styles from './PropertiesCardBadge.module.scss';

interface PropertiesCardBadgeProps {
    labeltext: string;
}

const PropertiesCardBadge: React.FC<PropertiesCardBadgeProps> = ({ labeltext }) => {
    return (
        <span className={styles.propertiesLable}>{labeltext}</span>
    );
}

export default PropertiesCardBadge;
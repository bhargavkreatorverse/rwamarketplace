import ArrowButton from '../../atoms/ArrowButton/ArrowButton';
import ViewAllButton from '../../atoms/ViewAllButton/ViewallButton';
import styles from './SectionHeadingWrapper.module.scss';

interface SectionHeadingWrapperProps {
    HeadingText: string;
}

const SectionHeadingWrapper: React.FC<SectionHeadingWrapperProps> = ({ HeadingText }) => {
    return (
        <div className={styles.sectionHeadingWrapper}>
            <h2>{HeadingText}</h2>
            <ArrowButton image='./leftArrow.svg' />
            <ArrowButton image='./rightArrow.svg' />
            <ViewAllButton btnText='View All' />
        </div>
    );
};

export default SectionHeadingWrapper;


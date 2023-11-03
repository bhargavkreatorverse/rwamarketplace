import Image from 'next/image';
import styles from './SectionHeadingWrapper.module.scss';
import ArrowButton from '../../atoms/arrowbutton/ArrowButton';
import ViewAllButton from '../../atoms/viewallbutton/ViewallButton';

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


import styles from './ListedCardTextBox.module.scss';

interface ListedCardTextBoxProps {
    heading: string;
    subheading: string;
}

const ListedCardTextBox: React.FC<ListedCardTextBoxProps> = ({ heading, subheading }) => {
    return (
        <div className={styles.listedTextBox}>
            <p>{heading}</p>
            <h3>{subheading}</h3>
        </div>
    );
}

export default ListedCardTextBox;
import Image from 'next/image';
import styles from './ArrowButton.module.scss';

const ArrowButton = ({ image }: { image: string }): JSX.Element => {
    return (
        <button onClick={() => { console.log('next slide') }} className={`outineBtn ${styles.arrowBtn}`}>
            <Image src={image} alt='arrow' width={11} height={11} />
        </button>
    );
};

export default ArrowButton;


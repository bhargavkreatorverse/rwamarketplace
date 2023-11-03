import Image from 'next/image';
import styles from './FeatureCard.module.scss';

interface FeatureCardProps {
  bgImage: string;
  heading: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ bgImage, heading }) => {
  return (
    <div className={styles.featuredCardWrapper}>
      <Image className={styles.featuredCardBackground} priority src={bgImage} alt='image' width={676} height={788} />
      <h3>{heading}</h3>
    </div>
  );
};

export default FeatureCard;


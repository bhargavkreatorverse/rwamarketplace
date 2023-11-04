import Image from 'next/image'
import ListedCardTextBox from '@/components/atoms/ListedCardTextBox/ListedCardTextBox'
import { ListedCardInfo } from '@/data/common'
import styles from './ListedCard.module.scss'

const ListedCard = () => {
  return (
    <div className={styles.listedCardWrapper}>
      <Image className={styles.listedCardBackground} priority src='/banner/listedCardBackground.svg' alt='image' width={676} height={788} />
      <div className={styles.listedTextWrapper}>
        {
          ListedCardInfo.map((data, i) => (
            <ListedCardTextBox key={i} heading={data.heading} subheading={data.subheading} />
          ))
        }
      </div>
      <Image className={styles.listedCardImage} src='/banner/listedCard.svg' alt='image' width={790} height={539} />
    </div>
  )
}

export default ListedCard
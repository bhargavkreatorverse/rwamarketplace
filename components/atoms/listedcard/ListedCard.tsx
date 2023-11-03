import Image from 'next/image'
import styles from './ListedCard.module.scss'

const ListedCard = () => {
  return (
    <div className={styles.listedCardWrapper}>
      <Image className={styles.listedCardBackground} priority src='/banner/listedCardBackground.svg' alt='image' width={676} height={788} />
      <div className={styles.listedTextWrapper}>
        <div className={styles.listedTextBox}>
          <p>Listed Assets Value</p>
          <h3>$8,843.00</h3>
        </div>
        <div className={styles.listedTextBox}>
          <p>Total Transacted Volume</p>
          <h3>$18,843.00</h3>
        </div>
        <div className={styles.listedTextBox}>
          <p>Listed Assets</p>
          <h3>100+</h3>
        </div>
        <div className={styles.listedTextBox}>
          <p>Asset Categories</p>
          <h3>20+</h3>
        </div>
      </div>
      <Image className={styles.listedCardImage} src='/banner/listedCard.svg' alt='image' width={790} height={539} />
    </div>
  )
}

export default ListedCard
import SectionHeadingWrapper from '../../molecules/SectionHeadingWrapper/SectionHeadingWrapper'
import PropertiesContainer from '../../molecules/PropertiesContainer/PropertiesContainer'
import styles from './FixedIncomeDealsSection.module.scss'

const FixedIncomeDealsSection = () => {
  return (
    <section className={styles.fixedIncomeDealsSection}>
      <div className="container">
        <SectionHeadingWrapper HeadingText='Fixed Income Deals' />
        <PropertiesContainer />
      </div>
    </section>
  )
}

export default FixedIncomeDealsSection
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://fatneo.com">Fat Neo</a>
        </h1>
    
        <h1 className={styles.title}>
          Crash &#9937; Cover
          </h1>

        <p className={styles.description}>
           A defensive backstop to invest, Full On
        </p>

        <div className={styles.grid}>
          <a href="https://fatneo.com" className={styles.card}>
          <h3>SPY Oct. 16 &#x1F53B; 5%</h3>
            <p>0.9 Cents per $1 Fractional SPY Coverage</p>
          </a>
    
           <a href="https://fatneo.com" className={styles.card}>
          <h3>SPY Oct. 16 &#x1F53B; 10%</h3>
            <p>0.3 Cents per $1 Fractional SPY Coverage</p>
          </a>
    
        <a
            href="https://whatstrading.trade-alert.com/wt/charts/SPY"
            className={styles.card}
          >
            <h3>Here's the data &rarr;</h3>
            <p>A firehose of goodness.</p>
          </a>

          <a
            href="https://www.optionseducation.org/news/2020-educational-series-essential-theory"
            className={styles.card}
          >
            <h3>The fundamentals &rarr;</h3>
            <p>
             Everyone needs options.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}


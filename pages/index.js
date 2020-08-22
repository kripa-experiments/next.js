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
            <p>0.9 Cents / $1 of SPY held now</p>
          </a>
    
           <a href="https://fatneo.com" className={styles.card}>
          <h3>SPY Oct. 16 &#x1F53B; 10%</h3>
            <p>0.3 Cents / $1 of SPY held now</p>
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
    
        <p className={styles.description}>
           style="color:blue;">Is this like insurance for stocks?
        </p>
        <p className={styles.description}>
           Yup. SPY losses limited to &#x1F53B; % crash-covered.
        </p>
        <p className={styles.description}>
           &#x274C; &#x1F61F; = &#x1F60F; &#10548;. Fat Neo style.
        </p>
      </main>
    </div>
  )
}


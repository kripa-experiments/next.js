import styles from '../styles/Home.module.css'

export default function Home() {
  return (
       <div className="container">
      <Head>
        <title>Fat Neo -- Crash Cover</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a href="https://fatneo.com"> Fat Neo -- Crash Cover</a>
        </h1>

        <p className="description">
          A defensive backstop to invest full on!
        </p>

        <div className="grid">
          <a href="https://fatneo.com" className="card">
          <h3>SPY Oct. 16 &darr; 5%</h3>
            <p>3 Cents per $1 Cover</p>
          </a>

          <a href="https://fatneo.com" className="card">
          <h3>SPY Oct. 16 &darr; 10%</h3>
            <p>0.3 Cents per $1 Cover</p>
          </a>

          <a
            href="https://whatstrading.com"
            className="card"
          >
            <h3>Here's the data &rarr;</h3>
            <p>A firehose of goodness.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
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

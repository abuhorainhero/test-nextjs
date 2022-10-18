import type { NextPage } from 'next'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Simple next.js app Root page
        </h1>

        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ad, ullam sed tempore natus provident. Omnis neque delectus maiores ipsa iste fugit amet molestias dolores reprehenderit iusto magnam cupiditate et repellat doloremque deserunt eos vel quod, laudantium totam nisi quia nobis soluta. Est fugiat, aliquid ipsum quidem, sapiente accusamus officia ipsam illum veniam quaerat enim perferendis? Harum natus error aspernatur perferendis facere iste quibusdam et ratione non? Assumenda cum omnis, placeat eius necessitatibus repudiandae aperiam ratione alias? Cumque quos, totam aperiam dolorum reiciendis suscipit magnam, aspernatur laboriosam, qui nesciunt facilis voluptas quas fuga fugit iusto earum obcaecati. Sunt, commodi suscipit?
        </p>

      </main>

      <Footer />
    </div>
  )
}

export default Home

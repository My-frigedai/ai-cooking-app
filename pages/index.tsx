import Head from 'next/head';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Friged-AI デモサービス</title>
        <meta name="description" content="AIを使った食品献立提案サービス Friged-AI" />
      </Head>

      <header className={styles.header}>
        <img src="/logo.png" alt="Friged-AI Logo" className={styles.logo} />
        <h1>Friged-AI</h1>
        <p>AIで食品を認識して、献立を提案するサービスです。</p>
      </header>

      <main className={styles.main}>
        <h2>簡易デモ</h2>
        <p>まだアプリは準備中ですが、すぐに体験できます。</p>
        <a
          href="https://yourdomain.com/app"
          className={styles.button}
        >
          デモを体験する
        </a>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Friged-AI</p>
      </footer>
    </div>
  );
}
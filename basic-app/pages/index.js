import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from "./components/Layout";

export default function Home() {
  
  return <Layout>
              <div className={styles.container}>
                <div className={styles.main}>
                    <h1>Welcome to NextJs !</h1>
                    <Link href="/test/test">Click me</Link>
                </div>
              </div>
          </Layout>
}

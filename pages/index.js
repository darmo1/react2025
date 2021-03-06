import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {auth} from 'firebase'
import { useAuth } from '../lib/auth'

export default function Home() {

  const auth = useAuth()
  




  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '} dfdfd
          <code className={styles.code}>pages/index.js this is a ndfw change 2021</code>
        </p>

        {auth?.user === false 
        ? <button onClick={(e) => auth.signinWithGithub() }>Sign In</button>
        :  (
          <>
          <div>{auth?.user?.email}</div>
          <button onClick={(e) => auth.signout()} > Sign out </button>
          </>
          
        )    
        }

   

        
 
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

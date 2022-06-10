import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';
import styles from '../../styles/Home.module.css'

const Penguin: NextPage = () => {
    return (
        <main className={styles.main}>
            <Head>
                <title>First Post</title>
            </Head>
            
            <img 
            src="/images/bipolarpenguin.jpg" 
            height={400} // Desired size with correct aspect ratio
            width={400} 
            alt="Bipolar Penguin" />
            <h2 className={styles.title}>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </main>
    )
}
export default Penguin

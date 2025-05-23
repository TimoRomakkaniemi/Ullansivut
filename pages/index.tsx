import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ullansivut</title>
        <meta name="description" content="Ullansivut" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Tervetuloa Ullansivuille!
        </h1>
        <p className={styles.description}>
          Tämä on uuden projektisi aloitussivu
        </p>
      </main>
    </>
  );
} 
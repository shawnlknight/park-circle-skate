import Head from 'next/head'
import { Document, Page, pdfjs } from 'react-pdf'

import styles from '../styles/Home.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function LetterOfSupport() {
  const date = new Date()
  const copywriteDate = date.getFullYear()
  return (
    <div className={styles.container}>
      <Head>
        <title>Park Circle Skate</title>
        <meta name="description" content="Skateboard project information" />
        <link rel="icon" href="/pc-favicon.png" />
      </Head>

      <div className={`w-screen flex justify-center mb-28`}>
        <Document file="letter-of-support.pdf">
          <Page pageIndex={0} />
        </Document>
      </div>

      <footer className={`${styles.footer} mt-20`}>© {copywriteDate}</footer>
    </div>
  )
}

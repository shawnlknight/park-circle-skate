import { Document, Page, pdfjs } from 'react-pdf'

import styles from '../styles/Home.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function LetterOfSupportPdf() {
  return (
    <div className={styles.container}>
      <div className={`w-screen flex justify-center mb-28`}>
        <Document file="letter-of-support.pdf">
          <Page pageIndex={0} scale="0.7" />
        </Document>
      </div>
    </div>
  )
}

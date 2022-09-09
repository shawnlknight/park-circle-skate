import styles from '../styles/Home.module.css'

export default function Footer() {
  const date = new Date()
  const copywriteDate = date.getFullYear()

  return <footer className={`${styles.footer} mt-20`}>© {copywriteDate}</footer>
}

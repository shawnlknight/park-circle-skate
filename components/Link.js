export default function ExternalLink(props) {
  const { href, displayText } = props

  return (
    <a
      className="text-sky-800 hover:text-sky-500 underline decoration-sky-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {displayText}
    </a>
  )
}

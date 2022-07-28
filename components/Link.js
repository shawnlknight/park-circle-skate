export default function Link(props) {
  const { href, displayText } = props

  return (
    <a
      className="text-sky-700 hover:text-yellow-500 underline decoration-sky-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {displayText}
    </a>
  )
}

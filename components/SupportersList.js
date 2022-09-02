import ExternalLink from './Link'
import { partnersListOne, partnersListTwo } from '../data/partners'

export default function SupportersList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="pl-6">
        <ul className="list-disc">
          {partnersListOne.map((partner, i) => (
            <li key={i}>
              <ExternalLink href={partner.url} displayText={partner.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="pl-6">
        <ul className="list-disc">
          {partnersListTwo.map((partner, i) => (
            <li key={i}>
              <ExternalLink href={partner.url} displayText={partner.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

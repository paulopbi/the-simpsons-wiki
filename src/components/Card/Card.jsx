import { Link } from 'react-router'
import './Card.css'
import Badge from '../Badge/Badge'
import truncateName from '../../util/truncateName'

function Card({ data }) {
  const { id, gender, portrait_path, name, occupation, status } = data
  return (
    <Link className="card" to={`/character/${id}`}>
      <Badge>{gender}</Badge>

      <div className="card__image-container">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
          alt={name}
        />
      </div>

      <ul className="card__content">
        <li className="card__name">
          <h2>{truncateName(name, 17)}</h2>
        </li>
        <li className="card__occupation">{truncateName(occupation, 60)}</li>
        <li className="card__status">{status}</li>
      </ul>
    </Link>
  )
}

export default Card

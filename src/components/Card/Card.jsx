import { Link } from 'react-router'
import './Card.css'
import truncateName from '../../utils/truncateName'

function Card({ data }) {
  const { id, portrait_path, name, gender, status } = data

  return (
    <Link className="card" to={`/character/${id}`}>
      <span className="card__id"># {id}</span>

      <div className="card__image">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
          alt={name}
        />
      </div>

      <div className="card__content">
        <h2>{truncateName(name, 17)}</h2>
        <p>
          {gender} - {status}
        </p>
      </div>
    </Link>
  )
}

export default Card

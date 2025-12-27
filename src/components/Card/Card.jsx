import { Link } from 'react-router'
import './Card.css'

function Card({ data }) {
  const { id, gender, portrait_path, name, occupation, status } = data
  return (
    <Link className="card" to={`/character/${id}`}>
      <span className="card__gender">{gender}</span>
      <div className="card__image-container">
        <img
          src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
          alt={name}
        />
      </div>

      <div className="card__content">
        <h2 className="card__name">{name}</h2>
        <p className="card__occupation">{occupation}</p>
        <p className="card__status">{status}</p>
      </div>
    </Link>
  )
}

export default Card

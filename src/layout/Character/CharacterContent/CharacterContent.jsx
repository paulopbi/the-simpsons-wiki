import './CharacterContent.css'

import Badge from '../../../components/Badge/Badge'

function CharacterContent({ data }) {
  const {
    id,
    occupation,
    name,
    description,
    gender,
    age,
    portrait_path,
    status,
  } = data
  return (
    <article className="character">
      <div className="character__img">
        <img
          src={`https://cdn.thesimpsonsapi.com/1280${portrait_path}`}
          alt={name}
          title={`Portrait of ${name}`}
          loading="lazy"
        />
      </div>

      <span className="character__id"># {id}</span>

      <section className="character__header">
        <div className="character__info">
          <h2>{name}</h2>
          <sup>{occupation}</sup>
        </div>

        <div className="character__badges">
          <Badge>Age: {age ? age : 'Unknow'}</Badge>
          <Badge>Gender: {gender ? gender : 'Unknow'}</Badge>
          <Badge>Status: {status ? status : 'Unknow'}</Badge>
        </div>
      </section>

      <p className="character__description">{description}</p>
    </article>
  )
}

export default CharacterContent

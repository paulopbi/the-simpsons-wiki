import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchCharacterById } from '../../services/api'
import './CharacterLayout.css'
import Badge from '../../components/Badge/Badge'

function CharacterLayout() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})

  const { occupation, name, description, gender, age, portrait_path, status } =
    character

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await fetchCharacterById(id)
      setCharacter(data)
    }

    fetchCharacter()
  }, [])

  console.log(character)
  return (
    <>
      {character ? (
        <section className="container">
          <article className="character">
            <div className="character__img-container">
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
                <sup className="character__occupation">{occupation}</sup>
              </div>

              <div className="character__badges">
                <Badge>Age: {age ? age : 'Unknow'}</Badge>
                <Badge>Gender: {gender ? gender : 'Unknow'}</Badge>
                <Badge>Status: {status ? status : 'Unknow'}</Badge>
              </div>
            </section>

            <p className="character__description">{description}</p>
          </article>
        </section>
      ) : (
        <p>Characters not found</p>
      )}
    </>
  )
}

export default CharacterLayout

import './CharacterLayout.css'
import Badge from '../../components/Badge/Badge'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchCharacterById } from '../../services/api'
import truncateText from '../../utils/truncateName'

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

  return (
    <>
      {character ? (
        <section className="container">
          <article className="character">
            <span className="character__id"># {id}</span>

            <div className="character__img-container">
              <img
                src={`https://cdn.thesimpsonsapi.com/1280${portrait_path}`}
                alt={name}
              />
            </div>

            <section className="character__header">
              <h2>{name}</h2>

              <div className="character__info">
                <Badge>Age: {age ? age : 'Unknow'}</Badge>
                <Badge>Gender: {gender}</Badge>
                <Badge>Status: {status}</Badge>
              </div>
            </section>

            <section className="character__text">
              <p className="character__occupation">{occupation}</p>
              <p className="character__description">{description}</p>
            </section>
          </article>
        </section>
      ) : (
        <p>Characters not found</p>
      )}
    </>
  )
}

export default CharacterLayout

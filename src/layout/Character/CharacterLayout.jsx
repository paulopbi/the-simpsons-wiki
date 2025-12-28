import './CharacterLayout.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Badge from '../../components/Badge/Badge'
import Error from '../../components/Alert/Alert'
import Alert from '../../components/Alert/Alert'
import Loading from '../../components/Loading/Loading'

function CharacterLayout() {
  const { id } = useParams()
  const [characterData, setCharacterData] = useState({})

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { occupation, name, description, gender, age, portrait_path, status } =
    characterData

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true)
      setError('')

      try {
        const request = await fetch(
          `https://thesimpsonsapi.com/api/characters/${id}`
        )

        if (!request.ok) {
          throw new Error('Something went wrong, please try again!')
        }

        const response = await request.json()
        setCharacterData(response)
      } catch (error) {
        if (error instanceof Error) {
          console.error(error)
          setError(error.message)
        }
        setCharacterData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [])

  return (
    <section className="container">
      {loading && <Loading />}

      {error ? (
        <Alert type="danger">{error}</Alert>
      ) : (
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
      )}
    </section>
  )
}

export default CharacterLayout

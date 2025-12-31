import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Error from '../../components/Alert/Alert'
import Alert from '../../components/Alert/Alert'
import Loading from '../../components/Loading/Loading'

import CharacterContent from './CharacterContent/CharacterContent'

function CharacterLayout() {
  const { id } = useParams()
  const [characterData, setCharacterData] = useState({})

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

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
      {error && <Alert type="danger">{error}</Alert>}

      <CharacterContent data={characterData} />
    </section>
  )
}

export default CharacterLayout

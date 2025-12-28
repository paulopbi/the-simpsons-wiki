import './CharactersList.css'

import { useEffect, useState } from 'react'

import Card from '../../../components/Card/Card'
import Alert from '../../../components/Alert/Alert'

function CharactersList() {
  const [data, setData] = useState(null)
  const [page, setPage] = useState(1)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCharacters = async (currentPage) => {
      setLoading(true)
      setError('')

      try {
        const BASE_URL = `https://thesimpsonsapi.com/api/characters`

        const request = await fetch(`${BASE_URL}?page=${currentPage}`)

        if (!request.ok) {
          throw new Error('Failed to find characters, please try again later.')
        }

        const response = await request.json()
        setData(
          data
            ? { ...data, results: [...data.results, ...response.results] }
            : response
        )
      } catch (error) {
        if (error instanceof Error) {
          console.error(error)
          setError(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters(page)
  }, [page])

  return (
    <section className="container">
      {data && data.results.length > 0 && (
        <div className="characters-list">
          {data.results.map((character) => (
            <Card key={character.id} data={character} />
          ))}
        </div>
      )}

      {error ? (
        <div className="alert-container">
          <Alert type="danger">{error}</Alert>
        </div>
      ) : (
        <div className="button-container">
          <button
            className="btn btn--primary"
            disabled={loading}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}

export default CharactersList

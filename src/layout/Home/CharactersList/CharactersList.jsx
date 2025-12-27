import './CharactersList.css'
import Card from '../../../components/Card/Card'
import { useEffect, useState } from 'react'

function CharactersList() {
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch('https://thesimpsonsapi.com/api/characters')
        const res = await req.json()
        setCharacters(res)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="container char-section">
      {characters &&
        characters.results.map((data) => <Card key={data.id} data={data} />)}
    </section>
  )
}

export default CharactersList

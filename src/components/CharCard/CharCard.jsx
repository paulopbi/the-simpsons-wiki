import './CharCard.css'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

function CharCard() {
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

export default CharCard

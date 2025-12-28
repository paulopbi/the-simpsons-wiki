import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>
        © {currentYear} - The Simpsons Wiki, all data provided by The Simpsons
        API.
      </p>
    </footer>
  )
}

export default Footer

import Link from 'next/link'

const linkStyle = {
  marginRight: '3em'
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/gothem">
          <a style={linkStyle}>City Hall</a>
        </Link>
        <Link href="/citizen">
          <a style={linkStyle}>Citizen</a>
        </Link>
        <Link href="/official?address=3PQUkwYARzugf7YDrYpDq93mmqmmEgZJMyw">
          <a style={linkStyle}>Official</a>
        </Link>
    </div>
)

export default Header